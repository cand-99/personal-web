import { defineNuxtConfig } from 'nuxt'
import { IntlifyModuleOptions } from '@intlify/nuxt3'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/tailwindcss',
      '@vueuse/nuxt',
      'nuxt-icons',
      '@intlify/nuxt3'
    ],

    css: [
        '@/assets/css/main.css',
      ],
    build: { transpile: ['@headlessui/vue'] },

      // localization - i18n config
    intlify: {
      localeDir: 'locales',
      vueI18n: {
        locale: 'en',
        fallbackLocale: 'en',
        availableLocales: ['en', 'id', 'ja', 'ko'],
      },
    },
})
