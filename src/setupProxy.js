const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://blogs.zdldove.top',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }),
  )
  app.use(
    createProxyMiddleware('/aps', {
      target: 'https://api.baxiaobu.com',
      changeOrigin: true,
      pathRewrite: {
        '^/aps': ''
      }
    }),
  )
  app.use(
    createProxyMiddleware('/apa', {
      target: 'https://api.baxiaobu.com',
      changeOrigin: true,
      pathRewrite: {
        '^/apa': ''
      }
    }),
  )
}
