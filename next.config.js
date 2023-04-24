/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
  },
  env: {
    NEXTAUTH_SECRET: "unighana1126",
    // NEXTAUTH_URL: "https://expeed-admin.vercel.app"
  }
}

module.exports = nextConfig
