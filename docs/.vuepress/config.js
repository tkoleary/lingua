module.exports = {
	title: 'Lingua',
	description: 'Internationalized Typography',
	head: [
		['link', { rel: 'icon', href: '/logo.png' }],
		['link', { rel: 'stylesheet', href: '/lingua/lingua.min.css'}]
	],
	themeConfig: {
		lastUpdated: false,
		sidebar: [
			["/", "Home"],
			"/guide/",
			"/guide/languages/",
			"/guide/test-pages/arabic/"
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
				'@fonts': '/.vuepress/fonts/'
			}
		}
	}
};
