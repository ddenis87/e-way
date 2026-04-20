import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig(({ command }) => {
    return {
        base: command === 'build' ? '/e-way/' : '/',
        plugins: [
            vue(),
            vuetify({
                autoImport: true,
            }),
            VitePWA({
                registerType: 'autoUpdate',
                injectRegister: 'auto',
                workbox: {
                    cleanupOutdatedCaches: true,
                    globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
                },
                manifest: {
                    name: 'Easy way',
                    short_name: 'e-Way',
                    description: 'Easy way to move',
                    theme_color: '#42b883',
                    background_color: '#ffffff',
                    display: 'standalone', // Это делает приложение похожим на нативное
                    icons: [
                        {
                            src: 'logo_192x192.png',
                            sizes: '192x192',
                            type: 'image/png',
                        },
                        {
                            src: 'logo_512x512.png',
                            sizes: '512x512',
                            type: 'image/png',
                        },
                        {
                            src: 'logo_512x512.png',
                            sizes: '512x512',
                            type: 'image/png',
                            purpose: 'any maskable', // Важно для иконок на Android
                        },
                    ],
                },
            }),
        ],
    };
});