import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkListBlockMath from './src/plugins/remarkListBlockMath.mjs';

export default defineConfig({
  site: 'https://innerlattice.com',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: {
        name: 'inner-lattice',
        type: 'light',
        colors: {
          'editor.background': '#f9f8f5',
          'editor.foreground': '#3f362d',
        },
        tokenColors: [
          {
            scope: ['comment', 'punctuation.definition.comment'],
            settings: { foreground: '#74695c', fontStyle: 'italic' },
          },
          {
            scope: ['string', 'constant.other.symbol'],
            settings: { foreground: '#946000' },
          },
          {
            scope: ['constant.numeric', 'constant.language'],
            settings: { foreground: '#a14f35' },
          },
          {
            scope: ['keyword', 'storage', 'entity.name.tag'],
            settings: { foreground: '#855064' },
          },
          {
            scope: ['entity.name.function', 'support.function'],
            settings: { foreground: '#8a5b28' },
          },
          {
            scope: ['entity.name.type', 'support.type', 'support.class'],
            settings: { foreground: '#9a4e38' },
          },
          {
            scope: ['keyword.operator', 'punctuation.separator'],
            settings: { foreground: '#8a5a4a' },
          },
          {
            scope: ['variable', 'entity.name'],
            settings: { foreground: '#4c4138' },
          },
        ],
      },
    },
    remarkPlugins: [[remarkMath, { singleDollarTextMath: true }], remarkListBlockMath],
    rehypePlugins: [rehypeKatex],
  },
});
