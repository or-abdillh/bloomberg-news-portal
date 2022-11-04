// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Bloomberg - Nuxt 3',
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700&display=swap' },
            ],
            script: [
                { src:'https://kit.fontawesome.com/b026c11a83.js', crossorigin: 'anonymous' }
            ],
            meta: [
                { name: 'description', content: 'Bloomberg news app' }
            ]
        }
    },
    modules: ['@nuxtjs/tailwindcss'],
    vite: {
        server: {
            watch: {
                usePolling: true
            }
        }
    }
})