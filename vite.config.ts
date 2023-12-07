import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPath from "vite-tsconfig-paths";

export default defineConfig({
  base: "/react-ui/",
  plugins: [react(), tsconfigPath()],
});
