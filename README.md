# Laog

Laog 是一个轻量级的浏览器日志库，具有增强的样式和可扩展性。

## 特性

- 支持多种日志级别：`log`, `info`, `warn`, `error`, `verbose`, `silent`
- 支持时间戳显示
- 自定义日志样式

## 安装

使用 npm 安装：

```bash
npm install laog
```
或使用 yarn 安装：

```bash
yarn add laog
```

## 使用示例

```javascript
import Laog from 'laog';

// 创建一个默认实例
const logger = new Laog({
  level: 2, // 设置日志级别
  showTimeStamps: true, // 显示时间戳
});

logger.log('这是一个普通日志');
logger.info('这是一个信息日志');
logger.warn('这是一个警告日志');
logger.error('这是一个错误日志');
```

## 配置选项

```javascript
interface LaogOptions {
  level: LogLevel; // 日志级别
  showTimeStamps: boolean; // 是否显示时间戳
}
```

## 日志级别
```javascript
type LogLevel = 1 | 2 | 3 | 4;
type LogType = 'log' | 'info' | 'warn' | 'error';
```

## 贡献

欢迎贡献代码！
