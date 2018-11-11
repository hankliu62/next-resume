# hank-blog
----

## 项目介绍
利用react服务端框架next.js写的自我介绍和博客的网站，喜欢就给个Star支持一下。

## 网站使用技术
- 软件架构: **react.js next.js antd-design node koa2 axios**
- 前端：**react next.js antd-design less axios**
- 后端：**node koa2 mysql** （目前前后端分离，目前这里只有前端代码，以后将博客集成进来后会涉及到 `mysql`）
- 目的：业余学习，学以致用，熟能生巧
- 网站功能:
    - 自我介绍展示

## 本地开发
> 启动 dev server

```sh
# 获取代码
git clone $repoURL

# 安装依赖
npm install

# 启动 dev server
npm run dev
```
> npm run dev 参数
- PORT: 指定端口, 默认为 3000

> 常见问题
- 依赖安装失败, 检查 node 版本,建议参照 `package.json->engines`
- 依赖安装慢, 使用淘宝源 `npm install --registry=https://registry.npm.taobao.org`
- 默认端口 3000 被占用, 使用 `PORT=xxx npm start` 启动 dev server

## 部署
> 编译代码

```sh
# 获取代码
git clone $repoURL

# 安装依赖
npm install

# build 代码并输出到 /build 文件夹
npm run build
```
> npm run build 参数
- ENV: `dev|prod` 默认值 `dev`

> 常见问题
- 依赖安装失败, 检查 node 版本,建议参照 `package.json->engines`
- 依赖安装慢, 使用淘宝源 `npm install --registry=https://registry.npm.taobao.org`
- 依赖找不到, 需要运行 `npm install`. 建议每次 build 前运行 `npm install`.

## 代码风格
### Commit message 规范

规定格式如下：

```
<type>(<scope>): <subject>

<description>
```

其中，type、scope、subject是必需的，description 可以省略。不管是哪一个部分，任何一行都不得超过120个字符。这是为了避免自动换行影响美观。

#### type 部分取值说明

type用于说明 commit 的类别，只允许使用下面10个标识。
- **docs:** Adds or alters documentation. 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
- **chore:** Other changes that don't modify src or test files. 改变构建流程、或者增加依赖库、工具等
- **feat:** Adds a new feature. 新增feature
- **fix:** Solves a bug. 修复bug
- **merge:** Merge branch ? of ?.
- **perf:** Improves performance. 优化相关，比如提升性能、体验
- **refactor:** Rewrites code without feature, performance or bug changes. 代码重构，没有加新功能或者修复bug
- **revert:** Reverts a previous commit. 回滚到上一个版本
- **style:** Improves formatting, white-space. 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑
- **test:** Adds or modifies tests. 测试用例，包括单元测试、集成测试等

#### scope 部分取值说明
一般为项目功能模块、组件的名字，用来描述本次 commit 影响的范围，比如 [node commits](https://github.com/nodejs/node/commits/master) 、[go commits](https://github.com/golang/go/commits/master) 。嵌套层级结构可以用 / 表示，如 net/http。影响多个模块、组件可以用 , 隔开（不加空格），如 net/http,cmd。后加入项目的新成员应遵循已有的 scope 约定（通过 git log 可以查看某个文件的提交历史），不要自己编造。使用首字母小写的驼峰命名。除具体的模块、组件名之外，可以使用 base 表示基础结构、框架相关的改动，用 misc 表示杂项改动，用 all 表示大范围重构。

#### subject 部分
subject是 commit 目的的简短描述，60 个字符左右的简要说明，首字母小写，通常是动宾结构，描述做了什么事情，动词用一般现在时，禁止出现 update code ， fix bug 等无实际意义的描述。

``` shell
# bad case

git commit -m "feat(scope): update code for carousel"

git commit -m "fix(scope): fix bug #1024"

# good case

git commit -m "feat(scope): select connector by sorting free memory"
#（不需要形如 update about how to select connector ... 的啰嗦写法）

git commit -m "fix(scope): fix success tip can not show on IE8"
#（不需要形如 fix bug of ... 的啰嗦写法）
```

- 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
- 尽量使用简单句保证简洁性
- 第一个字母小写
- 结尾不加句号（.）
- 通过翻译检测工具确认英文的正确性和可读性

## 参考文献
- https://github.com/zeit/next.js
- https://github.com/facebook/react
- https://github.com/ant-design/ant-design
- https://github.com/koajs/koa
