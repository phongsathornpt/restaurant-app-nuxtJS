export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    target: 'static',
    head: {
        title: 'restaurant-app',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
    ],
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    axios: {
        // Do away with the baseUrl when using proxy
        proxy: true,
    },

    proxy: {
        // Simple proxy
        '/api/': {
            target: process.env.API_URL,
            pathRewrite: { '^/api/': '' },
        },
    },

    env: {
        API_URL: process.env.API_URL || 'http://localhost:8100',
    },
}
