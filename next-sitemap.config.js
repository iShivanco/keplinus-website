/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://keplinus.vercel.app', // your live site
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  transform: async (config, url) => {
    return {
      loc: url, // page URL
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    };
  },
};
