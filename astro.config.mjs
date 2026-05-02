import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [{
    provider: fontProviders.google(),
    name: 'Cormorant Garamond',
    cssVariable: '--font-cormorant',
    fallbacks: ['Georgia', 'serif'],
    display: 'swap',
    options: {
      variants: [{
        weights: ["300 600"],
        styles: ["normal", "italic"]
      }]
    }
  }, {
    provider: fontProviders.google(),
    name: 'Lora',
    cssVariable: '--font-lora',
    fallbacks: ['Georgia', 'serif'],
    display: 'swap',
    options: {
      variants: [{
        weights: ["300 500"],
        styles: ["normal", "italic"]
      }]
    }
  }, {
    provider: fontProviders.google(),
    name: 'Noto Serif JP',
    cssVariable: '--font-noto',
    fallbacks: ['serif'],
    display: 'swap',
    options: {
      variants: [{
        weights: ["200 400"],
        styles: ["normal"]
      }]
    }
  }]
});