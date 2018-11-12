/* eslint-disable max-len */
export const SocialAccounts = [
  {
    type: 'blog',
    icon: '/images/resume/social-accounts/blog.svg',
    link: 'https://hankliu62.github.io/',
  },
  {
    type: 'github',
    icon: '/images/resume/social-accounts/github.svg',
    link: 'https://github.com/hankliu62',
  },
  {
    type: 'zhihu',
    icon: '/images/resume/social-accounts/zhihu.svg',
    link: 'https://www.zhihu.com/people/hankliu62/activities',
  },
  {
    type: 'segmentfault',
    icon: '/images/resume/social-accounts/segmentfault.svg',
    link: 'https://segmentfault.com/u/yizhikewangfeixiangdezhu',
  },
  {
    type: 'weibo',
    icon: '/images/resume/social-accounts/weibo.svg',
    link: 'https://weibo.com/2769648804/profile',
  },
];

export const User = {
  Name: '刘小聪',
  Signature: '「我们在梦里走过许多路，醒来后却发现自己还在床上。」',
};

export const Information = [
  {
    type: 'birthday',
    value: '1992.06.12',
  },
  {
    type: 'education',
    value: '湖南商学院 · 计算机科学与技术',
  },
  {
    type: 'graduation',
    value: '2014年',
  },
  {
    type: 'email',
    value: '397694072@qq.com',
  },
  {
    type: 'telephone',
    value: '18521516462',
  },
  {
    type: 'address',
    value: '上海',
  },
];

export const Skills = [
  {
    type: 'html5',
    popover: 'HTML',
    percent: 85,
  },
  {
    type: 'css3',
    popover: 'CSS',
    percent: 75,
  },
  {
    type: 'javascript',
    popover: 'Javascript',
    percent: 85,
  },
  {
    type: 'es6',
    popover: 'ES6',
    percent: 80,
  },
  {
    type: 'vue',
    popover: 'Vue',
    percent: 75,
  },
  {
    type: 'react',
    popover: 'React',
    percent: 80,
  },
  {
    type: 'nodejs',
    popover: 'Node',
    percent: 60,
  },
  {
    type: 'golang',
    popover: 'Go',
    percent: 55,
  },
];

export const Experiences = [
  {
    company: '上海忻知信息科技有限公司',
    time: '2018.1 - 2018.11',
    profile: '公司旗下的八爪鱼AI平台是一个智能内容服务平台，主营业务包括帮助内容生产商进行智能分发以及数据分析，同时提供内容决策服务，智能分析用户的需求，零成本解决粉丝获取、粉丝运营以及商业变现等问题。',
    post: '初级软件工程师（前端）',
    works: [
      '官网构建以及页面内容的实现；',
      '负责八爪鱼AI前台客户、后台管理平台页面研发；',
      '负责页面的构建以及网页性能的优化；',
      '官网SEO的优化；',
      '小部分后台接口的实现。',
    ],
    image: '/images/resume/experiences/bzy.jpg',
  },
  {
    company: '美味不用等（上海）信息科技股份有限公司',
    time: '2017.8 - 2017.12',
    profile: '美味不用等(上海)美味不用等是专业的智慧餐饮服务商，通过B端SaaS服务和C端产品，解决餐厅的效率、管理、营销、成本和顾客就餐体验等方面的问题。 ',
    post: '前端开发工程师',
    works: [
      '商户管理系统页面内容的开发和维护；',
      '页面通用组件的封装；',
      '代码以及流程规范化的构建；',
      '网页性能的优化。',
    ],
    image: '/images/resume/experiences/mwee.jpg',
  },
  {
    company: '群硕软件开发（上海）有限公司',
    time: '2014.7 - 2017.7',
    profile: '群硕致力于提供广泛的软件开发服务和解决方案服务，综合运用最佳实践和领域知识以及一流开发工具和技术，我们为全球客户提供高附加值软件开发及解决方案服务。 ',
    post: '前端开发工程师',
    works: [
      '公司旗下产品群脉SCRM前端页面的开发和维护；',
      '公司旗下服务抱米SOS系统前端页面的开发和维护；',
      '页面通用组件的封装。',
    ],
    image: '/images/resume/experiences/augmentum.jpg',
  },
];

