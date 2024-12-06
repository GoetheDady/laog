export type LogLevel = 1 | 2 | 3 | 4;
export type LogType = 'log' | 'info' | 'warn' | 'error';
export interface LaogOptions {
    level: LogLevel;
    showTimeStamps: boolean;
}
