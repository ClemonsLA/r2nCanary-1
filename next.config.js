/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
        {
            // matching all API routes
            source: "/api/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "https://cautious-yodel-wpqxjq7pp4jhg7p7-3000.app.github.dev/" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                { key: "Cross-Origin-Opener-Policy", value: "same-origin allow-popups" },
            ]
        }
    ]
}
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
        port: '',
        pathname: '**',
      },
    ],
  },
}