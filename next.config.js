/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images:{ 
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                },
            {
                protocol: 'https',
                hostname: 'store.innovacode.online',
            },
        ],
    }
}

module.exports = nextConfig
