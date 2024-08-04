/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL || 'your_default_value',
    },
    images: {
      domains: ['localhost', 'eachdigital.s3.amazonaws.com'],
      remotePatterns: [{
        hostname: 'eachdigital.s3.amazonaws.com',
        protocol: 'https',
      }],
    }
  }
  
  module.exports = nextConfig;