module.exports = {
  themeConfig: {
    logo: 'https://s3.dualstack.ap-southeast-2.amazonaws.com/assets.wappalyzer.com/images/logo-purple.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Development', link: '/dev/contributing' },
      { text: 'APIs', link: '/api/basics' },
      { text: 'Main site', link: 'https://www.wappalyzer.com' }
    ],
    sidebar: [
      {
        title: 'Development',
        sidebarDepth: 1,
        children: [
          '/dev/contributing',
          '/dev/specification'
        ]
      },
      {
        title: 'APIs',
        sidebarDepth: 1,
        children: [
          '/api/basics',
          {
            title: 'Resources',
            collapsable: false,
            children: [
              '/api/resources/lookup',
              '/api/resources/analyze',
              '/api/resources/crawl',
              '/api/resources/dataset',
            ]
          },
        ]
      },
    ]
  }
}
