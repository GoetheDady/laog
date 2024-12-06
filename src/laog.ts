import dayjs from 'dayjs';
import { consola } from 'consola';
import { LaogOptions, LogLevel, LogType } from './types';
import { LogLevels } from './constants';
import { getLogStyle, timeStampsStyles } from './styles';

consola.info('%c hello', 'color: red; background-color: blue;');
consola.warn('%c hello', 'color: red;');
consola.error('%c hello', 'color: red;');

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
  private currentLevel: LogLevel = 1;

  private showTimeStamps: boolean = true;

  constructor(options: Partial<LaogOptions> = {}) {
    this.currentLevel = handleLogLevel(options.level || LogLevels.log);
  }

  private shouldLog(type: LogType): boolean {
    return LogLevels[type] >= this.currentLevel;
  }

  private logMessage(type: LogType, args: any[]) {
    if (!this.shouldLog(type)) {
      return;
    }
    const style = getLogStyle(type);
    const badge = `%c[${type}]`;
    const timestamps = `%c${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')}`;
    if (typeof args[0] === 'string') {
      let params = [`${badge}%c ${args[0]}`, style, '', ...args.slice(1)];
      if (this.showTimeStamps) {
        params = [
          `${timestamps} ${badge}%c ${args[0]}`,
          timeStampsStyles,
          style,
          '',
          ...args.slice(1),
        ];
      }
      console[type](...params);
    } else if (this.showTimeStamps) {
      console[type](`${timestamps} ${badge}`, timeStampsStyles, style, ...args);
    } else {
      console[type](badge, style, ...args);
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
