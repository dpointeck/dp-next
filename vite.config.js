import { resolve } from 'path'
import kirby from 'vite-plugin-kirby'

export default ({ mode }) => ({
  root: 'resources',
  base: mode === 'development' ? '/' : '/dist/',

  build: {
    outDir: resolve(process.cwd(), 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: ['resources/js/index.js'],
    },
  },
  plugins: [kirby()],
})
