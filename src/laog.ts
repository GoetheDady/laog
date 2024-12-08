import dayjs from 'dayjs';
import { LaogOptions, LogLevel, LogType } from './types';
import { LogLevels } from './constants';
import { getLogStyle, timeStampsStyles, emojiStyles } from './styles';
import { consola } from 'consola';

consola.info('Hello, Laog!');

// 处理日志等级方法
function handleLogLevel(level: number): LogLevel {
  if (level < LogLevels.verbose) {
    return LogLevels.log as LogLevel;
  }
  if (level > LogLevels.error) {
    return LogLevels.error as LogLevel;
  }
  return level as LogLevel;
}

class Laog {
  // 日志等级
  private currentLevel: LogLevel = 1;
  // 是否显示时间戳
  private showTimeStamps: boolean = true;
  // 时间戳自定义格式
  private timeStampsFormat: string = 'YYYY-MM-DD HH:mm:ss.SSS';
  // 是否显示调用栈
  private showCallStack: boolean = false;

  constructor(options: Partial<LaogOptions> = {}) {
    this.currentLevel = handleLogLevel(options.level || LogLevels.log);
    this.showTimeStamps = options.showTimeStamps ?? true;
    this.timeStampsFormat = options.timeStampsFormat || 'YYYY-MM-DD HH:mm:ss.SSS';
    this.showCallStack = options.showCallStack ?? false;
  }

  /**
   * 根据日志类型判断是否需要记录日志
   * @param type - 日志类型
   * @returns 如果当前日志级别高于等于指定日志类型的级别,���返回true;否则返回false
   */
  private shouldLog(type: LogType): boolean {
    return LogLevels[type] >= this.currentLevel;
  }

  /**
   * 格式化日志消息的方法。
   *
   * @param type - 日志类型。
   * @param args - 日志消息的参数数组。
   * @returns 格式化后的日志消息对象，包含消息字符串、样式数组和剩余参数。
   */
  private formatLogMessage(type: LogType, args: any[]) {
    const style = getLogStyle(type);
    const emojiMap = {
      log: '📝',
      info: 'ℹ️',
      warn: '⚠️',
      error: '❌',
    };
    const badge = `%c${emojiMap[type]} %c[${type.toUpperCase()}]`;
    // 如果第一个参数是字符串，那么它是日志消息
    if (typeof args[0] === 'string') {
      if (this.showTimeStamps) {
        const timestamps = `%c${dayjs().format(this.timeStampsFormat)}`;
        return {
          message: `${timestamps} ${badge}%c ${args[0]}`,
          styles: [timeStampsStyles, emojiStyles, style, ''],
          rest: args.slice(1)
        };
      }
      return {
        message: `${badge}%c ${args[0]}`,
        styles: [emojiStyles, style, ''],
        rest: args.slice(1)
      };
    }
    
    if (this.showTimeStamps) {
      const timestamps = `%c${dayjs().format(this.timeStampsFormat)}`;
      return {
        message: `${timestamps} ${badge}`,
        styles: [timeStampsStyles, emojiStyles, style],
        rest: args
      };
    }
    return {
      message: badge,
      styles: [emojiStyles, style],
      rest: args
    };
  }

  /**
   * 获取调用栈信息
   * @returns 格式化后的调用栈信息
   */
  private getCallStack(): string {
    const stack = new Error().stack;
    if (!stack) return '';
    
    // 分割调用栈并移除前三行（Error、getCallStack、logMessage）
    const lines = stack.split('\n').slice(4).map((line, index) => {
      // 提取文件路径和行号信息
      const match = line.match(/at\s+(?:(.+?)\s+\()?(?:(.+?):(\d+):(\d+)\)?|(.+)?)$/);
      if (!match) return `   ${index + 1}. ${line.trim()}`;
      
      const [, fnName, filePath, lineNum, colNum] = match;
      
      // 格式化输出
      return `   ${index + 1}. ${fnName || 'anonymous'} (${filePath}:${lineNum}:${colNum})`;
    });
    lines.unshift('Call stack:');
    return lines.join('\n');
  }

  /**
   * 记录日志消息。
   *
   * @private
   * @param {LogType} type - 日志类型。
   * @param {any[]} args - 日志消息的参数。
   * @returns {void}
   */
  private logMessage(type: LogType, args: any[]) {
    if (!this.shouldLog(type)) {
      return;
    }
    const { message, styles, rest } = this.formatLogMessage(type, args);
    if (this.showCallStack) {
      console.groupCollapsed(message, ...styles, ...rest);
      console.log(this.getCallStack());
      console.groupEnd();
      return;
    } else {
      console.log(message, ...styles, ...rest);
    }
  }

  log(...args: any[]) {
    this.logMessage('log', args);
  }

  info(...args: any[]) {
    this.logMessage('info', args);
  }

  warn(...args: any[]) {
    this.logMessage('warn', args);
  }

  error(...args: any[]) {
    this.logMessage('error', args);
  }
}

export default Laog;
