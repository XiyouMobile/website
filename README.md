# xiyouMobile Website

## 使用工具

- React ^17.x.x
- vite ^2.x.x
- antd ^4.x.x

## 目录结构

```bash
src
├── menus.ts # 页面整体路由配置
├── api  # 存放每个页面 请求用的api
│   ├── activity
│   ├── member
│   └── wiki
├── common # 一些公共方法以及图片资源
│   └── services
│   └── images
│   └── utils
├── components # 共用组件 wiki详情页 动态详情页...
│   ├── activity-detail
│   ├── activityHome
│   ├── common
│   │   └── wiki-detail
│   ├── footer
│   ├── groupIntroduce
│   ├── header
│   ├── layout
│   ├── wikiHome
└── pages  # 每个页面
    ├── activity
    ├── home
    ├── join
    ├── member
    │   ├── graduate
    │   │   └── year
    │   └── memberstyle
    │       ├── Android
    │       ├── ios
    │       ├── server
    │       └── web
    ├── user-detail
    ├── wiki
    └── wiki-detail

```

##

## 开发规范

### 命名

文件命和文件夹名不允许出现大写

```bash
// bad
HelloWorld

// bad
helloworld

// good
hello-world
```

### commit 规范

commit 进行了基本的检查配置
建议使用 `npm run commit` 进行提交
