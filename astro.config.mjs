import { defineConfig, envField } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import dotenv from 'dotenv';
dotenv.config();

const SERVER_PORT = 4321;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://mkluna.github.io";
const SCRIPT = process.env.npm_lifecycle_event || "";
const isBuild = SCRIPT.includes("astro build");

let BASE_URL = isBuild ? LIVE_URL : LOCALHOST_URL;
let BASE_PATH = isBuild ? '/qb-andinas-static-page/' : '/';

export default defineConfig({
  server: { port: SERVER_PORT },
  output: "server",
  site: BASE_URL,
  base: BASE_PATH,
  trailingSlash: "always",
  integrations: [tailwind()],
  experimental: {
    env: {
      schema:{
        PUBLIC_SERVICE_ID: envField.string({
          context: 'client',
          access: 'public'
        }),
        PUBLIC_TEMPLATE_ID: envField.string({
          context: 'client',
          access: 'public'
        }),
        PUBLIC_KEY: envField.string({
          context: 'client',
          access: 'public',
        }),
        ID_PRD_SEVICE: envField.string({
          context: 'server',
          access: 'secret',
        }),
        ID_PRD_TEPLATE: envField.string({
          context: 'server',
          access: 'secret',
        }),
        ID_PRD_KEY: envField.string({
          context: 'server',
          access: 'secret',
        })
      }
    }
  }
});
