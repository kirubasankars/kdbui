//const pathRewrite = {}
//const basePath = process.env.NODE_ENV === 'production' ? '^/' : '^/api';

//pathRewrite[basePath] = '/'
// process.env.NODE_ENV === 'production' ? '/' :

module.exports = {
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
  publicPath: '/_utils', 
  runtimeCompiler: true
}