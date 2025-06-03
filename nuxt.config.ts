// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],

  ui: {
    theme: {
      colors: ["primary", "error"],
    },
  },
  app: {
    head: {
      title:
        "TDM Tuấn Đức - Hệ thống showroom thiết bị vệ sinh, bếp, điện nước hàng đầu", // default fallback title
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});