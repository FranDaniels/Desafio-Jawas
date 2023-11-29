const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        login: './src/login/login.js',
        registro: './src/registro/registro.js',
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 9090,
        open: true,
        static: {
          directory: path.resolve(__dirname, 'dist'),
        },
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/login/index.html',
            filename: 'login.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/registro/index.html',
            filename: 'registro.html',
        }),
    ]
};