module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/_utils' : '/',
  pluginOptions: {
    proxy: {
      enabled: true,
      context: '/api',
      
      options: {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,        
        pathRewrite : {
          '^/api': ''
        }
      }
    }
  },
  runtimeCompiler: true,
  productionSourceMap: false
}