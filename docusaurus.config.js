// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title : 'ePlus News',
  tagline : 'Dinosaurs are cool',
  favicon : 'img/favicon.ico',

  // Set the production url of your site here
  url : 'https://news.eplus.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl : '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName : 'ePlus-DEV', // Usually your GitHub org/user name.
  projectName : 'news',           // Usually your repo name.

  onBrokenLinks : 'throw',
  onBrokenMarkdownLinks : 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n : {
    defaultLocale : 'vi',
    locales : [ 'vi', 'en' ],
  },

  presets : [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs : {
          routeBasePath : '/',
          sidebarPath : './sidebars.js',
          showLastUpdateTime : true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl : 'https://github.com/ePlus-DEV/news/edit/main/',
        },
        blog : {
          showReadingTime : true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl : 'https://github.com/ePlus-DEV/news/edit/main/',
        },
        theme : {
          customCss : './src/css/custom.css',
        },
        gtag : {
          trackingID : 'G-XE98YSP4LS',
        },
        sitemap : {
          changefreq : 'hourly',
        },
      }),
    ],
  ],

  themeConfig :
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image : 'img/docusaurus-social-card.jpg',
        navbar : {
          title : 'ePlus News',
          logo : {
            alt : 'ePlus News',
            src : 'img/logo.svg',
          },
          items : [
            {
              type : 'docSidebar',
              sidebarId : 'tutorialSidebar',
              position : 'left',
              label : 'News',
            },
            {to : '/blog', label : 'Blog', position : 'left'},
            {
              href : 'https://github.com/ePlus-DEV/news',
              label : 'GitHub',
              position : 'right',
            },
          ],
        },
        footer : {
          style : 'dark',
          links : [
            {
              title : 'Thông tin',
              items : [
                {
                  label : 'ePlus.DEV',
                  to : 'https://eplus.dev',
                },
              ],
            },
            {
              title : 'Mạng xã hội',
              items : [
                {
                  label : 'Discord',
                  href : 'https://discord.gg/gwFtTJHM',
                },
                {
                  label : 'Twitter',
                  href : 'https://twitter.com/david_nguyen94',
                },
              ],
            },
            {
              title : 'Mở rộng',
              items : [
                {
                  label : 'Blog',
                  to : '/blog',
                },
                {
                  label : 'GitHub',
                  href : 'https://github.com/ePlus-DEV/news',
                },
              ],
            },
          ],
          copyright : `© 2019-${
              new Date()
                  .getFullYear()}. ePlus.DEV Labs điều hành & phát triển.`,
        },
        prism : {
          theme : prismThemes.github,
          darkTheme : prismThemes.dracula,
        },
      }),
};

export default config;
