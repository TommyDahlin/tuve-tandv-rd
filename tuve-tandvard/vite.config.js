import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const githubPagesBase = '/tuve-tandv-rd/'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? githubPagesBase : '/',
}))
