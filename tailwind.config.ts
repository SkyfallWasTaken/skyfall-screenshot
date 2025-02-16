import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import catppuccin from "@catppuccin/tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const accent = "text";
const linkColor = "mauve";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },

            "--tw-prose-body": theme("colors.text.DEFAULT"),
            "--tw-prose-headings": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-lead": theme("colors.text.DEFAULT"),
            "--tw-prose-links": theme(`colors.${linkColor}.DEFAULT`),
            "--tw-prose-bold": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-counters": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-bullets": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-hr": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-quotes": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-quote-borders": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-captions": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-code": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-pre-code": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-pre-bg": theme("colors.base.DEFAULT"),
            "--tw-prose-th-borders": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-td-borders": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-body": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-bullets": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-hr": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-quotes": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-quote-borders": theme(
              `colors.${accent}.DEFAULT`
            ),
            "--tw-prose-invert-captions": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-td-borders": theme(`colors.${accent}.DEFAULT`),
          },
        },
      }),
      fontFamily: {
        sans: ["Inter Variable", ...fontFamily.sans],
      },
    },
  },

  plugins: [typography, forms, catppuccin({ defaultFlavour: "mocha" })],
} satisfies Config;
