module.exports = {
	title: 'Lingua',
	description: 'Internationalized Typography',
	head: [
		['link', { rel: 'icon', href: '/logo.png' }]
	],
	themeConfig: {
		lastUpdated: false,
		sidebar: [
			{
        title: 'About',
        path: '/guide/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
					'/guide/about/get-started/',
					'/guide/about/languages/'
        ]
      },
			{
        title: 'Examples',
        path: '/guide/examples/script-samples/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
					'/guide/examples/ui-fonts/',
					'/guide/examples/variable-fonts/'
        ]
      },
			{
        title: 'Documentation',
        path: '/guide/docs/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
					'/guide/docs/helper-classes/',
					'/guide/docs/font-avialability/',
					['/guide/docs/variables/', 'Add your own fonts']
        ]
      }
		],
		nav: [
			{ text: 'Home', link: "/" },
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
