/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'sabzlearn.ir',
            }
        ]
    }
};

export default nextConfig;
