const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'bundle.[hash].js',
        path: Path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			}],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './bundle.[hash].css',
        }),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
    ],
};
