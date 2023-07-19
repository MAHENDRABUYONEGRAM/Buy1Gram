import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import NetlifyCMS from "astro-netlify-cms"
import { config } from "./src/netlify-cms"

import node from "@astrojs/node"

// https://astro.build/config
export default defineConfig({
  site: "https://Buyonegram.com",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind(),
    NetlifyCMS({
      config,
    }),
  ],
  experimental: {
    assets: true,
  },
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
  vite: {
    ssr: {
      noExternal: ["path-to-regexp"],
    },
  },
})
