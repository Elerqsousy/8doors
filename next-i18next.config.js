module.exports = {
  i18n: {
    locales: ['en-US', 'fr', 'ar'],
    defaultLocale: 'en-US',
    localePath: require('path').resolve('./public/locales'),
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  },
};
