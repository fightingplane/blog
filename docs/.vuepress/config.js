/*
 * @Author: WangXiaoYuan
 * @Description: 
 * @Date: 2021-02-06 14:58:09
 * @LastEditors: WangXiaoYuan
 * @LastEditTime: 2021-06-29 23:47:15
 */
const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  // theme: 'vdoing', // 使用依赖包主题
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题
  title: "技术老油条的博客",
  description: '全栈工程师的技术博客、随笔',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}
