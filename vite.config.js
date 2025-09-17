import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
    plugins: [
        imagetools(
            // {defaultDirectives: () => new URLSearchParams({ format: 'avif;webp', quality: '80' })}
        ),
        react(),
        tailwindcss()
    ],
})
