export interface NewsRes {
  id: number
  title: string
  author: string
  url: string
  comment_num: number
}
export const newsList: NewsRes[] = [
  {
    id: 1,
    title: '震动资本圈！狂买至少12个亿：公募巨头集体放大招！私募大佬也出手了',
    author: '中国基金报',
    url:
      'https://dfscdn.dfcfw.com/download/D25751369814569536240_w1024h680.jpg',
    comment_num: 2438,
  },
  {
    id: 2,
    title: '震动资本圈！狂买至少12个亿：公募巨头集体放大招！私募大佬也出手了',
    author: '中国基金报',
    url:
      'https://dfscdn.dfcfw.com/download/D25751369814569536240_w1024h680.jpg',
    comment_num: 2438,
  },
  {
    id: 3,
    title: '震动资本圈！狂买至少12个亿：公募巨头集体放大招！私募大佬也出手了',
    author: '中国基金报',
    url:
      'https://dfscdn.dfcfw.com/download/D25751369814569536240_w1024h680.jpg',
    comment_num: 2438,
  },
  {
    id: 4,
    title: '震动资本圈！狂买至少12个亿：公募巨头集体放大招！私募大佬也出手了',
    author: '中国基金报',
    url:
      'https://dfscdn.dfcfw.com/download/D25751369814569536240_w1024h680.jpg',
    comment_num: 2438,
  },
]
export interface hotTopicRef {
  id: number
  title: string
  describe: string
  read_num: number
  comment_num: number
  start_name: string
  end_name: string
  start_index: string
  end_index: string
  trend: string
}
export const topicList: hotTopicRef[] = [
  {
    id: 1,
    title: '纳指涨逾3%，苹果大涨近7%',
    describe:
      '盘面上，美股大型科技股多数上涨，亚马逊涨3.11%，谷歌涨3.37%，微软涨2.81%，奈飞跌0.61%。苹果涨6.98%。美股抗疫概念股普遍上涨，Moderna涨7.30%，吉利德科学涨2.36%，诺瓦瓦克斯医药涨13.71%，BioNTech涨4.97%。热门中概股涨跌不一，好未来涨10.42%，叮咚买菜涨8.47%，斗鱼跌19.05%。',
    read_num: 1296.7,
    comment_num: 2438,
    start_name: '苹果',
    end_name: '微软',
    start_index: '+6.98%',
    end_index: '+2.81%',
    trend: 'up',
  },
  {
    id: 2,
    title: '纳指涨逾3%，苹果大涨近7%',
    describe:
      '盘面上，美股大型科技股多数上涨，亚马逊涨3.11%，谷歌涨3.37%，微软涨2.81%，奈飞跌0.61%。苹果涨6.98%。美股抗疫概念股普遍上涨，Moderna涨7.30%，吉利德科学涨2.36%，诺瓦瓦克斯医药涨13.71%，BioNTech涨4.97%。热门中概股涨跌不一，好未来涨10.42%，叮咚买菜涨8.47%，斗鱼跌19.05%。',
    read_num: 1296.7,
    comment_num: 2438,
    start_name: '苹果',
    end_name: '微软',
    start_index: '+6.98%',
    end_index: '+2.81%',
    trend: 'down',
  },
  {
    id: 3,
    title: '纳指涨逾3%，苹果大涨近7%',
    describe:
      '盘面上，美股大型科技股多数上涨，亚马逊涨3.11%，谷歌涨3.37%，微软涨2.81%，奈飞跌0.61%。苹果涨6.98%。美股抗疫概念股普遍上涨，Moderna涨7.30%，吉利德科学涨2.36%，诺瓦瓦克斯医药涨13.71%，BioNTech涨4.97%。热门中概股涨跌不一，好未来涨10.42%，叮咚买菜涨8.47%，斗鱼跌19.05%。',
    read_num: 1296.7,
    comment_num: 2438,
    start_name: '苹果',
    end_name: '微软',
    start_index: '+6.98%',
    end_index: '+2.81%',
    trend: 'up',
  },
  {
    id: 4,
    title: '纳指涨逾3%，苹果大涨近7%',
    describe:
      '盘面上，美股大型科技股多数上涨，亚马逊涨3.11%，谷歌涨3.37%，微软涨2.81%，奈飞跌0.61%。苹果涨6.98%。美股抗疫概念股普遍上涨，Moderna涨7.30%，吉利德科学涨2.36%，诺瓦瓦克斯医药涨13.71%，BioNTech涨4.97%。热门中概股涨跌不一，好未来涨10.42%，叮咚买菜涨8.47%，斗鱼跌19.05%。',
    read_num: 1296.7,
    comment_num: 2438,
    start_name: '苹果',
    end_name: '微软',
    start_index: '+6.98%',
    end_index: '+2.81%',
    trend: 'down',
  },
]

export interface popularRef {
  id: number
  title: string
  trend: string
  trend_num: string
}

export const popularList: popularRef[] = [
  {
    id: 1,
    title: '九安医疗',
    trend: 'up',
    trend_num: '10.00',
  },
  {
    id: 2,
    title: '九安医疗',
    trend: 'down',
    trend_num: '10.00',
  },
  {
    id: 3,
    title: '九安医疗',
    trend: 'up',
    trend_num: '10.00',
  },
  {
    id: 4,
    title: '九安医疗',
    trend: 'down',
    trend_num: '10.00',
  },
  {
    id: 5,
    title: '九安医疗',
    trend: 'up',
    trend_num: '10.00',
  },
  {
    id: 6,
    title: '九安医疗',
    trend: 'up',
    trend_num: '10.00',
  },
  {
    id: 7,
    title: '九安医疗',
    trend: 'down',
    trend_num: '10.00',
  },
]

export interface tabsType {
  id: number
  title: string
}

export const tabs: tabsType[] = [
  {
    id: 1,
    title: '头条',
  },
  {
    id: 2,
    title: '热点话题',
  },
  {
    id: 3,
    title: '人气个股',
  },
  {
    id: 4,
    title: '小调查',
  },
  {
    id: 5,
    title: '多家基金自购',
  },
  {
    id: 6,
    title: '分析解读',
  },
]
