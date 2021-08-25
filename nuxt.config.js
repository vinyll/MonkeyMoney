const env = process.env.NODE_ENV

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicRuntimeConfig: {
    currency: {
      name: "Bananas",
      symbol: "🍌",
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'monkeymoney',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vant/lib/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vant',
    '@/plugins/request',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  request: {
    hey: "joe",
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'nuxt-client-init-module',
  ],

  // @TODO: try to use axios again, currently request/$api are used.
  axios: {
    baseURL: env === 'production' ? 'https://monkeymoney.connect.cafe' : 'http://localhost:3579',
  },

  proxy: {
    '/api': {
      target: env === 'production' ? 'https://api.monkeymoney.connect.cafe' : 'http://localhost:3579',
      pathRewrite: {'^/api': ''}
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
