// tailwind.config.ts
import type { Config } from "tailwindcss"
import sharedConfig from "../../packages/ui/tailwind.config";

const config: Pick<Config, "content" | "presets"> = {
    content: [
        "./src/**/*.tsx",
        "../../packages/ui/src/**/*.{tsx,ts}",
    ],
    presets: [sharedConfig],
}

export default config