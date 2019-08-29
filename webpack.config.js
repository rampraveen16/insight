const path = require('path')

module.exports = {
  mode: 'none',
  entry: './main.js',
  output: {
    filename: 'Bundle.js',
    path: path.resolve(__dirname)
  },
  /* plugin: [
           //new HtmlWebpackPlugin()
        ], */
  devServer: {
    contentBase: './'
  },
  // watch:true,
  module: {
    rules: [
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'

        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]

      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }

    ]
  }
}
