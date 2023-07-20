/** @type {import('next').NextConfig} */
const nextConfig = {
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
