import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config/tailwind.config.ts";

const config: Pick<Config, "prefix" | "presets"> = {
  prefix: "ui-",
  presets: [sharedConfig as any],
};

export default config;
