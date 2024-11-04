import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import vike from 'vike/plugin'

export default defineConfig({
  plugins: [react(), vike({ prerender: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
