// const prodConfig = require('./webpack.prod.js') // 引入打包配置
const prodConfig = require('./webpack.prod.js') 
const { merge } = require('webpack-merge') 
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

// 使用smp.wrap方法,把生产环境配置传进去
module.exports = smp.wrap(merge(prodConfig, {
  plugins: [
    new BundleAnalyzerPlugin() // 配置分析打包结果插件
  ]
}))
