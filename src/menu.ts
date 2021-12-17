import Home from './pages/home'
import Wiki from './pages/wiki'
import Member from './pages/member'
import Join from './pages/join'
import Activity from './pages/activity'
import ActivityDetail from './pages/activity-detail'
import WikiDetail from './pages/wiki-detail'
import UserDetail from './pages/user-detail'
// import AboutUs from './pages/about-us'

export const menu = [
  {
    key: 'home',
    path: '/',
    title: '主页',
    component: Home,
    opacity: false
  },
  {
    key: 'activity',
    path: '/activity',
    title: '动态',
    component: Activity
  },
  {
    key: 'wiki',
    path: '/wiki',
    title: 'wiki',
    component: Wiki
  },
  {
    key: 'member',
    path: '/member',
    title: '成员',
    component: Member,
    exact: false
  },
  // {
  //   key: 'aboutUs',
  //   path: '/about',
  //   title: '关于我们',
  //   component: AboutUs
  // },
  {
    key: 'join',
    path: '/join',
    title: '加入我们',
    component: Join,
    notInMenu: true
  },
  {
    key: 'ActivityDetail',
    path: '/activity-detail/:id',
    title: '活动详细页面',
    component: ActivityDetail,
    notInMenu: true
  },
  {
    key: 'wikiDetail',
    path: '/wiki-detail/:id',
    title: 'wiki详细页面',
    component: WikiDetail,
    notInMenu: true
  },
  {
    key: 'UserDetail',
    path: '/user-detail/:id',
    title: '用户详细页面',
    component: UserDetail,
    notInMenu: true
  }
]
