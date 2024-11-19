import { Images } from '@/theme/images';

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
        icon: Images.MenuLiabilitiesIcon,
        name: '我的资产',
        link: '/liabilities',
      },
      {
        icon: Images.MenuAssistantsIcon,
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
