const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: 'style-loader', // creates style nodes from JS strings
                  },
                  {
                    loader: 'css-loader', // translates CSS into CommonJS
                  },
                  {
                    loader: 'sass-loader', // compiles Sass to CSS
                  }
                ]
              }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      contentBase: './dist',
      hot: true,
    }
  };
