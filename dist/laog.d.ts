import { LaogOptions } from './types';
declare class Laog {
    private currentLevel;
    private showTimeStamps;
    constructor(options?: Partial<LaogOptions>);
    private shouldLog;
    private logMessage;
    log(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
}
export default Laog;
