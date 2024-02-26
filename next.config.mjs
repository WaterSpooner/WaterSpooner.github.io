/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { unoptimized: true },
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    webpack: (config) => {
    config.resolve.alias.canvas = false;   
    return config;
    },
};

export default nextConfig;
