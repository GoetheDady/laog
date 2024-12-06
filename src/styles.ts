import { LogType } from './types';

export const commonStyles =
  'padding: 2px 4px; border-radius: 4px; font-size: 14px;';

export const timeStampsStyles =
  'color: #6c757d; font-size: 12px; font-style: italic;';

const LogStyles: Record<LogType | string, string> = {
  verbose: 'color: #6c757d',
  log: `color: #fff; background-color: #66b2ff; ${commonStyles}`, // 修改背景色
  info: `color: #fff; background-color: #007bff; ${commonStyles}`,
  warn: `color: #000; background-color: #ffc107; ${commonStyles}`,
  error: `color: #fff; background-color: #dc3545; ${commonStyles}`,
  silent: 'display: none',
};

export function getLogStyle(type: LogType): string {
  return LogStyles[type] || '';
}
