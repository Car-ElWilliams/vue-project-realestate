module.exports = {
  pwa: {
    manifestOptions: {
      background_color: 'hotpink',
    },
    name: 'Real Estate Lister',
    themeColor: 'whitesmoke',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5,
          },
          urlPattern:
            'https://api.zoopla.co.uk/api/v1/property_listings.json?&page_number=2$&area=london&page_size=100&summarised=true&api_key=nnc2mfhmmbngxyvgpmqy86nz',
        },
      ],
      manifestTransforms: [
        manifest => ({
          manifest: manifest.concat([
            { revision: 0, url: '/some-cachefirst-file.txt' },
          ]),
        }),
      ],
    },
  },
}
