/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "aceternity.com",
            },
        ],
    },
};

export default nextConfig;
