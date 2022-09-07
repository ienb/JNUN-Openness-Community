import type { UserConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const isBuild = command === 'build';
  return {
    base: '/',
    root,
    plugins: [vue({})],
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/variables.scss";`,
        },
      },
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
      minify: isBuild,
      terserOptions: {
        compress: {
          keep_infinity: true,
        }
      },
      chunkSizeWarningLimit: 1500,
    },
  }
}
