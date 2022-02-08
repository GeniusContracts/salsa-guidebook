const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SpicySwap Docs',
  tagline: '',
  url: 'https://guide.salsadao.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.
  onBrokenLinks: 'ignore',
  themeConfig: {
    navbar: {
      title: 'SpicySwap Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/spicy.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Home',
        },
        {to: '/blog', label: 'News', position: 'left'},
        {
          href: 'https://spicyswap.xyz',
          label: 'Try SpicySwap',
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
              label: 'Home',
              to: '/',
            },
          ],
        },
        {
          title: 'Apps',
          items: [
            {
              label: 'SpicySwap',
              href: 'https://spicyswap.xyz',
            },
            {
              label: 'SalsaDAO',
              href: 'https://salsadao.xyz',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GC Medium',
              href: 'https://geniuscontracts.medium.com/',
            },
            {
              label: 'GC Discord',
              href: 'https://discord.gg/E2kK38mb',
            },
            {
              label: 'GC Twitter',
              href: 'https://twitter.com/geniuscontracts',
            },
            {
              label: 'SalsaDAO Telegram',
              href: 'https://t.me/salsadao',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Genius Contracts. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },  
  plugins: [      
    [
      "docusaurus-graphql-plugin",
      {
        id: "api",
        schema: "schema.graphql",
        routeBasePath: "/docs/api",
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
