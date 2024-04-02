// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  pages: true,
  modules: [
    'nuxt-icon', 
    '@pinia/nuxt', 
    '@nuxtjs/i18n',
    '@pinia-plugin-persistedstate/nuxt'
  ],

  // @ts-ignore
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en-EN.json'
      },
      {
        code: 'np',
        name: 'Nepali',
        file: 'np-NP.json'
      }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
  },
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
});