const nav = require('./nav.js')
module.exports = {
  base: '/Myblog/',// 提交时使用该配置
  // base: './', 
  // base: '/', // 本地运行时，取消这行注释
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
    lastUpdated: 'Last Updated', // string | boolean 最后更新时间
    // 线上编辑笔记
    repo: 'https://github.com/MaiRen1997/Myblog', // Github仓库地址
    docsDir: 'docs', // .md文件放在了docs目录下
    editLinks: true, // 启用编辑链接
    editLinkText: '编辑',
  },
  // 使目录栏支持h2~h6
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },
  // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
  author: {
    name: 'Riverside Joy' // 必需
  },
};