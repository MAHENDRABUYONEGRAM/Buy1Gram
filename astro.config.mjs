import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import cloudflare from "@astrojs/cloudflare"
import NetlifyCMS from "astro-netlify-cms"
import { config } from "./src/netlify-cms"

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
  adapter: cloudflare(),
})
