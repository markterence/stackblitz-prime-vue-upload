// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: ['nuxt-primevue', '@unocss/nuxt'],

  css: ['primevue/resources/themes/aura-light-blue/theme.css'],
});
