/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/frogman",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;