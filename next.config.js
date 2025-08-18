/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/phg-app' : '',
    assetPrefix: isProd ? '/phg-app/' : '',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};
   
module.exports = nextConfig;