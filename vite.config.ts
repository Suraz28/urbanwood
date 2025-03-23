import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Allow access from any network
    port: 8080, // Set custom port
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(), // Use componentTagger only in development mode
  ].filter(Boolean), // Remove false values from the array
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Define alias for clean imports
    },
  },
}));
