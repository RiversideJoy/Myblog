const nav = require('./nav.js')
module.exports = {
  base: './vuepress',
  // base: '/',
  title: "麦仁博客",
  description: "记录前端知识、读书学习",
  dest: 'docs/.vuepress/dist/',
  markdown: {
    lineNumbers: true,
  },
  plugins: {
    
  },
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
  theme: 'vdoing',
  themeConfig: {
    nav,
    sidebar: 'structuring',
  },
  // 使目录栏支持h2~h6
  markdown: {
    extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ]
  }
};