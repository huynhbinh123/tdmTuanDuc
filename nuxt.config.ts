export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@pinia/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: [
      { code: "vi", iso: "vi-VN", file: "vi.json", name: "Tiếng Việt" },
      { code: "en", iso: "en-US", file: "en.json", name: "English" },
    ],
    defaultLocale: "vi",
    lazy: true,
    langDir: "i18n/",
    vueI18n: "./i18n/i18n.config.ts",
  },
  css: ["~/assets/css/main.css"],

  ui: {
    theme: {
      colors: ["primary", "error"],
    },
  },
  app: {
    head: {
      title:
        "TDM Tuấn Đức - Hệ thống showroom thiết bị vệ sinh, bếp, điện nước hàng đầu",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:3000/api",
    },
  },
});
