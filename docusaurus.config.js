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
          sidebarPath: require.resolve("./sidebars.js"),
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
      navbar: {
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
            label: "Note",
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
      liveCodeBlock: {
        /**
         * 实时效果显示的位置，在编辑器上方还是下方。
         * 可为："top" | "bottom"
         */
        playgroundPosition: "bottom",
      },
    }),
};

module.exports = config;
