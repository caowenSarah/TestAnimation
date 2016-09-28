var path = require('path');
var version = require('./package.json').version;
var webpack = require('webpack');

module.exports = {
	//入口地址
	entry: {
		animation: './src/animation.js'
	},
	//输出地址
	output: {
		path: __dirname + '/build',
		filename: '[name].js',
		library: 'animation',
		libraryTarget: 'umd'
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
	},
	plugins: [
		new webpack.DefinePlugin({
			__VERSION__: JSON.stringify(version)
		})
	]
};