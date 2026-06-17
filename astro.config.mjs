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
        type: 'light',
        colors: {
          'editor.background': '#eeeeee',
          'editor.foreground': '#2d2d2d',
        },
        tokenColors: [
          { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#8b8585' } },
          { scope: ['string', 'constant.other.symbol'], settings: { foreground: '#5f6d52' } },
          { scope: ['constant.numeric', 'constant.language'], settings: { foreground: '#7a6142' } },
          { scope: ['keyword', 'storage', 'entity.name.tag'], settings: { foreground: '#4f6570' } },
          { scope: ['entity.name.function', 'support.function'], settings: { foreground: '#4f5f7a' } },
          { scope: ['variable', 'entity.name'], settings: { foreground: '#2d2d2d' } },
        ],
      },
    },
    remarkPlugins: [[remarkMath, { singleDollarTextMath: true }]],
    rehypePlugins: [rehypeKatex],
  },
});
