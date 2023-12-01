const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        login: './src/login/login.js',
        registro: './src/registro/registro.js',
        inicio: './src/inicio/inicio.js',
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.s?css$/,
            use: [
              "style-loader", 
              "css-loader",
            ]
          }
        ]
      },
      devServer: {
        historyApiFallback: true,
      },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['login'], // Nombre del entry correspondiente
        }),
        new HtmlWebpackPlugin({
            template: './src/registro/registro.html',
            filename: 'registro.html',
            chunks: ['registro'],
        }),
        new HtmlWebpackPlugin({
          template: './src/inicio/inicio.html',
          filename: 'inicio.html',
          chunks: ['inicio'],
      }),
    ],
};
