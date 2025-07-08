import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'mXrap',
  tagline: 'for geotechnical engineers',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://mxrap.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/improved-lamp/',

  // Build error handling
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',
  onDuplicateRoutes: 'warn',

  // Pretty equations using KaTeX and the remark-math plugin
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  // Available translations (planned or implemented)
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    //locales: ['en', 'es', 'fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
          // "Edit this page" links - TODO only deploy on test builds
          editUrl:
            'https://website-051aa9.gitlab.io/admin/#/collections/docs/entries/',
          tags: '../_data/tags.yml',
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: false,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          feedOptions: {
            type: ['rss', 'json'],
            xslt: true,
          },
          editUrl:
            'https://website-051aa9.gitlab.io/admin/#/collections/blog/entries/',
          onUntruncatedBlogPosts: 'warn',
          authorsMapPath: '../_data/authors.json',
          showLastUpdateTime: true,
          tags: '../_data/tags.yml',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          // override infima css defaults sitewide
          customCss: './src/css/custom.css',
        },
        // debug: true,
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        max: 1920, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    'docusaurus-plugin-backlinks', // displays internal links to a page NYI
    'docusaurus-plugin-image-zoom', // image zoom on click
    // [
    //   '@docusaurus/plugin-client-redirects',
    //   {
    //     fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
    //     redirects: [
    //       // /docs/oldDoc -> /docs/newDoc
    //       {
    //         to: '/docs/support',
    //         from: '/support',
    //       },
    //       {
    //         to: '/docs/contact',
    //         from: '/contact',
    //       },
    //       {
    //         to: '/docs/resources',
    //         from: ['/training', '/resources'],
    //       },
    //     ],
    //   },
    // ],
    // [
    //   '@docusaurus/plugin-pwa',
    //   {
    //     debug: true,
    //     offlineModeActivationStrategies: [
    //       'appInstalled',
    //       'standalone',
    //       'queryString',
    //     ],
    //     pwaHead: [
    //       {
    //         tagName: 'link',
    //         rel: 'icon',
    //         href: '/img/branding/XOnly.svg',
    //       },
    //       {
    //         tagName: 'link',
    //         rel: 'manifest',
    //         href: '/manifest.json', // your PWA manifest
    //       },
    //       {
    //         tagName: 'meta',
    //         name: 'theme-color',
    //         content: '#262262',
    //       },
    //     ],
    //   },
    // ],
  ],

  themes: [
    // local search: https://github.com/easyops-cn/docusaurus-search-local
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        indexPages: false,
        searchBarShortcutHint: false,
        ignoreFiles: ['README.md'],
      },
    ],
  ],

  themeConfig: {
    image: 'img/generic-mxrap.png',
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      },
    },
    navbar: {
      logo: {
        alt: 'mXrap Logo',
        src: 'img/branding/mXrap_blue.svg',
        srcDark: 'img/branding/mXrap_white.png',
      },
      items: [
        {to: '/docs', label: 'Docs', position: 'left'},
        {
          type: 'dropdown',
          label: 'Apps',
          to: 'apps',
          position: 'left',
          items: [
            {
              to: '/apps/seismic',
              label: 'Mining Induced Seismicity',
            },
            {
              to: '/apps/stope',
              label: 'Stope Reconciliation and Prediction',
            },
            {
              to: '/apps/rmda',
              label: 'Rock Mass Data Analyser',
            },
            {
              to: '/apps/inspections',
              label: 'Inspections and Data Entry',
            },
            {
              to: '/apps/instrumentation',
              label: 'Instrumentation',
            },
            {
              to: '/apps/caving',
              label: 'Caving',
            },
            {
              to: '/apps/numerical-modelling',
              label: 'Numerical Modelling Integration',
            },
            {
              to: '/apps/damage-mapping',
              label: 'Damage Mapping',
            },
            {
              to: '/apps/surface-monitoring',
              label: 'Surface Monitoring',
            },
            {
              to: '/apps/paste-backfill',
              label: 'Paste Backfill',
            },
            {
              to: '/apps/utilities',
              label: 'Utilities',
            },
          ],
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
          sidebar: {
            groupByYear: true,
          },
        },
        {to: '/support', label: 'Support', position: 'left'},
        {to: '/downloads', label: 'Downloads', position: 'left'},
        {
          type: 'dropdown',
          label: 'About',
          to: '/about',
          position: 'left',
          items: [
            {
              to: '/acg',
              label: 'ACG',
            },
            {
              to: '/consortium',
              label: 'Consortium',
            },
            {
              to: '/papers',
              label: 'Papers',
            },
            {
              to: '/team',
              label: 'Team',
            },
            {to: '/contact', label: 'Contact'},
          ],
        },

        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          html: '<Obfuscate email="info@mxrap.com">Email</Obfuscate>',
        },
        {
          html: '<Obfuscate tel="+61864887201">Phone</Obfuscate>',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/mxrap',
        },
        {
          label: 'Disclaimer',
          to: '/disclaimer',
        },
      ],
      logo: {
        src: '/img/branding/ACG_white.png',
        href: 'https://acg.uwa.edu.au',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Australian Centre for Geomechanics`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
