module.exports = {
	title: 'Lingua',
	base: '/docs/',
	description: 'Internationalized Typography',
	head: [
		['link', { rel: 'icon', href: '/logo.png' }]
	],
	themeConfig: {
		lastUpdated: false,
		sidebar: [
			["/", "Home"],
			"/guide/",
			"/guide/get-started/",
			"/guide/languages/",
			"/guide/fonts/variable/",
			"/guide/fonts/test-pages/"
		],
		nav: [
			{ text: "Home", link: "/" },
			{ text: 'Guide', link: '/guide/' },
		],
		displayAllHeaders: true
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@fonts': './css/fonts/'
			}
		}
	}
};
