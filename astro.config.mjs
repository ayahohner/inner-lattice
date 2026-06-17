import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
  site: 'https://inner-lattice.com',
  output: 'static',
  markdown: {
    remarkPlugins: [[remarkMath, { singleDollarTextMath: true }]],
    rehypePlugins: [rehypeKatex],
  },
});
