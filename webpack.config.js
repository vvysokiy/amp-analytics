const path = require('path');
/* Плагины */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
  plugins: [
    // new ExtractTextPlugin('css/[name].css', {allChunks: true}),
    new MiniCssExtractPlugin({
      // Опции аналогичные webpackConfig.output
      // но свойство path не работает!
      // Решение: переназначение filename и chunkFilename
      // https://stackoverflow.com/questions/51055490/minicssextractplugin-public-path-not-working
      filename: '../css/[name].css',
      chunkFilename: '../css/[name].css',
    })
  ],
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
      },
      {
        test: /\.styl$/,
        include: path.resolve(__dirname, 'front'),
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader?paths=node_modules/bootstrap-stylus/stylus/&resolve url',
            options: {
              include: path.resolve(__dirname, 'front')
            }
          },
        ],
      },
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'front'),
    ],
    mainFiles: ['index'],
    extensions: ['.jsx', '.js', '.json', '.styl', '.css']
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
