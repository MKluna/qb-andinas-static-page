import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  site: 'https://mkluna.github.io/qb-andinas-static-page/',
  integrations: [tailwind()]
});