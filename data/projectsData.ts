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
    title: '小报童精选',
    description: `一个小报童精选专栏导航站，收录了数百个优质专栏，支持按标签、关键词检索。持续更新中，欢迎查看`,
    imgSrc: '/static/images/xiaobot.png',
    href: 'https://paperboy.site',
  },
]

export default projectsData
