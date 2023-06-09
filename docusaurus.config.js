// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const organizationName = "biglaketkd";
const projectName = "biglaketkd.github.io";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Big Lake Tae Kwon Do",
  tagline: "Big lake Tae Kwon Do",
  url: `https://${organizationName}.github.io`,
  baseUrl: `/`,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  // GitHub Pages adds a trailing slash by default that I don't want
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        blog: false
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Big Lake Tae Kwon Do",
        logo: {
          alt: "Big Lake TKD",
          src: "img/logo-1.png",
          srcDark: "img/logo-2.png"
        },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/EvolutionTKDBigLake/",
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} biglaketkd.com.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
