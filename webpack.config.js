const HTMLWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');
const webpack = require('webpack');


module.exports = {
	mode: 'development',
	entry: join(__dirname, 'app.js'),
	output: {
		path: join(__dirname, 'build'),
		filename: 'app.bundle.js'
	},
	devServer: {
		port: 8080,
		hot: true,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			},

			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			}
		]
	},

	plugins: [
		new HotModuleReplacementPlugin(),
		new VueLoaderPlugin(),
		new HTMLWebpackPlugin({
			showErrors: true,
			cache: true,
			title: 'Vue with Webpack',
			favicon: join(__dirname, 'logo.png'),
			template: join(__dirname, 'index.html')
		}),
		new webpack.DefinePlugin({
			'process.env': {
				ENDPOINT: '"http://localhost:8000/"',
			}
		}),
	]
};
