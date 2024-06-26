// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ["~/components"],
  },
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  ssr: false,
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  devServer: {
    port: 3000,
    host: "localhost",
  },
  // hooks: {
  //     "pages:extend"(pages: ) {
  //       pages.push({

  //       })
  //     },
  //   },
});
