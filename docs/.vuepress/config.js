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
			"/guide/languages/",
			"/guide/languages/test-pages/",
			"/guide/languages/test-pages/adlam/",
			"/guide/languages/test-pages/arabic/",
			"/guide/languages/test-pages/latin/"
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
