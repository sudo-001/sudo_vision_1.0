/** @type {import('next').NextConfig} */
const dotenv = require("dotenv")
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  }
}

module.exports = nextConfig
