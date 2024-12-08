import { LaogOptions } from './types';
declare class Laog {
    private currentLevel;
    private showTimeStamps;
    private timeStampsFormat;
    private showCallStack;
    constructor(options?: Partial<LaogOptions>);
    /**
     * 判断当前日志级别是否应该被记录
     * @param type - 日志类型
     * @returns 如果日志级别大于等于当前设置的级别，返回 true
     */
    private shouldLog;
    /**
     * 格式化日志消息，添加时间戳、表情符号和样式
     * @param type - 日志类型
     * @param args - 日志参数数组
     * @returns 格式化后的消息对象，包含消息文本、样式数组和剩余参数
     */
    private formatLogMessage;
    /**
     * 获取当前的调用堆栈信息
     * @returns 格式化后的调用堆栈字符串
     */
    private getCallStack;
    /**
     * 打印日志到控制台
     * @param message - 格式化后的消息
     * @param styles - 样式数组
     * @param rest - 剩余参数
     */
    private printLog;
    /**
     * 处理日志消息，包括参数处理、格式化和输出
     * @param type - 日志类型
     * @param args - 日志参数数组
     */
    private logMessage;
    /**
     * 输出普通日志
     * @param args - 要记录的内容
     */
    log(...args: any[]): void;
    /**
     * 输出信息日志
     * @param args - 要记录的内容
     */
    info(...args: any[]): void;
    /**
     * 输出警告日志
     * @param args - 要记录的内容
     */
    warn(...args: any[]): void;
    /**
     * 输出错误日志
     * @param args - 要记录的内容
     */
    error(...args: any[]): void;
}
export default Laog;
