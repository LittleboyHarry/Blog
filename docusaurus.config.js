// 配置说明: https://v2.docusaurus.io/docs/docusaurus.config.js
const path = require('path');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'LittleboyHarry 博客',
  tagline: 'The tagline of my site',
  url: 'https://littleboyharry.me',
  baseUrl: '/',
  favicon: 'img/icons/favicon.ico',
  organizationName: 'littleboyharry', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Harry 技术博客',
      logo: {
        alt: 'My Site Logo',
        src: 'img/goggles.jpg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '博文',
          position: 'left',
        },
        { to: 'blog', label: '日记', position: 'left' },
        { to: 'solutions', label: '求解栈', position: 'right' },
        {
          href: 'https://github.com/littleboyharry',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Built with Docusaurus.<br/>站点已使用谷歌分析，我需要了解你以提供更好的服务~`,
    },
    googleAnalytics: {
      trackingID: 'UA-177209332-1',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: 'Owned by LittleboyHarry',
            language: 'zh-CN',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
    path.resolve(__dirname, 'src/custom-plugin'),
  ],
};
