# Laog 🪵

English | [简体中文](../README.md)

A lightweight browser logging library with enhanced styling and extensibility. ✨

## ✨ Features

- 📊 Multiple log levels: `log`, `info`, `warn`, `error`, `verbose`, `silent`
- ⏰ Timestamp display with customizable format
- 🔍 Call stack tracking
- 🎨 Customizable log styles
- 📋 Deep cloning of object parameters

## 📦 Installation

Using npm:
```bash
npm install laog
```
Or using yarn:

```bash
yarn add laog
```
## 🚀 Usage
```typescript
import Laog from 'laog';

// Create a default instance
const logger = new Laog({
  level: 2, // Set log level
  showTimeStamps: true, // Show timestamps
});

logger.log('This is a normal log');
logger.info('This is an info log');
logger.warn('This is a warning log');
logger.error('This is an error log');
```
## ⚙️ Configuration Options

```typescript
interface LaogOptions {
  level: LogLevel; // Log level
  showTimeStamps: boolean; // Whether to show timestamps
}
```

## 🎚️ Log Levels
```typescript
type LogLevel = 1 | 2 | 3 | 4;
type LogType = 'log' | 'info' | 'warn' | 'error';
```

## 🎨 Log Styles
Each log type has its unique style and emoji:
- log: 📝 Blue background
- info: ℹ️ Deep blue background
- warn: ⚠️ Yellow background
- error: ❌ Red background

## 🤝 Contributing
Contributions are welcome! Please visit our [GitHub repository](https://github.com/GoetheDady/laog) to submit issues or PRs.

## 📄 License
MIT License © 2024-Present