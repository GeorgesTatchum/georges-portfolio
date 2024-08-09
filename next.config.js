/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')
const nextConfig = {
  reactStrictMode: true,
}
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([
  [nextTranslate(nextConfig)],
  [withBundleAnalyzer]
]) 
