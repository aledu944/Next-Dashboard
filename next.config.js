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
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
        ],
    }
}

module.exports = nextConfig
