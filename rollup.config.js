import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import server from 'rollup-plugin-serve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import terser from '@rollup/plugin-terser';
import del from 'rollup-plugin-delete';
import { visualizer } from 'rollup-plugin-visualizer';

const isDev = process.env.NODE_ENV === 'development';

// 公共插件
const commonPlugins = [
  resolve({
    browser: true, // 解析浏览器环境的依赖
    extensions: ['.js', '.ts'], // 支持省略 .ts 扩展名
  }),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
    declaration: true, // 生成类型声明
    declarationDir: 'dist', // 类型声明输出目录
    outDir: 'dist', // 输出目录
  }),
  terser({
    mangle: false, // 不混淆代码
    format: {
      comments: false, // 移除所有注释
    },
  }),
  del({ targets: 'dist/*' }), // 在构建前删除 dist 目录
];

// 开发环境插件
const devPlugins = isDev ? [
  server({
    open: true,
    openPage: '/',
    port: 3000,
    contentBase: ['dist', 'public'],
  }),
  livereload({
    watch: 'dist', // 监听 dist 目录的变化
  }),
 ] : [];

// 生产环境插件
const prodPlugins = !isDev ? [
  visualizer({
    filename: './stats.html', // 输出 HTML 文件名
    title: 'Laog Bundle Analysis', // 页面标题
    open: true, // 自动打开分析页面
    gzipSize: true, // 显示 gzip 压缩大小
    brotliSize: true, // 显示 brotli 压缩大小
  }),
]: [];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/laog.js',
      format: 'esm',
    },
  ],
  plugins: [
    ...commonPlugins,
    ...devPlugins,
    ...prodPlugins,
  ].filter(Boolean),
  watch: {
    include: 'src/**', // 只监听 src 目录下的文件变动
    clearScreen: true, // 每次重新构建时清空控制台
  },
};
