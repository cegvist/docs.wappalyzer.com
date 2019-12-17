module.exports = {
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Development', link: '/dev/contributing' },
            { text: 'APIs', link: '/api/basics' },
            { text: 'Main site', link: 'https://www.wappalyzer.com' }
        ],
        sidebar: [
            {
                title: 'Development',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/dev/contributing',
                    '/dev/specification'
                ]
            },
            {
                title: 'APIs',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/api/basics'
                ]
            },
        ]
    }
}
