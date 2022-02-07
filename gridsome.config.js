// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'JJ ADAMS BAND',
  siteUrl: 'https://jjadamsband.com',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/exclude-me'],
        config: {
          '/about': {
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2020-07-30',
          },
          '/contact': {
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2020-07-30',
          }
        }
      }
    },
  ],
  testEnvironment: 'node'
}
