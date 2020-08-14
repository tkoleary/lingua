module.exports = {
	module: {
		rules: [
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
					// workaround for vuejs-templates webpack issue 1266
					publicPath: process.env.NODE_ENV === 'production' ? '../../' : '/'
				}
			}
		],
	},
};
