import { Images } from '@/theme/images';
import { RouterKeys } from '@/constants/keys';
import { HomePageTabsKey, SVGName } from '@/types/global';

export const NavigationOptions = [
  {
    label: '',
    options: [
      {
        icon: SVGName.Home,
        name: '首页',
        link: RouterKeys.home,
      },
      {
        icon: SVGName.Communal,
        name: '社区',
        link: RouterKeys.community,
      },
      {
        icon: SVGName.Event,
        name: '活动',
        link: RouterKeys.events,
      },
      {
        icon: SVGName.Store,
        name: '商店',
        link: RouterKeys.stores,
      },
    ],
  },
  {
    label: 'AI 创作',
    options: [
      {
        icon: SVGName.Assistants,
        name: '我的资产',
        link: RouterKeys.myAssets,
      },
      {
        icon: SVGName.Liabilities,
        name: '智能助理',
        link: RouterKeys.intelligentAssistant,
      },
      {
        icon: SVGName.Images,
        name: '图片生成',
        link: RouterKeys.imageGeneration,
      },
      {
        icon: SVGName.Muise,
        name: '音乐生成',
        link: RouterKeys.musicGeneration,
      },
      {
        icon: SVGName.Video,
        name: '视频生成',
        link: RouterKeys.videoGeneration,
      },
      {
        icon: SVGName.Tool,
        name: '应用中心',
        link: RouterKeys.appCenter,
      },
    ],
  },
  {
    label: '团队',
    options: [
      {
        icon: SVGName.Knowledge,
        name: '知识空间',
        link: RouterKeys.knowledgeSpace,
      },
      {
        icon: SVGName.Plus,
        name: '知识库',
        link: RouterKeys.knowledgeBase,
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
  {
    name: '图像生成',
    label: '让创意触手可及',
    icon: SVGName.Images,
    banner: Images.TestImages7,
  },
  {
    name: '音乐生成',
    label: '让创意触手可及',
    icon: SVGName.Images,
    banner: Images.TestImages7,
  },
  {
    name: '视频生成',
    label: '让创意触手可及',
    banner: Images.TestImages7,
    icon: SVGName.Images,
  },
  {
    name: '数字人',
    label: '让创意触手可及',
    banner: Images.TestImages7,
    icon: SVGName.Images,
  },
];
export const HomeFunctionOptionLow = [
  {
    name: '智能抠图',
    icon: SVGName.Shadow,
  },
  {
    name: '智能抠图',
    icon: SVGName.Shadow,
  },
  {
    name: '智能抠图',
    icon: SVGName.Shadow,
  },
  {
    name: '智能抠图',
    icon: SVGName.Shadow,
  },
  {
    name: '智能抠图',
    icon: SVGName.Shadow,
  },
  {
    name: '智能抠图',
    icon: SVGName.Shadow,
  },
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
export const MainContainerWidth = {
  default: '240px',
  lg: '85px',
};
export const CarouselPlaceholder = [
  {
    id: '1',
    imageUrl: '',
    width: 500,
    height: 500,
  },
  {
    id: '2',
    imageUrl: '',
    width: 500,
    height: 500,
  },
];
