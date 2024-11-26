import { Images } from '@/theme/images';
import { RouterKeys } from '@/constants/keys';
import { HomePageTabsKey, SVGName } from '@/types/global';

export const NavigationOptions = [
  {
    label: '',
    options: [
      {
        icon: SVGName.Home,
        name: 'home',
        link: RouterKeys.home,
      },
      {
        icon: SVGName.Communal,
        name: 'community',
        link: RouterKeys.community,
      },
      {
        icon: SVGName.Event,
        name: 'events',
        link: RouterKeys.events,
      },
      {
        icon: SVGName.Store,
        name: 'stores',
        link: RouterKeys.stores,
      },
    ],
  },
  {
    label: 'AICreation',
    options: [
      {
        icon: SVGName.Assistants,
        name: 'myAssets',
        link: RouterKeys.myAssets,
      },
      {
        icon: SVGName.Liabilities,
        name: 'intelligentAssistant',
        link: RouterKeys.intelligentAssistant,
      },
      {
        icon: SVGName.Images,
        name: 'imageGeneration',
        link: RouterKeys.imageGeneration,
      },
      {
        icon: SVGName.Muise,
        name: 'musicGeneration',
        link: RouterKeys.musicGeneration,
      },
      {
        icon: SVGName.Video,
        name: 'videoGeneration',
        link: RouterKeys.videoGeneration,
      },
      {
        icon: SVGName.Tool,
        name: 'appCenter',
        link: RouterKeys.appCenter,
      },
    ],
  },
  {
    label: 'team',
    options: [
      {
        icon: SVGName.Knowledge,
        name: 'knowledgeSpace',
        link: RouterKeys.knowledgeSpace,
      },
      {
        icon: SVGName.Plus,
        name: 'knowledgeBase',
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
