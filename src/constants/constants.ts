import { Images } from '@/theme/images';
import { HomePageTabsKey } from '@/types/global';

export const NavigationOptions = [
  {
    label: '',
    options: [
      {
        icon: Images.MenuHomeIcon,
        name: '首页',
        link: '/',
      },
      {
        icon: Images.MenuCommunalIcon,
        name: '社区',
        link: '/communal',
      },
      {
        icon: Images.MenuEventIcon,
        name: '活动',
        link: '/event',
      },
      {
        icon: Images.MenuStoreIcon,
        name: '商店',
        link: '/store',
      },
    ],
  },
  {
    label: 'AI 创作',
    options: [
      {
        icon: Images.MenuAssistantsIcon,
        name: '我的资产',
        link: '/liabilities',
      },
      {
        icon: Images.MenuLiabilitiesIcon,
        name: '智能助理',
        link: '/assistants',
      },
      {
        icon: Images.MenuImagesIcon,
        name: '图片生成',
        link: '/image-generating',
      },
      {
        icon: Images.MenuMuiseIcon,
        name: '音乐生成',
        link: '/muise-generating',
      },
      {
        icon: Images.MenuVideoIcon,
        name: '视频生成',
        link: '/video-generating',
      },
      {
        icon: Images.MenuToolIcon,
        name: '应用中心',
        link: '/tool',
      },
    ],
  },
  {
    label: '团队',
    options: [
      {
        icon: Images.MenuKnowledgeIcon,
        name: '知识空间',
        link: '/knowledge',
      },
      {
        icon: Images.MenuPlusIcon,
        name: '知识库',
        link: '/repository',
      },
    ],
  },
];
export const HomeHeaderTab = [
  {
    name: '社区',
    value: 'communal',
  },
  {
    name: '创建设计',
    value: 'design',
  },
];
export const HomeFunctionOptionHigh = [
  '图像生成',
  '音乐生成',
  '视频生成',
  '数字人',
];
export const HomeFunctionOptionLow = [
  '智能抠图',
  '模特换装',
  'Ai商品图',
  'Ai消除',
  'Ai消除',
  'Ai消除',
];
export const MyAssetsTestData = [
  {
    id: 1,
    image: Images.TestImages1,
  },
  {
    id: 2,
    image: Images.TestImages2,
  },
  {
    id: 3,
    image: Images.TestImages3,
  },
  {
    id: 4,
    image: Images.TestImages2,
  },
  {
    id: 5,
    image: Images.TestImages1,
  },
  {
    id: 6,
    image: Images.TestImages3,
  },
];
export const TutorialTestData = [
  {
    id: 1,
    title: '认识点点',
    description: '阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬阿三阿斯蒂芬阿斯弗',
    duration: '6Min',
    image: Images.TestImages4,
  },
  {
    id: 2,
    title: '认识点点',
    description: '阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬阿三阿斯蒂芬阿斯弗',
    duration: '6Min',
    image: Images.TestImages5,
  },
  {
    id: 3,
    title: '认识点点',
    description: '阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬阿三阿斯蒂芬阿斯弗',
    duration: '6Min',
    image: Images.TestImages4,
  },
  {
    id: 4,
    title: '认识点点',
    description: '阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬阿三阿斯蒂芬阿斯弗',
    duration: '6Min',
    image: Images.TestImages5,
  },
  {
    id: 5,
    title: '认识点点',
    description: '阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬阿三阿斯蒂芬阿斯弗',
    duration: '6Min',
    image: Images.TestImages4,
  },
  {
    id: 6,
    title: '认识点点',
    description: '阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬阿三阿斯蒂芬阿斯弗',
    duration: '6Min',
    image: Images.TestImages5,
  },
  {
    id: 7,
    title: '认识点点',
    description: '阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬阿三阿斯蒂芬阿斯弗',
    duration: '6Min',
    image: Images.TestImages4,
  },
  {
    id: 8,
    title: '认识点点',
    description: '阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬阿三阿斯蒂芬阿斯弗',
    duration: '6Min',
    image: Images.TestImages5,
  },
];
export const HomePageTabs = [
  {
    key: HomePageTabsKey.recommended,
    label: '推荐',
  },
  {
    key: HomePageTabsKey.hot,
    label: '热门',
  },
  {
    key: HomePageTabsKey.daily,
    label: '每日精选',
  },
  {
    key: HomePageTabsKey.favorite,
    label: '喜欢',
  },
  {
    key: HomePageTabsKey.collection,
    label: '收藏',
  },
];
