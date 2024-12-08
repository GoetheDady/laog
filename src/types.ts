export type LogLevel = 1 | 2 | 3 | 4;
export type LogType = 'log' | 'info' | 'warn' | 'error';

export interface LaogOptions {
  level: LogLevel; // Log level / 日志等级
  showTimeStamps: boolean; // Show timestamps / 是否显示时间戳
  timeStampsFormat: string; // Custom timestamp format / 时间戳自定义格式
  showCallStack: boolean; // Show call stack / 是否显示调用栈
}
