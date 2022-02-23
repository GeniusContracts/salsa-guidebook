
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
    component: ComponentCreator('/','658'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','96c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/$spi',
        component: ComponentCreator('/$spi','c3f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/$spi-farms',
        component: ComponentCreator('/$spi-farms','ed0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/addliquidity',
        component: ComponentCreator('/addliquidity','fab'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/analytics',
        component: ComponentCreator('/analytics','b26'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/api/enums',
        component: ComponentCreator('/api/enums','956'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/api/inputObjects',
        component: ComponentCreator('/api/inputObjects','848'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/api/interfaces',
        component: ComponentCreator('/api/interfaces','404'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/api/mutations',
        component: ComponentCreator('/api/mutations','660'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/api/objects',
        component: ComponentCreator('/api/objects','105'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/api/queries',
        component: ComponentCreator('/api/queries','a9e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/api/scalars',
        component: ComponentCreator('/api/scalars','0a1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/api/unions',
        component: ComponentCreator('/api/unions','dce'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/cart-function',
        component: ComponentCreator('/cart-function','899'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/claiming',
        component: ComponentCreator('/claiming','627'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/claiming-rewards',
        component: ComponentCreator('/claiming-rewards','5f1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/compounding',
        component: ComponentCreator('/compounding','7b6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dashboard',
        component: ComponentCreator('/dashboard','5d6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/faas',
        component: ComponentCreator('/faas','7ba'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/gaming-hall',
        component: ComponentCreator('/gaming-hall','435'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/governance-voting',
        component: ComponentCreator('/governance-voting','1c8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/matter-analytics',
        component: ComponentCreator('/matter-analytics','079'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/matter-defi',
        component: ComponentCreator('/matter-defi','9fa'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/menu-bar',
        component: ComponentCreator('/menu-bar','9fd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/new-pool',
        component: ComponentCreator('/new-pool','655'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/nodes-indexer',
        component: ComponentCreator('/nodes-indexer','41d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/rationale-wtz',
        component: ComponentCreator('/rationale-wtz','f39'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/removeliquidity',
        component: ComponentCreator('/removeliquidity','5c9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/salsadao',
        component: ComponentCreator('/salsadao','a9c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/selecting-theme',
        component: ComponentCreator('/selecting-theme','2dc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/spicy-theme',
        component: ComponentCreator('/spicy-theme','e78'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/spicydashboard',
        component: ComponentCreator('/spicydashboard','4d0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/spicyswap',
        component: ComponentCreator('/spicyswap','b34'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/staking',
        component: ComponentCreator('/staking','702'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/stakingcore',
        component: ComponentCreator('/stakingcore','2a2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/swaps',
        component: ComponentCreator('/swaps','865'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/syncing-wallet-matter',
        component: ComponentCreator('/syncing-wallet-matter','740'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tipping',
        component: ComponentCreator('/tipping','5f2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/api-reference',
        component: ComponentCreator('/tutorial-extras/api-reference','759'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/governance',
        component: ComponentCreator('/tutorial-extras/governance','f5c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/integrations',
        component: ComponentCreator('/tutorial-extras/integrations','5fc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/unstaking',
        component: ComponentCreator('/unstaking','502'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/unstakingcore',
        component: ComponentCreator('/unstakingcore','48f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/xtz-via-wtz',
        component: ComponentCreator('/xtz-via-wtz','54d'),
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
