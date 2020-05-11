module.exports = {
  mode: 'universal',
  serverMiddleware: ['~/api/routes/index'],
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    htmlAttrs: {
      lang: 'en'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ff9897' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vee-validate',
    {
      src: '~/plugins/global.js'
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    //"@nuxtjs/auth",
    '@nuxtjs/axios'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'Français',
            code: 'fr',
            iso: 'fr-FR',
            file: 'fr-FR.js'
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-CA',
            file: 'en-CA.js'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        strategy: 'prefix_and_default',
        defaultLocale: 'en'
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
