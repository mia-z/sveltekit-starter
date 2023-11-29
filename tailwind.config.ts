import type { Config } from "tailwindcss";

export const config: Config = {
    content: [
        "src/**/*.svelte"
    ],    
    theme: {
        extend: {
            spacing: {
                128: "32rem",
                144: "36rem",
                160: "40rem",
                176: "44rem",
                192: "48rem",
                208: "52rem"
            },
            fontFamily: {
                "lobster": ["Lobster", "cursive"],
                "open-sans": ["Open Sans", "sans-serif"],
                "arimo": ["Arimo"],
                "roboto": ["Roboto Flex", "sans-serif"],
                "roboto-monospace": ["Roboto Mono", "monospace"],
                "wix-madefor-text": ["Wix Madefor Text", "sans-serif"],
                "nunito": ["Nunito Sans", "sans-serif"],
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark"]
    }
};

export default config;
