/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'sabzlearn.ir',
            },
            {
                hostname : 'i.postimg.cc'
            }
        ]
    }
};

export default nextConfig;
