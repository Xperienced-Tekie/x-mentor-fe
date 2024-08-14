/** @type {import('next').NextConfig} */
const nextConfig = {
experimental: {
    serverActions: {
      allowedOrigins: [
        "cuddly-goggles-x7pqwjg7r6pc6rr7-3000.app.github.dev",
        "localhost:3000",
      ],
      missingSuspenseWithCSRBailout: true,
    },
  },
};

export default nextConfig;
