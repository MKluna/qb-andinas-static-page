import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

const SERVER_PORT = 4321;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://mkluna.github.io";
const SCRIPT = process.env.npm_lifecycle_event || "";
const isBuild = SCRIPT.includes("astro build");

let BASE_URL = isBuild ? LIVE_URL : LOCALHOST_URL;
let BASE_PATH = isBuild ? '/qb-andinas-static-page/' : '/';

export default defineConfig({
  server: { port: SERVER_PORT },
  site: BASE_URL,
  base: BASE_PATH,
  trailingSlash: "always",
  integrations: [tailwind()]
});
