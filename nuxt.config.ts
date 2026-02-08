import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  devtools: { enabled: true },

  modules: ['@nuxt/content'],

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://velluahlroth.com',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'My Page',
      meta: [
        { name: 'description', content: 'Personal portfolio and blog' },
      ],
      script: [
        {
          innerHTML: `(function(){var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t)}})()`,
        },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
})
