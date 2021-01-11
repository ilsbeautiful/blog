// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         'assets': 'src/assets',
//         'common': 'src/common',
//         'components': 'src/components',
//         'network': 'src/network',
//         'views': 'src/views',
//       }
//     }
//   }
// }
var htmlWepackPlugin = require('html-webpack-plugin')
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    proxy: {
      '/login': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/login': '/login'
        }
      }
    },
    historyApiFallback: {
			
		}
  },
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      // 需要重启 IDE
      .set('assets',resolve('src/assets'))
      // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
      .set('mock',resolve('mock'))
      .set('network',resolve('src/network'))
  }
  
}