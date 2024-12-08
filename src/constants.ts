import { LogType } from './types';

/**
 * 日志级别常量。
 *
 * 该常量定义了不同日志类型对应的数值级别，用于控制日志的输出。
 *
 * @type {Record<LogType | string, number>}
 * @property {number} verbose - 详细日志级别，数值为负无穷大。
 * @property {number} log - 普通日志级别，数值为1。
 * @property {number} info - 信息日志级别，数值为2。
 * @property {number} warn - 警告日志级别，数值为3。
 * @property {number} error - 错误日志级别，数值为4。
 * @property {number} silent - 静默日志级别，数值为正无穷大。
 */
export const LogLevels: Record<LogType | string, number> = {
  verbose: Number.NEGATIVE_INFINITY,
  log: 1,
  info: 2,
  warn: 3,
  error: 4,
  silent: Number.POSITIVE_INFINITY,
};


export const LOG_EMOJI_MAP: Record<LogType, string> = {
  log: '📝',
  info: 'ℹ️',
  warn: '⚠️',
  error: '❌'
};