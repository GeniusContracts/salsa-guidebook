
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','c9e'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','015'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','a84'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','96c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/addliquidity',
        component: ComponentCreator('/addliquidity','d85'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/analytics',
        component: ComponentCreator('/analytics','ba8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/cart-function',
        component: ComponentCreator('/cart-function','eee'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/claiming',
        component: ComponentCreator('/claiming','e06'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/claiming-rewards',
        component: ComponentCreator('/claiming-rewards','f78'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/compounding',
        component: ComponentCreator('/compounding','e80'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dashboard',
        component: ComponentCreator('/dashboard','a23'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/faas',
        component: ComponentCreator('/faas','608'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/gaming-hall',
        component: ComponentCreator('/gaming-hall','16b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/governance-voting',
        component: ComponentCreator('/governance-voting','048'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/limits',
        component: ComponentCreator('/limits','415'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/matter-analytics',
        component: ComponentCreator('/matter-analytics','757'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/matter-defi',
        component: ComponentCreator('/matter-defi','ba6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/menu-bar',
        component: ComponentCreator('/menu-bar','8c5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/new-pool',
        component: ComponentCreator('/new-pool','86e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/nodes-indexer',
        component: ComponentCreator('/nodes-indexer','dcc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/rationale-wtz',
        component: ComponentCreator('/rationale-wtz','a70'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/recipes',
        component: ComponentCreator('/recipes','55e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/removeliquidity',
        component: ComponentCreator('/removeliquidity','01e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/salsadao',
        component: ComponentCreator('/salsadao','64f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/selecting-theme',
        component: ComponentCreator('/selecting-theme','a54'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/SPI',
        component: ComponentCreator('/SPI','2c5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/spicy-theme',
        component: ComponentCreator('/spicy-theme','840'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/spicydashboard',
        component: ComponentCreator('/spicydashboard','d0c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/spicyswap',
        component: ComponentCreator('/spicyswap','d41'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/staking',
        component: ComponentCreator('/staking','351'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/stakingcore',
        component: ComponentCreator('/stakingcore','d44'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/svaults',
        component: ComponentCreator('/svaults','047'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/swaps',
        component: ComponentCreator('/swaps','fc8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/syncing-wallet-matter',
        component: ComponentCreator('/syncing-wallet-matter','fdb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tipping',
        component: ComponentCreator('/tipping','670'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/unstaking',
        component: ComponentCreator('/unstaking','22e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/unstakingcore',
        component: ComponentCreator('/unstakingcore','501'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/xtz-via-wtz',
        component: ComponentCreator('/xtz-via-wtz','2ed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
