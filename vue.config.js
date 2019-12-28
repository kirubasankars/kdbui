module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8001',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/_utils'
    : '/'
}