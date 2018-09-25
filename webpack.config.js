const path = require('path');
/* Плагины */
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin;
// console.log('process.env', process.env);
/* Конфиг */
module.exports = {
  entry: `${__dirname}/front/index`,
  watch: true,
  mode: 'development',
  output: {
    filename: 'index.js',
    // chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'public/js')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // include: /front/,
        include: [
          path.resolve(__dirname, 'front'),
        ],
        // exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'front'),
    ],
    mainFiles: ['index'],
    extensions: ['.jsx', '.js', '.json']
  },
  // plugins: [
  //   new CleanWebpackPlugin([`${TYPE}/static/js`]),
  //   new BundleAnalyzerPlugin({
  //     analyzerMode: 'static'
  //   })
  // ]
  // optimization: {
  //   // Удаляет собранное при возникновении ошибки
  //   noEmitOnErrors: true,
  //   // Разбиение на чанки
  //   splitChunks: {
  //     cacheGroups: {
  //       vendors: false,
  //       default: {
  //         minChunks: 3,
  //         name: 'common',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // },
};
