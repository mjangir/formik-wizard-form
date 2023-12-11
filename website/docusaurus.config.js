const lightCodeTheme = require('prism-react-renderer/themes/nightOwl');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'Formik Form Wizard',
    tagline: 'Build stepper forms over Formik with ease',
    url: 'https://mjangir.github.io/formik-wizard',
    baseUrl: '/formik-wizard-form/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'mjangir', // Usually your GitHub org/user name.
    projectName: 'formik-wizard-form', // Usually your repo name.

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarCollapsible: false,
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl:
              'https://github.com/mjangir/formik-wizard-form/blob/master/website/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        hideableSidebar: true,
        navbar: {
          title: 'Formik Form Wizard',
          logo: {
            alt: 'Formik Form Wizard',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'introduction/getting-started',
              position: 'left',
              label: 'Docs',
            },
            {
              href: 'https://github.com/mjangir/formik-wizard-form',
              label: 'GitHub',
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
                  label: 'Getting Started',
                  to: '/docs/introduction/getting-started',
                },
                {
                  label: 'How To Use',
                  to: '/docs/introduction/how-to-use',
                },
                {
                  label: 'Examples',
                  to: '/docs/examples/bootstrap',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Stack Overflow',
                  href: 'https://stackoverflow.com/users/1029506/manish-jangir',
                },
                {
                  label: 'Discord',
                  href: 'https://discord.gg/GaezX3M52w',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/mjangir70',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/mjangir/formik-wizard-form',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Manish Jangir Open Source.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
