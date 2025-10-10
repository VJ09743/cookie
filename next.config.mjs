/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
    // next.config.js
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'fra.cloud.appwrite.io',
                    pathname: '/v1/storage/**',
                },
                {
                    protocol: 'https',
                    hostname: 'api.jorithm.net',
                    pathname: '/v1/storage/**',
                },
            ],
        },


};


export default nextConfig;
