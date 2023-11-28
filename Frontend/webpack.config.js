const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        login: './src/login/login.js',
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './src/login/login.html',
            filename: 'login.html',
        }),
    ]
};