import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Alpha-Primus.com/", // must match your GitHub repo name
  plugins: [react()],
});
