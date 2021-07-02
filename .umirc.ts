import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'TinsFox',
  mode: 'site',
  // logo:'/images/logo.jpg',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  fastRefresh: {},
  base: './',
  publicPath: './',
  hash: true,
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '更多',
      path: '/more',
      children: [
        {
          title: '提问的艺术',
          path: 'https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md',
        },
        {
          title: 'GitHub',
          path: 'https://github.com/TinsFox/TinsFox.github.io',
        },
        { title: 'dumi', path: 'https://d.umijs.org/config' },
      ],
    },
  ],
  // more config: https://d.umijs.org/config
});
