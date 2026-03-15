import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://gourangadassamrat.github.io',
  base: '/log-wiz-docs',
  integrations: [
    starlight({
      title: 'log-wiz',
      description: 'Ultra-lightweight Node.js & Browser logger with auto PII masking and zero dependencies.',
      logo: {
        light: './src/assets/logo-light.svg',
        dark:  './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/GourangaDasSamrat/log-wiz',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/GourangaDasSamrat/log-wiz-docs/edit/main/',
      },
      customCss: [
        './src/styles/custom.css',
        './src/styles/hero.css',
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Introduction',    link: '/log-wiz-docs/' },
            { label: 'Getting Started', link: '/log-wiz-docs/guides/getting-started/' },
            { label: 'Installation',    link: '/log-wiz-docs/guides/installation/' },
          ],
        },
        {
          label: 'Core Concepts',
          items: [
            { label: 'Log Levels',     link: '/log-wiz-docs/guides/log-levels/' },
            { label: 'PII Masking',    link: '/log-wiz-docs/guides/pii-masking/' },
            { label: 'Transports',     link: '/log-wiz-docs/guides/transports/' },
            { label: 'Multi-Instance', link: '/log-wiz-docs/guides/multi-instance/' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Configuration',    link: '/log-wiz-docs/reference/configuration/' },
            { label: 'API',              link: '/log-wiz-docs/reference/api/' },
            { label: 'TypeScript Types', link: '/log-wiz-docs/reference/types/' },
          ],
        },
        {
          label: 'Advanced',
          items: [
            { label: 'File Rotation',     link: '/log-wiz-docs/guides/file-rotation/' },
            { label: 'Custom Transports', link: '/log-wiz-docs/guides/custom-transports/' },
            { label: 'Browser Usage',     link: '/log-wiz-docs/guides/browser/' },
            { label: 'Architecture',      link: '/log-wiz-docs/guides/architecture/' },
          ],
        },
      ],
    }),
  ],
});