export const Projects = [
  {
    name: '八爪鱼·AI',
    company: '上海忻知信息科技有限公司',
    time: '2018.09-2017.10',
    profile: '八爪鱼AI是国内专业的内容服务平台，服务于内容方，帮助合作方解决粉丝运营的难题。',
    duties: [
      '独立开发，从构建、开发到维护都是独自一人实现;',
      '由于官网需要支持SEO，在架构上使用轻量级的 React 服务端渲染应用框架Next.js;',
      '在布局上使用ant-design的响应式栅格布局，在不同的屏幕上都能完美展示网页内容;',
      '针对移动端使用不同的css和切图，完美兼容移动平台;',
      'SEO的优化，通过网页中标签、keywords、description的设置，网站结构布局优化以及网页代码优化，提升 网站的搜索引擎自然排名。',
    ],
    summary: '由于该项目独自一人完成的，所以对于项目的开发流程有了更为深刻的了解，从技术框架的选择到项目初始化的构建的过程中遇到了很多的问题，例如: 为了能让ant-design中的组件按需加载，需要使用 babel-plugin-import 来进行按需加载，由于需要兼容移动端，又引入了 ant-design-mobile UI组件库，对于 babel@7+ 来说，babel-plugin-import 库中的 options 是不能伟数组的，所以导致了当时编译一直报错;由此可见，当我们构建项目的时候，库与库之间依赖的关系，以及版本兼容一定要非常注意，而且对于 eslint 和 stylelint 等 codinglint 的功能一定要在项目初见时加入，不然后面修改起来很麻烦。总的来说的话，让我对项目开发流程又有了深刻的了解，而且还学习的新技术Next.js服务端渲染应用框架。',
    link: 'https://www.bzy.ai/',
    image: '/images/resume/projects/bzy.jpg',
  },
  {
    name: '商户管理系统',
    company: '美味不用等（上海）信息科技股份有限公司',
    time: '2017.08-2017.12',
    profile: '美味不用等是专业的智慧餐饮服务商，通过我们的产品，解决餐厅的效率、管理、营销、成本和顾客就餐体验等方面的问题。',
    duties: [
      '使用react +react-router+redux 等技术开发网页页面;',
      '运用jQuery、Bootstrap等框架库，提高团队开发效率;',
      '配置 eslint 和 stylelint 等代码检查工具来降低代码的错误率，以及提高代码的一致性;',
      '封装通用的react组件，提高代码的复用率，减少代码的体积，以及降低copy-paste的出错率;',
      '优化代码逻辑，利用 webpack 的 code splitting 特性，将各个步骤的代码进行拆分，实现按需加载，减少代 码的体积;',
      '优化 webpack 配置文件，提高 webpack 构建的速度，减少打包后代码的体积。',
    ],
    summary: '由于该项目是我中途接手的一个项目，由于一开始未使用eslint和stylelint等代码检查工具，在项目开发过程中，很容易出现一些低级的语法错误，而且只有等webpack构建完成，刷新页面才能发觉错误，大大的降低来开发速度，加入代码检查工具后这种现象大大减少，所以对于一个项目来说代码检查是一个必不可少的环节。而且在此次项目中学习来很多webpack的优化策略，加深来对webpack的了解。',
    link: 'http://shop.mwee.cn/',
    image: '/images/resume/projects/mwee.jpg',
  },
  {
    name: '抱米SOS系统',
    company: '群硕软件开发（上海）有限公司',
    time: '2015.11-2017.07',
    profile: '抱米SOS系统的核心目标就是直观体现最有针对性、影响服务判断的客户维护信息。通过定制化标签，智能筛选搜索和关键业绩概述来清晰的了解您客户的需求，并可跨门店分享',
    duties: [
      '使用react + redux + sass 等技术实现前台页面；',
      '封装通用的公共组件，提高代码的复用率；',
      '通过axios与后台数据进行交互，协调后端同学完成产品的开发。',
    ],
    summary: '这是工作以后的第二个项目，抱米餐厅管理系统网页端前端使用的技术主要是React+Redux+Webpack，React可以说是2015最热门的前端框架之一，React 只是涉及到MVC框架的V(视图)部分，React 更加注重UI的组件化，在一开始写React的时候，最主要的问题是如何来划分component以及状态的传递。随着不断的学习和练习，使我加深了对React的了解，对前端的组件化也有了一定的认识，通过对Redux的学习，使我对前端树形的数据存储结构以及单向数据流有了初步的了解。总的来说，通过抱米项目，使我对React+Redux这种开发方式有了全新的认识。',
    link: 'https://www.baomiding.com/',
    image: '/images/resume/projects/baomi.png',
  },
  {
    name: '群脉SCRM',
    company: '群硕软件开发（上海）有限公司',
    time: '2014.07-2015.11',
    profile: '群脉SCRM是一个可定制的社会化的客户管理系统，其基本的功能就是通过一系列的社会渠道来与客户建立关系，同时通过一系列的营销活动和优惠来推动游客成为会员，同时增加会员的忠诚度。 ',
    duties: [
      '使用AngularJs 1.X + CoffeeScript + Sass 等技术后台管理页面;',
      '使用vue + vue.router 等技术微信h5页面;',
      '封装通用的directive指令，提高代码的复用率，例如: baidu map directive;',
      '通过Ajax与后台数据进行交互，与后端工作有效对接。',
    ],
    summary: '这个可以说是我入职以来的第一个项目，刚从学校出来，发现在工作中使用到的技术和当时在学校中学到的知识有很大的区别，所以在项目开始的一段时间里，发现完成组长安排的任务还是有一定的难度，但是那段时间也是自己进步比较快的一段时间，从技术方面来讲，群脉前端使用的是组件化开发的思想，我们前端Js框架使用的是AngularJs加上使用的Javascript的扩展语言CoffeeScript，在CSS方面使用的CSS预处理语言Sass，在代码管理工具使用的是Git，这些新的技术和工具都是在这段时间慢慢熟悉起来。我觉得在这段时间收获最大的就是技术方面的积累，同时也熟悉了前后台分工同时开发的工作流程。',
    link: 'https://www.quncrm.com/',
    image: '/images/resume/projects/qunscrm.jpeg',
  },
];

export const BlogLink = 'https://hankliu62.github.io/';
