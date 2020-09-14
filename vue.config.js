const pathRewrite = {}
const basePath = process.env.NODE_ENV === 'production' ? '^/' : '^/api';

pathRewrite[basePath] = '/'

module.exports = {
  pluginOptions: {
    proxy: {
      enabled: true,
      context:  process.env.NODE_ENV === 'production' ? '/' : '/api',
      
      options: {
        target: 'http://127.0.0.1:8001/',
        changeOrigin: true,
        pathRewrite
      }
    }
  },
  publicPath: '/_utils', 
  runtimeCompiler: true
}