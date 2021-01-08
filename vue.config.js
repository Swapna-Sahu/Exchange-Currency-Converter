module.exports = {
    pwa: {
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: new RegExp('^https://api.exchangeratesapi.io/'),
            handler: 'NetworkFirst'
          },
          {
            urlPattern: new RegExp('^https://api.binance.com/api/v3/ticker/price'),
            handler: 'NetworkFirst',
            options: {
              networkTimeoutSeconds: 20,
              cacheName: "api-cache",
              cacheableResponse: {
                statuses: [
                  0,
                  200
                ]
              }
            }
          }
        ]
      }
    }
  }