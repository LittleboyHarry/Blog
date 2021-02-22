// 配置说明: https://v2.docusaurus.io/docs/docusaurus.config.js
const path = require('path');
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

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
      title: 'LittleboyHarry Blog',
      logo: {
        alt: 'My Site Logo',
        src: 'avatar.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '博文',
          position: 'left',
        },
        { to: 'blog', label: '日记', position: 'left' },
        {
          href: 'https://github.com/LittleboyHarry',
          position: 'right',
          label: 'follow me',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              html: `<p style="text-align:center;">Built with Docusaurus.<br/>站点已使用 Google Analytics ，我想多了解一下各位亲爱的读者~</p>`,
            },
          ],
        },
      ],
      copyright: `<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />本站点内作品采用<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">知识共享署名-相同方式共享 4.0 国际许可协议</a>进行许可。`,
    },
    googleAnalytics: {
      trackingID: 'UA-177209332-1',
    },
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: 'Owned by LittleboyHarry',
            language: 'zh-CN',
          },
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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
