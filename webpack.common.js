const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './bundle.css',
        }),
    ],
};
