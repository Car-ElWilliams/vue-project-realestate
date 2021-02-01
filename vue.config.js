module.exports = {
  pwa: {
    manifestOptions: {
      background_color: 'hotpink'
    },
    name: 'Real Estate Lister',
    themeColor: 'whitesmoke'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-project-realestate/'
    : '/'
}
