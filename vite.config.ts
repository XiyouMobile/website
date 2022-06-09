import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // importToCDN({
    //   modules: [autoComplete('react'), autoComplete('react-dom'), autoComplete('antd')]
    // }),
    reactRefresh()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@common': path.resolve(__dirname, 'src/common')
    }
  },
  server: {
    proxy: {
      '^/api': {
        target: 'https://mobile.xiyou.edu.cn/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '/api')
      }
    }
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
