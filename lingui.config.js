/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ['en', 'vi'],
  catalogs: [
    {
      path: 'src/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: 'po',
};
