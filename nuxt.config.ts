import { defineNuxtConfig } from 'nuxt'
import { IntlifyModuleOptions } from '@intlify/nuxt3'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
    modules: [
      '@nuxtjs/tailwindcss',
      '@vueuse/nuxt',
      'nuxt-icons',
      '@intlify/nuxt3',
      '@nuxtjs/supabase',
      '@kevinmarrec/nuxt-pwa'
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

    pwa: {
      meta: {
        mobileAppIOS: true,
        lang: 'ja'
      },
      manifest: {
        lang: 'ja',
        name: 'Nuxt3 SSR with PWA',
        short_name: 'PWA/Nuxt3',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        start_url: 'https://candra-herdiana.netlify.app/'
      },
      workbox: {
        enabled: false
      }
    }

})
