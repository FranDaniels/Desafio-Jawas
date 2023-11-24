const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};