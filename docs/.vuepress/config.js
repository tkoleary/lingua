module.exports = {
	title: 'Lingua',
	description: 'Internationalized Typography',
	head: [
		['link', { rel: 'icon', href: '/logo.png' }]
	],
	themeConfig: {
		lastUpdated: false,
		sidebar: [
			"/guide/",
			"/guide/get-started/",
			"/guide/samples/",
			"/guide/fonts/variable/",
			"/guide/languages/",
			"/guide/fonts/test-pages/"
		],
		nav: [
			{ text: "Home", link: "/" },
			{ text: 'Guide', link: '/guide/' },
		],
		displayAllHeaders: true
	},
	configureWebpack: {
		devServer: {
      watchOptions: {
        poll: true
      }
    },
		resolve: {
			alias: {
				'@fonts': './css/fonts/'
			}
		}
	}
};
