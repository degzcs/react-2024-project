import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3100,
        proxy: {
            '/api': {
                target: 'http://localhost:3101',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),

            }
        },

    },
    test: {
        testMatch: ['**/*.test.js'],
        gloabls: true,
        testEnvironment: 'jsdom',
        setupFiles: './src/setupTests.js',
        css: true
    }
})
