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
            { label: 'Introduction',    slug: '' },
            { label: 'Getting Started', slug: 'guides/getting-started' },
            { label: 'Installation',    slug: 'guides/installation' },
          ],
        },
        {
          label: 'Core Concepts',
          items: [
            { label: 'Log Levels',     slug: 'guides/log-levels' },
            { label: 'PII Masking',    slug: 'guides/pii-masking' },
            { label: 'Transports',     slug: 'guides/transports' },
            { label: 'Multi-Instance', slug: 'guides/multi-instance' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Configuration',    slug: 'reference/configuration' },
            { label: 'API',              slug: 'reference/api' },
            { label: 'TypeScript Types', slug: 'reference/types' },
          ],
        },
        {
          label: 'Advanced',
          items: [
            { label: 'File Rotation',     slug: 'guides/file-rotation' },
            { label: 'Custom Transports', slug: 'guides/custom-transports' },
            { label: 'Browser Usage',     slug: 'guides/browser' },
            { label: 'Architecture',      slug: 'guides/architecture' },
          ],
        },
      ],
    }),
  ],
});
