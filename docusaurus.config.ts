import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Module JS',
  tagline: 'Top Autocomplete Tools for React, Angular and Vue*',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://modulejs.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nodeworld', // Usually your GitHub org/user name.
  projectName: 'ModuleJS', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Module JS',
      logo: {
        alt: 'Module JS Logo',
        src: 'img/modulejs.svg',
      },
      items: [
        {
          position: 'left',
          label: 'React',
          to: 'docs/react/introduction/intro',
        },
        {
          position: 'left',
          label: 'Angular',
          to: 'docs/angular/introduction/intro',
        },
        {
          href: 'https://github.com/nodeworld',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'React',
              to: '/docs/react/introduction/intro',
            },
            {
              label: 'Angular',
              to: '/docs/angular/introduction/intro',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nodeworld',
            },
            {
              label: 'Privacy Policy',
              to: "/privacy"
            },
            {
              label: 'Terms and Conditions',
              to: "/terms"
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} modulejs.org`,
      logo: {
        src: '/img/modulejs.svg',
        height: 100,
        width: 100
      }
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
