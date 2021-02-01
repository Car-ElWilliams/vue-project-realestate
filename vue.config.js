module.exports = {
  pwa: {
    manifestOptions: {
      background_color: 'hotpink'
    },
    name: 'Real Estate Lister',
    themeColor: 'whitesmoke',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://avancera.app/cities/'
        }
      ]
    }
  }
}
