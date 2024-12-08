import { LaogOptions } from './types';
declare class Laog {
    private currentLevel;
    private showTimeStamps;
    private timeStampsFormat;
    private showCallStack;
    constructor(options?: Partial<LaogOptions>);
    /**
     * 根据日志类型判断是否需要记录日志
     * @param type - 日志类型
     * @returns 如果当前日志级别高于等于指定日志类型的级别,���返回true;否则返回false
     */
    private shouldLog;
    /**
     * 格式化日志消息的方法。
     *
     * @param type - 日志类型。
     * @param args - 日志消息的参数数组。
     * @returns 格式化后的日志消息对象，包含消息字符串、样式数组和剩余参数。
     */
    private formatLogMessage;
    /**
     * 获取调用栈信息
     * @returns 格式化后的调用栈信息
     */
    private getCallStack;
    /**
     * 记录日志消息。
     *
     * @private
     * @param {LogType} type - 日志类型。
     * @param {any[]} args - 日志消息的参数。
     * @returns {void}
     */
    private logMessage;
    log(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
}
export default Laog;
