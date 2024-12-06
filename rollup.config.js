import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import server from 'rollup-plugin-serve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';

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
    }),
    server({
      open: true,
      openPage: '/',
      port: 3000,
      contentBase: ['dist', 'public'],
    }),
    livereload({
      watch: 'dist', // 监听 dist 目录的变化
    }),
  ],
  watch: {
    include: 'src/**', // 只监听 src 目录下的文件变动
    clearScreen: true, // 每次重新构建时清空控制台
  },
};
