export default {
  "title": "SpicySwap Docs",
  "tagline": "",
  "url": "https://guide.salsadao.xyz",
  "baseUrl": "/",
  "onBrokenLinks": "ignore",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/sDAO.png",
  "organizationName": "",
  "projectName": "",
  "themeConfig": {
    "navbar": {
      "title": "SalsaDAO Guidebook",
      "logo": {
        "alt": "SalsaDAO Logo",
        "src": "img/sDAO.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Home",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "type": "doc",
          "docId": "sdao/salsadao",
          "position": "left",
          "label": "SalsaDAO",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "type": "doc",
          "docId": "spi/spicyswap",
          "position": "left",
          "label": "SpicySwap",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "type": "doc",
          "docId": "mttr/matter-defi",
          "position": "left",
          "label": "Matter Defi",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "href": "https://salsadao.xyz",
          "label": "Join SalsaDAO",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Home",
              "to": "/"
            }
          ]
        },
        {
          "title": "Apps",
          "items": [
            {
              "label": "SalsaDAO",
              "href": "https://salsadao.xyz"
            },
            {
              "label": "SpicySwap",
              "href": "https://spicyswap.xyz"
            },
            {
              "label": "Matter Defi",
              "href": "https://matterdefi.xyz"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "GC Medium",
              "href": "https://geniuscontracts.medium.com/"
            },
            {
              "label": "GC Discord",
              "href": "https://discord.gg/E2kK38mb"
            },
            {
              "label": "GC Twitter",
              "href": "https://twitter.com/geniuscontracts"
            },
            {
              "label": "SalsaDAO Telegram",
              "href": "https://t.me/salsadao"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 Genius Contracts. Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "plugins": [
    [
      "docusaurus-graphql-plugin",
      {
        "id": "api",
        "schema": "schema.graphql",
        "routeBasePath": "/docs/api"
      }
    ]
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/aaa/git/salsa-guidebook/sidebars.js",
          "routeBasePath": "/"
        },
        "blog": {
          "showReadingTime": true
        },
        "theme": {
          "customCss": "/home/aaa/git/salsa-guidebook/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};