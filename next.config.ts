import type { NextConfig } from 'next';

const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  // assetPrefix: '/web/nextclient',
  // basePath: '/web/nextclient',
};

export default withNextIntl(nextConfig);
