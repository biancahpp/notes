/** @type {import('next').NextConfig} */
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withEnv = nextEnv();
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withEnv(nextConfig);
