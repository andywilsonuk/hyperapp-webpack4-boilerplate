const Path = require('path');
const merge = require('webpack-merge');
const dev = require('./webpack.dev.js');

module.exports = merge(dev, {
    devServer: {
        contentBase: Path.join(__dirname, 'dist'),
        open: 'Chrome',
        hot: true,
        publicPath: '/',
    },
});
