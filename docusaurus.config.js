// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: ["@docusaurus/theme-live-codeblock"],
  title: "TinsFox",
  tagline: "Dinosaurs are cool",
  url: "https://fox.tinsfox.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://avatars.githubusercontent.com/u/33956589?s=40&v=4",
  githubHost: "github.com",
  githubPort: "22",
  organizationName: "TinsFox",
  projectName: "TinsFox.github.io",
  deploymentBranch: "gh-pages",
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["en", "zh-CN"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: 'sidebars.js',
          editUrl: "http://github.com/TinsFox.github.io",
        },
        blog: {
          showReadingTime: true,
          editUrl: "http://github.com/TinsFox.github.io",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        hideOnScroll: true,
        title: "TinsFox",
        logo: {
          alt: "TinsFox",
          src: "https://avatars.githubusercontent.com/u/33956589?s=40&v=4",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Doc",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/TinsFox/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'S37TP60WDI',
  
        // Public API key: it is safe to commit it
        apiKey: 'b3cb09b39e72b51c2079e6ef230cf0db',
  
        indexName: 'tinsfox',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
};

module.exports = config;
