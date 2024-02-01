/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    env: {
      POKE_API_URL: process.env.POKE_API_URL,
      SCHEDULING_API_URL: process.env.SCHEDULING_API_URL
    }
}

module.exports = nextConfig
