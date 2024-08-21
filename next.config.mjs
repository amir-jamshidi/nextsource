/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'sabzlearn.ir',
            },
            {
                hostname: 'i.postimg.cc'
            },
            {
                protocol: 'https',
                hostname: 'dysayodpvtzawkbectlu.supabase.co'
            }
        ]
    }
};

export default nextConfig;
