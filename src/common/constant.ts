// 全局状态

export enum WikiGroupType {
  Android = 1,
  Ios,
  Windows,
  Web,
  Server
}

// 组别对应 wiki 上 tag 的颜色 map
export const groupTypeMapWikTagColor = new Map([
  ['iOS', 'magenta'],
  ['Android', 'volcano'],
  ['Server', 'lime'],
  ['Web', 'cyan'],
  ['Windows', 'blue']
])

export const Introduction = {
  Android组: {
    picture_url: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    text:
      'Android组，是实验室中历史最为悠久，规模较大的一组。 在2012年就被谷歌授予“Google中国大学合作部——Android人才培养示范基地”。' +
      '在进10年的发展下，已经形成了自己独特的科学的学习方式，往届的学长、学姐通过在Android组的学习都拿到了很好的offer。' +
      '利用Android系统的开放性，Android组进行了各式各样的移动应用开发，多次参加各种大赛，取得了不错的成绩。'
  },
  IOS组: {
    picture_url: 'https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
    text:
      '实验室的iOS组已经成为了 iOS Club ，是一个跨越专业与课堂的 iOS 开发爱好者社团Apple 唯一官方认证的大学生iOS开发俱乐部。' +
      '实验室和 Apple 公司的合作下帮助同学们快速验证学生的想法，同时也进⼀步培养了学生的创新能力和实践能力，' +
      'iOS组同学也可以和众多国外优秀开发者接触并沟通交流，开阔国际视野和眼界格局，掌握国际移动应用软件开发的趋势和动态。'
  },
  Web组: {
    picture_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
    text:
      'Web组，是实验室的后起之秀，充满活力，用青春挑战Web的世界。我们致力于以HTML/HTML5、CSS/CSS3、Javascript为主的Web前端开发，' +
      '用双手创造多彩的Web世界。在实验室每届学长，学姐的带领下，小组的成员都获得了较好的Offer。'
  },
  Server组: {
    picture_url: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    text:
      'Server组，是实验室学习氛围非常好的一组。作为后端开发的同学，掌握的是一个程序的命脉，' +
      '任何网站、APP、游戏都基于一个健壮的后端。在学长学姐的带领下，我们有清晰的项目架构，不仅满足于实现基本的功能、' +
      '更加关注服务器的稳定性与性能。利用火爆的Java语言在服务器端发挥高性能，轻松斩获大厂offer。'
  }
}

export const summary =
  '西安邮电大学移动应用开发实验室，亦称西安邮电大学3G手机应用开发实验室，创建于2011年，隶属于西安邮电大学计算机学院，专注于目前主流的两' +
  '大移动平台的应用开发和Web开发，并以服务在校学生、丰富在校学生移动应用为目标，自行设计和开发了多款手机客户端软件以及PC、移动Web服务。' +
  '实验室针对不同平台和成员兴趣，相应地划分为4个开发小组，包括苹果iOS、谷歌Android、后台Server和前端。实验室以自主学习与共同交流并行的' +
  '自发式学习方式为主，培养成员的学习兴趣及自主学习能力，努力为每位成员创造最佳的学习环境和学习氛围，为打造一批移动应用开发能手而不断努力！' +
  '实验室位于西安邮电大学长安校区东区教学楼一层FZ155教室，西邮IT应用型人才实训中心，是“Google 大学合作部--Android 人才培养示范基地”。' +
  '实验室内部设有众多移动应用开发设备，包括若干台iMac一体机、Mac Mini以及PC，除此之外，各小组还配备有相关的测试设备，包括iPhone、iPad、' +
  'iPod Touch、HTC Android智能手机以及Windows Phone 智能手机可供成员测试相关应用程序。Android开发组还配有由公司提供的Android底层开' +
  '发箱，可用于开发和测试Android底层程序。实验室已开发多款不同平台的手机应用，包括iOS平台流媒体播放器，Android平台酷步软件，Windows Phone' +
  '平台通讯中心，以及面向全平台的校园软件iXiyou和校园图书借阅查询系统客户端，实现了西邮图书馆图书随时随地查询借阅。由于成员作品比较多，此处不再' +
  '一一列举。实验室每年针对全校所有热爱移动应用开发的同学进行纳新，只要对于移动应用开发感兴趣的同学，欢迎来实验室对纳新事宜进行咨询！'
