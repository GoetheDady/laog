import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import server from 'rollup-plugin-serve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';

const isDev = process.env.NODE_ENV === 'development';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/laog.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: 'dist/laog.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/laog.umd.js',
      format: 'umd',
      name: 'Laog',
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
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
    isDev &&
      server({
        open: true,
        openPage: '/',
        port: 3000,
        contentBase: ['dist', 'public'],
      }),
    isDev &&
      livereload({
        watch: 'dist', // 监听 dist 目录的变化
      }),
  ].filter(Boolean),
  watch: {
    include: 'src/**', // 只监听 src 目录下的文件变动
    clearScreen: true, // 每次重新构建时清空控制台
  },
};
