import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
    // distDir:'dist'
    experimental: {
        ppr: 'incremental'
    }
};

export default nextConfig;
