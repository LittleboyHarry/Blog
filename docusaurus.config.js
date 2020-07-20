// 配置说明: https://v2.docusaurus.io/docs/docusaurus.config.js

module.exports = {
  title: 'LittleboyHarry 博客',
  tagline: 'The tagline of my site',
  url: 'https://littleboyharry.me',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'littleboyharry', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  themeConfig: {
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
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/littleboyharry',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
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
};
