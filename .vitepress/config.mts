import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'XQuant Beginner',
  description: '《XQuant：人人都是量化交易员》开源书稿',
  base: process.env.VITEPRESS_BASE || '/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '阅读', link: '/book/preface' },
      { text: '反馈', link: '/book/feedback' },
      { text: '课程', link: 'https://xquant.shop/courses' },
      { text: '配套练习', link: 'https://github.com/xingwudao/xquant-learning' }
    ],
    sidebar: [
      {
        text: 'XQuant Beginner',
        items: [
          { text: '项目首页', link: '/' },
          { text: '前言', link: '/book/preface' },
          { text: '准备工作', link: '/book/getting-started' },
          { text: '第 1 章：跑通第一个策略', link: '/book/q1-how-to-profit' },
          { text: '第 2 章：先选买什么：从 3 只 ETF 开始', link: '/book/q2-what-to-buy' },
          { text: '第 3 章：决定各买多少：3 种分法实测', link: '/book/q3-how-much' },
          { text: '第 4 章：决定何时买卖：再平衡、止损、止盈', link: '/book/q4-when-to-trade' },
          { text: '第 5 章：判断策略好不好：4 个关键视角', link: '/book/q5-how-to-validate' },
          { text: '第 6 章：别高兴太早：防止过拟合', link: '/book/q6-avoid-overfitting' },
          { text: '第 7 章：从理想到现实：执行交易', link: '/book/q7-execution' },
          { text: '第 8 章：策略跑起来以后：监控、诊断、迭代', link: '/book/q8-iteration' },
          { text: '第 9 章：持续寻找机会：因子研究入门', link: '/book/q9-daily-work' },
          { text: '反馈与读者群', link: '/book/feedback' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xingwudao/xquant-beginner' }
    ],
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    search: {
      provider: 'local'
    }
  }
})
