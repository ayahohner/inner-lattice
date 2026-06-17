import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
  site: 'https://inner-lattice.com',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: {
        name: 'inner-lattice',
        type: 'dark',
        colors: {
          'editor.background': '#26323a',
          'editor.foreground': '#edf4f5',
        },
        tokenColors: [
          { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#9fb0b8' } },
          { scope: ['string', 'constant.other.symbol'], settings: { foreground: '#c7d6b7' } },
          { scope: ['constant.numeric', 'constant.language'], settings: { foreground: '#e7c889' } },
          { scope: ['keyword', 'storage', 'entity.name.tag'], settings: { foreground: '#9fc4cf' } },
          { scope: ['entity.name.function', 'support.function'], settings: { foreground: '#bfd4eb' } },
          { scope: ['variable', 'entity.name'], settings: { foreground: '#edf4f5' } },
        ],
      },
    },
    remarkPlugins: [[remarkMath, { singleDollarTextMath: true }]],
    rehypePlugins: [rehypeKatex],
  },
});
