// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"],
  },
  title: "FxTS",
  tagline: "A functional library for TypeScript/JavaScript programmers.",
  url: "https://fxts.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "marpple", // Usually your GitHub org/user name.
  projectName: "FxTS", // Usually your repo name.
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl: "https://github.com/marpple/fxts/edit/main/website/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        // },
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
        title: "FxTS",
        logo: {
          alt: "FxTS Logo",
          src: "img/fxts.png",
        },
        items: [
          { to: "/docs/getting-started", label: "Docs", position: "left" },
          { to: "/docs/index", label: "API", position: "left" },
          {
            href: "https://github.com/marpple/fxts",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "API",
                to: "/docs/index",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/fxts",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/marpple/fxts",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Marpple, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      gtag: {
        trackingID: "G-BTGRJYWTNK",
        anonymizeIP: true,
      },
    }),
  clientModules: [require.resolve("./analytics.js")],
  scripts: [
    {
      src: "https://cdn.jsdelivr.net/npm/@fxts/core/dist/fx.min.js",
      async: true,
    },
  ],
};

module.exports = config;
