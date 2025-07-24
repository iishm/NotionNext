const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2021-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我们的网站', url: 'https://danlab.xyz' },
    { title: '访问成果列表了解更多', url: 'https://danlab.xyz/chengguo' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '分享工程监测技术',
  HEO_HERO_TITLE_2: '与思维认知',
  HEO_HERO_TITLE_3: 'DANLAB.XYZ',
  HEO_HERO_TITLE_4: '',
  HEO_HERO_TITLE_5: '',
  HEO_HERO_TITLE_LINK: '/photos',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '团队成果', url: '/chengguo' },
  HEO_HERO_CATEGORY_2: { title: '动态展台', url: '/zhantai' },
  HEO_HERO_CATEGORY_3: { title: '云端实验室', url: 'https://cloud.danlab.xyz' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🤝 专修工程结构监测',
    '🏃 脚踏实地行动派',
    '🏠 智慧监测小能手',
    '🤖️ 数据科技爱好者',
    '🧱 团队小组发动机'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/iishm',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://danlab.xyz/about',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'Camera',
      img_1: '/images/heo/shexiangtou.png',
      color_1: '#2F71F9',
      title_2: 'Laser',
      img_2: '/images/heo/jiguangleida.png',
      color_2: '#20C671'
    },
    {
      title_1: 'Liangqiao',
      img_1: '/images/heo/liangshiqiao.png',
      color_1: '#888888',
      title_2: 'Gongqiao',
      img_2: '/images/heo/gongqiao.png',
      color_2: '#000'
    },
    {
      title_1: 'Xielaqiao',
      img_1: '/images/heo/xielaqiao.png',
      color_1: '#31434B',
      title_2: 'Xuansuoqiao',
      img_2: '/images/heo/xuansuoqiao.png',
      color_2: '#fff'
    },
    {
      title_1: 'matlab',
      img_1: '/images/heo/Matlab_Logo.png',
      color_1: '#08609D',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'kafka',
      img_1: '/images/heo/kafka_logo--simple.png',
      color_1: '#fff',
      title_2: 'Agent',
      img_2: '/images/heo/n8n-color.png',
      color_2: '#fff',
    },
    {
      title_1: 'ANSYS',
      img_1: '/images/heo/ansys-logo.svg',
      color_1: '#000',
      title_2: 'BridgeDoctor',
      img_2: '/images/heo/qiaoliangboshi.png',
      color_2: '#fff',
    },
    {
      title_1: 'Guangxian',
      img_1: '/images/heo/guangxian.png',
      color_1: '#CFCECF',
      title_2: 'Wuxian',
      img_2: '/images/heo/wireless.png',
      color_2: '#F5F4F4',
    },
    {
      title_1: 'Java',
      img_1: '/images/heo/Java-Emblem.jpg',
      color_1: '#ffffff',
      title_2: 'C++',
      img_2: '/images/heo/ISO_C++_Logo.svg',
      color_2: '#fff'
    }
  ],

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_NOT_BY_AI: false, // 显示非AI写作
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
