// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  extends: ["app/modules/home", "app/modules/track-code", "app/modules/cash", "app/modules/photo", "app/modules/race"],

  css: ["./app/assets/styles/main.scss"],

  modules: ["@nuxt/icon", "@nuxt/image"],
});
