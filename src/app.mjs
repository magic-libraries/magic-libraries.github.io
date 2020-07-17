export const state = {
  title: '@magic-libraries',
  description: '@magic-libraries. tiny client side javascript @magic.',

  branding: ['@magic', '-libraries'],

  seo: {
    name: '@magic-libraries',
    url: `https://magic-libraries.github.io/`,
    about:
      'magic is a jamstack generator. @magic-libraries are small packages of client functionality.',
    image: `https://magic-examples.github.io/magic-libraries-preview.jpg`,
    author: {
      '@type': 'person',
      name: 'Jascha Ehrenreich',
      jobTitle: 'Technomancer',
      image: 'https:/jaeh.at/img/jascha.ehrenreich.jpg',
      url: 'https://jaeh.at',
    },
  },

  hero: {
    title: 'libraries',
    description: 'client side @magic',

    menu: [
      { to: '/#gl-magic-libraries-li-db', text: 'db' },
      { to: '/#gl-magic-libraries-li-gql', text: 'graphql' },
      { to: '/#gl-magic-libraries-li-is', text: 'types' },
      { to: '/#gl-magic-libraries-li-json', text: 'json' },
      { to: '/#gl-magic-libraries-li-prevent-default', text: 'preventDefault' },
      { to: '/#gl-magic-libraries-li-uri', text: 'uri' },
    ],
  },

  footer: {
    one: {
      title: '@magic',
      before: ['client libraries', 'created by', 'Wizards & Witches'],
    },

    two: {
      title: 'projects',
      menu: [
        { to: 'https://github.com/magic/', text: '@magic' },
        { to: 'https://github.com/grundstein/', text: '@grundstein' },
        { to: 'https://github.com/webboot/', text: '@webboot' },
      ],
    },

    three: {
      title: 'social',
      menu: [
        { to: 'https://npmjs.com/org/magic-libraries/', text: 'npm' },
        { to: 'https://github.com/magic-libraries/', text: 'github' },
      ],
    },
  },

  menu: [
    { to: '/', text: 'about' },
    { to: '/#gl-magic-libraries', text: 'libraries' },
  ],
}
