import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],

  // 👇 ADD THIS PART
  server: {
    proxy: {
      "/send-email": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },

  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
