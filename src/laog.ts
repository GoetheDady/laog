import dayjs from 'dayjs';
import { LaogOptions, LogLevel, LogType } from './types';
import { LogLevels, LOG_EMOJI_MAP } from './constants';
import { getLogStyle, timeStampsStyles, emojiStyles } from './styles';
import rfdc from 'rfdc';

const _cloneDeep = rfdc();

/**
 * 根据日志级别处理并返回对应的日志级别。
 *
 * @param level - 数字表示的日志级别。
 * @returns 对应的日志级别。如果输入的级别小于 `LogLevels.verbose`，返回 `LogLevels.log`；
 *          如果输入的级别大于 `LogLevels.error`，返回 `LogLevels.error`；否则返回输入的级别。
 */
function handleLogLevel(level: number): LogLevel {
  if (level < LogLevels.verbose) return LogLevels.log as LogLevel;
  if (level > LogLevels.error) return LogLevels.error as LogLevel;
  return level as LogLevel;
}

class Laog {
  private currentLevel: LogLevel;
  private showTimeStamps: boolean;
  private timeStampsFormat: string;
  private showCallStack: boolean;

  constructor(options: Partial<LaogOptions> = {}) {
    this.currentLevel = handleLogLevel(options.level || LogLevels.log);
    this.showTimeStamps = options.showTimeStamps ?? true;
    this.timeStampsFormat = options.timeStampsFormat || 'YYYY-MM-DD HH:mm:ss.SSS';
    this.showCallStack = options.showCallStack ?? false;
  }

  /**
   * 判断当前日志级别是否应该被记录
   * @param type - 日志类型
   * @returns 如果日志级别大于等于当前设置的级别，返回 true
   */
  private shouldLog(type: LogType): boolean {
    return LogLevels[type] >= this.currentLevel;
  }

  /**
   * 格式化日志消息，添加时间戳、表情符号和样式
   * @param type - 日志类型
   * @param args - 日志参数数组
   * @returns 格式化后的消息对象，包含消息文本、样式数组和剩余参数
   */
  private formatLogMessage(type: LogType, args: any[]) {
    const parts = [];
    const styles = [];

    if (this.showTimeStamps) {
      parts.push(`%c${dayjs().format(this.timeStampsFormat)}`);
      styles.push(timeStampsStyles);
    }

    parts.push(`%c${LOG_EMOJI_MAP[type]}`, `%c[${type.toUpperCase()}]`, '%c');
    styles.push(emojiStyles, getLogStyle(type), '');

    return {
      message: `${parts.join(' ')} ${args[0]}`,
      styles,
      rest: args.slice(1)
    };
  }

  /**
   * 获取当前的调用堆栈信息
   * @returns 格式化后的调用堆栈字符串
   */
  private getCallStack(): string {
    const stack = new Error().stack;
    if (!stack) return '';

    const stackLines = stack.split('\n')
      .slice(4)
      .map((line, index) => {
        const match = line.match(/at\s+(?:(.+?)\s+\()?(?:(.+?):(\d+):(\d+)\)?|(.+)?)$/);
        if (!match) return `   ${index + 1}. ${line.trim()}`;
        
        const [, fnName = 'anonymous', filePath, lineNum, colNum] = match;
        return `   ${index + 1}. ${fnName} (${filePath}:${lineNum}:${colNum})`;
      });

    return ['Call stack:', ...stackLines].join('\n');
  }

  /**
   * 打印日志到控制台
   * @param message - 格式化后的消息
   * @param styles - 样式数组
   * @param rest - 剩余参数
   */
  private printLog(message: string, styles: string[], rest: any[]) {
    if (this.showCallStack) {
      console.groupCollapsed(message, ...styles, ...rest);
      console.log(this.getCallStack());
      console.groupEnd();
    } else {
      console.log(message, ...styles, ...rest);
    }
  }

  /**
   * 处理日志消息，包括参数处理、格式化和输出
   * @param type - 日志类型
   * @param args - 日志参数数组
   */
  private logMessage(type: LogType, args: any[]) {
    if (!this.shouldLog(type)) return;

    const safeArgs = args.map(arg => 
      typeof arg === 'object' && arg !== null ? _cloneDeep(arg) : arg
    );
    const { message, styles, rest } = this.formatLogMessage(type, safeArgs);
    
    this.printLog(message, styles, rest);
  }

  /**
   * 输出普通日志
   * @param args - 要记录的内容
   */
  log(...args: any[]) { this.logMessage('log', args); }

  /**
   * 输出信息日志
   * @param args - 要记录的内容
   */
  info(...args: any[]) { this.logMessage('info', args); }

  /**
   * 输出警告日志
   * @param args - 要记录的内容
   */
  warn(...args: any[]) { this.logMessage('warn', args); }

  /**
   * 输出错误日志
   * @param args - 要记录的内容
   */
  error(...args: any[]) { this.logMessage('error', args); }
}

export default Laog;
