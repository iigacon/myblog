import path from 'path'
import fs from 'fs'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nguyen Duc',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css',
    '@/assets/css/ckEditor.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "@/plugins/antd-ui"
    "@/plugins/ckeditor"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment',
    'nuxt-vite',
  ],
  // moment: {
  //   locales: ['en']
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // loaders: {
    //   less: {
    //     lessOptions: {
    //       javascriptEnabled: true,
    //     },
    //   },
    // },
  },
  vite: {
    build: true,
    ssr: false
  },
  // server: {
  //   host: '0', // default: localhost
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
  //     cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt'))
  //   }
  // },
  ssr: false,
  dev: process.env.NODE_ENV !== 'production'
}
