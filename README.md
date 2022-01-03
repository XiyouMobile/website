# xiyouMobile Website

## 开发方式

```bash
git clone git@github.com:XiyouMobile/website.git

cd website

// 建议使用 pnpm 作为包管理器 若没有请执行 npm i pnpm -g
pnpm i

pnpm run dev
```

### ❗️ 注意

为了安全起见，项目中的 `api` 相关文件未对外暴露，以 submodule 的形式放在了 `src/api` 目录下。

真正的文件为 private 库。
所以在开发前需要将子模块也下载

```bash
git submodule init
git submodule update
```

更多关于 git 子模块的相关执行有兴趣可以看这里 => [git 子模块](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97)

## 使用主要 library 版本

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

## 开发规范

### 命名

#### 变量和函数命名

所有的变量和函数均遵循驼峰式命名

```bash

// bad
const user_name = 'xxx'

// bad
const username = 'xxx'

// good
const userName = 'xxx'

// bad
const get_user_name = (user_id) => get_user_name_by_user_id(user_id)

// good
const getUserName = (userId) => getUserNameByUserId(userId)
```

#### jsx 中 css 命名

```jsx
// bad
<div class="contentWrapper"></div>

// bad
<div class="content-rapper"></div>
```

#### 文件和文件夹命名

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

- commit 进行了基本的检查配置
- 建议使用 `npm run commit` 进行提交
