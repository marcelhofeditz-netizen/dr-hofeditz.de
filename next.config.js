/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Alte WordPress-Adressen nach dem Umzug auf die neue Seite auffangen
    return [
      { source: '/feed', destination: '/presse/rss.xml', permanent: true },
      { source: '/feed/:path*', destination: '/presse/rss.xml', permanent: true },
      { source: '/wp-admin/:path*', destination: '/', permanent: true },
      { source: '/wp-login.php', destination: '/', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      { source: '/wp-sitemap.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/category/:path*', destination: '/blog', permanent: true },
      { source: '/tag/:path*', destination: '/blog', permanent: true },
      { source: '/author/:path*', destination: '/', permanent: true },
      { source: '/presse-2', destination: '/presse', permanent: true },
      { source: '/press', destination: '/presse', permanent: true },
      { source: '/book', destination: '/buch', permanent: true },
      { source: '/contact', destination: '/kontakt', permanent: true },
    ]
  },
}
module.exports = nextConfig
