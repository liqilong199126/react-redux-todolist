var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, './'),

	entry: {
		app: 'index.js'
	},

	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
	},
    
    devServer: {
    	inline: true, //实时刷新
    	port: 3000
    },

	module: {
		rules: [{
			test: /\.js$/, //babel转化为兼容性的js
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
				query: {
					presets: ['latest', 'stage-0', 'react'], //加入stage-0 尝试使用es7
				}
			},

			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},

			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192 //8192 // 小于8KB 使用base64格式图片
					}
				}]
			},

			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		}]
	},

	//压缩代码
	plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new htmlWebpackPlugin({
        	title: 'react-redux-todolist',
        	template: path.resolve(__dirname, 'index.html'),
        	filename: 'index.html',
        	inject: 'body'
        })
	]
};