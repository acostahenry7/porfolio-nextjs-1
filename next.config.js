/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/porfolio-nextjs-1",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
// withSentryConfig(nextConfig, {
//   org: "kisoft-21",
//   project: "76692f07c07b42b598b8a44f3d85d99d",
//   silent: !process.env.CI,
//   widenClientFileUpload: true,
//   disableLogger: true,
//   automaticVercelMonitors: true,
// });
