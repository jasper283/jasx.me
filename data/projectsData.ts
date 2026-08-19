interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Mini记账',
    description: `一款简洁好用的记账App，iOS版本于 2020 年上线；Android版本 2024 年上线，功能正在迭代中。`,
    imgSrc: '/static/images/minexp-screenshots.png',
    href: 'https://miniexp.com',
  },
  {
    title: 'EmojiDir',
    description: `一个 Emoji 搜索网站，支持 1700+ 表情查找、多平台风格对比和关键词检索，方便快速找到适合项目使用的 Emoji 图标。`,
    href: 'https://emojidir.com',
  },
]

export default projectsData
