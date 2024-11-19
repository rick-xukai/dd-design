import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
// import { Carousel } from 'antd';
// import _ from 'lodash';

const MasonryGrid = () => {
  const [images, setImages] = useState<any>([]);
//   const [showMasonryInfo, setShowMasonryInfo] = useState<boolean>(false);
//   const [currentShowIndex, setCurrentShowIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const response: any = [
        // {
        //   id: '1858753063332286466',
        //   imgId: '1858753180860518401',
        //   prompt: '长着猪鼻子的克洛玛依',
        //   promptUse: '长着猪鼻子的克洛玛依 LE --比例 1:1',
        //   imageUrl: '',
        //   goodNum: 0,
        //   collectNum: 0,
        //   collectState: 0,
        //   likeState: 0,
        //   painterId: '1858417123602305026',
        //   painterName: '陌凉',
        //   painterAvatar:
        //     'https://thirdwx.qlogo.cn/mmopen/vi_32/m00y84keAxFMYIJIZboiaOjricoiaESK3iaZToXbsBJDkEtY6LKO15OqMcY6UNnKLNLvLbqd9T3pn4FGPbZEE97udQ/132',
        //   painterProfile: null,
        //   width: 1088,
        //   height: 1088,
        //   size: null,
        //   contentType: 'image/webp',
        //   imageAve: '0x000000',
        //   fansNum: 0,
        //   worksNum: 1,
        //   focusFlag: 0,
        //   produceTime: '2024-11-19 14:04',
        //   initImgObject: null,
        //   instructs: ['比例 1:1'],
        //   ossWatermarkPath:
        //     'watermark,image_d2ViL3dhdGVybWFyay9kZF93YXRlcm1hcmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA,g_south,t_40,x_24,y_24',
        // },
        {
          id: '1858753063332286466',
          imgId: '1858753180860518401',
          prompt: '长着猪鼻子的克洛玛依',
          promptUse: '长着猪鼻子的克洛玛依 LE --比例 1:1',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/7893441a-c190-4d38-aebc-fa180d2e4415_0.webp',
          goodNum: 0,
          collectNum: 0,
          collectState: 0,
          likeState: 0,
          painterId: '1858417123602305026',
          painterName: '陌凉',
          painterAvatar:
            'https://thirdwx.qlogo.cn/mmopen/vi_32/m00y84keAxFMYIJIZboiaOjricoiaESK3iaZToXbsBJDkEtY6LKO15OqMcY6UNnKLNLvLbqd9T3pn4FGPbZEE97udQ/132',
          painterProfile: null,
          width: 1088,
          height: 1088,
          size: null,
          contentType: 'image/webp',
          imageAve: '0x000000',
          fansNum: 0,
          worksNum: 1,
          focusFlag: 0,
          produceTime: '2024-11-19 14:04',
          initImgObject: null,
          instructs: ['比例 1:1'],
          ossWatermarkPath:
            'watermark,image_d2ViL3dhdGVybWFyay9kZF93YXRlcm1hcmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA,g_south,t_40,x_24,y_24',
        },
        {
          id: '1858754260491505665',
          imgId: '1858755713439993857',
          prompt:
            '一簇一簇的雏菊，单个的花簇单个的花朵，黄白，纯风景，细节刻画，绝美，治愈系线条',
          promptUse:
            '一簇一簇的雏菊，单个的花簇单个的花朵，黄白，纯风景，细节刻画，绝美，治愈系线条 --比例 16:9 --基础V2 --风格化 100 --风格 真实 --慢速',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/dc6821dd-9525-4cb9-a213-01af1fb211ef_0_0.webp',
          goodNum: 0,
          collectNum: 0,
          collectState: 0,
          likeState: 0,
          painterId: '1789869451249815553',
          painterName: 'XR',
          painterAvatar:
            'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLkva9ibvBZ8OliakBqP4Bp1LlXBxcdCa6VZPOBlElnzTAT2wXzR3ib2REdFExmGnSRdVMibtR0yDXIQg/132',
          painterProfile: null,
          width: 1456,
          height: 816,
          size: '772592',
          contentType: 'image/webp',
          imageAve: '0x000000',
          fansNum: 3,
          worksNum: 754,
          focusFlag: 0,
          produceTime: '2024-11-19 14:14',
          initImgObject: null,
          instructs: ['基础V2', '风格 真实', '风格化 100', '比例 16:9'],
          ossWatermarkPath:
            'watermark,image_d2ViL3dhdGVybWFyay9kZF93YXRlcm1hcmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA,g_south,t_40,x_24,y_24',
        },
        {
          id: '1858756154563694594',
          imgId: '1858757601585631234',
          prompt:
            'A model wears an off-the-shoulder beige dress with a long, flowing train made of sheer chiffon and fabric details that cascade to the floor. The gown has one shoulder without sleeves, adorned with ruffles at the front. It features a high leg slit on each side, adding an artistic expression. The model stands against fashion show background, people looks fashion show. highlighting her full body silhouette. Her hair is styled straight back, adding depth and contrast to the image. Beige colors. Photographed in the style of David LaChapelle.',
          promptUse:
            'A model wears an off-the-shoulder beige dress with a long, flowing train made of sheer chiffon and fabric details that cascade to the floor. The gown has one shoulder without sleeves, adorned with ruffles at the front. It features a high leg slit on each side, adding an artistic expression. The model stands against fashion show background, people looks fashion show. highlighting her full body silhouette. Her hair is styled straight back, adding depth and contrast to the image. Beige colors. Photographed in the style of David LaChapelle. --比例 9:16 --基础V2 --风格化 100 --风格 真实 --慢速',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/143e6e9a-d652-4f5d-bbda-8020f2a200be_0_0.webp',
          goodNum: 0,
          collectNum: 0,
          collectState: 0,
          likeState: 0,
          painterId: '1789869451249815553',
          painterName: 'XR',
          painterAvatar:
            'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLkva9ibvBZ8OliakBqP4Bp1LlXBxcdCa6VZPOBlElnzTAT2wXzR3ib2REdFExmGnSRdVMibtR0yDXIQg/132',
          painterProfile: null,
          width: 816,
          height: 1456,
          size: '371666',
          contentType: 'image/webp',
          imageAve: '0x000000',
          fansNum: 3,
          worksNum: 754,
          focusFlag: 0,
          produceTime: '2024-11-19 14:22',
          initImgObject: null,
          instructs: ['基础V2', '风格 真实', '风格化 100', '比例 9:16'],
          ossWatermarkPath:
            'watermark,image_d2ViL3dhdGVybWFyay9kZF93YXRlcm1hcmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA,g_south,t_40,x_24,y_24',
        },
        {
          id: '1858753576538935297',
          imgId: '1858754505593688065',
          prompt:
            '一位穿着白色西装的女商人的逼真照片，深色长发，棕色眼睛，坐在石头上，旁边是一只巨大的真正的白色布偶猫。人的两倍大，像狮子那么大。',
          promptUse:
            '一位穿着白色西装的女商人的逼真照片，深色长发，棕色眼睛，坐在石头上，旁边是一只巨大的真正的白色布偶猫。人的两倍大，像狮子那么大。 --比例 3:4 --基础V2 --风格化 100 --慢速',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/36eb18b5-aac0-4867-a1bc-50257ebd1e92_0_0.webp',
          goodNum: 0,
          collectNum: 0,
          collectState: 0,
          likeState: 0,
          painterId: '1722166196852330497',
          painterName: '尊嘟假嘟',
          painterAvatar:
            'https://cdn.diandiansheji.com/avatar/1779717372011188225.jpg',
          painterProfile: null,
          width: 928,
          height: 1232,
          size: '401296',
          contentType: 'image/webp',
          imageAve: '0x000000',
          fansNum: 106,
          worksNum: 8003,
          focusFlag: 0,
          produceTime: '2024-11-19 14:09',
          initImgObject: null,
          instructs: ['基础V2', '风格化 100', '比例 3:4'],
          ossWatermarkPath:
            'watermark,image_d2ViL3dhdGVybWFyay9kZF93YXRlcm1hcmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA,g_south,t_40,x_24,y_24',
        },
        {
          id: '1858755627033497601',
          imgId: '1858756646844600322',
          prompt: '换脸',
          promptUse:
            '换脸 --cref https://cdn.diandiansheji.com/operate_user/image_upscale/1858755541108625409.png --cw 100 --cref https://cdn.diandiansheji.com/operate_user/image_upscale/1858755541108625409.png --cw 100 --比例 3:4 --基础V2.1 --风格化 100 --慢速',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/410768e4-ec50-4137-bf13-422a3035a4d2_0_0.webp',
          goodNum: 0,
          collectNum: 0,
          collectState: 0,
          likeState: 0,
          painterId: '1722166196852330497',
          painterName: '尊嘟假嘟',
          painterAvatar:
            'https://cdn.diandiansheji.com/avatar/1779717372011188225.jpg',
          painterProfile: null,
          width: 928,
          height: 1232,
          size: '528866',
          contentType: 'image/webp',
          imageAve: '0x000000',
          fansNum: 106,
          worksNum: 8003,
          focusFlag: 0,
          produceTime: '2024-11-19 14:18',
          initImgObject: null,
          instructs: ['基础V2.1', '风格化 100', '比例 3:4'],
          ossWatermarkPath:
            'watermark,image_d2ViL3dhdGVybWFyay9kZF93YXRlcm1hcmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA,g_south,t_40,x_24,y_24',
        },
        {
          id: '1858752179076534273',
          imgId: '1858753046126891009',
          prompt:
            '一位穿着白色西装的女商人的逼真照片，深色长发，棕色眼睛，坐在石头上，旁边是一只巨大的真正的白色狮子。',
          promptUse:
            '一位穿着白色西装的女商人的逼真照片，深色长发，棕色眼睛，坐在石头上，旁边是一只巨大的真正的白色狮子。 --比例 3:4 --基础V2.1 --风格化 100 --慢速',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/b70720f4-9195-4019-b628-71625f235531_0_0.webp',
          goodNum: 0,
          collectNum: 0,
          collectState: 0,
          likeState: 0,
          painterId: '1722166196852330497',
          painterName: '尊嘟假嘟',
          painterAvatar:
            'https://cdn.diandiansheji.com/avatar/1779717372011188225.jpg',
          painterProfile: null,
          width: 928,
          height: 1232,
          size: '527842',
          contentType: 'image/webp',
          imageAve: '0x000000',
          fansNum: 106,
          worksNum: 8003,
          focusFlag: 0,
          produceTime: '2024-11-19 14:03',
          initImgObject: null,
          instructs: ['基础V2.1', '风格化 100', '比例 3:4'],
          ossWatermarkPath:
            'watermark,image_d2ViL3dhdGVybWFyay9kZF93YXRlcm1hcmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA,g_south,t_40,x_24,y_24',
        },
        {
          id: '1858752728408723458',
          imgId: '1858753599242342402',
          prompt:
            '一位穿着白色西装的女商人的逼真照片，深色长发，棕色眼睛，坐在石头上，旁边是一只巨大的真正的白色布偶猫。人的两倍大，像狮子那么大。',
          promptUse:
            '一位穿着白色西装的女商人的逼真照片，深色长发，棕色眼睛，坐在石头上，旁边是一只巨大的真正的白色布偶猫。人的两倍大，像狮子那么大。 --比例 3:4 --基础V2.1 --风格化 100 --慢速',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/340ffb5f-a937-4de2-84e1-de92c6f129bf_0_0.webp',
          goodNum: 0,
          collectNum: 0,
          collectState: 0,
          likeState: 0,
          painterId: '1722166196852330497',
          painterName: '尊嘟假嘟',
          painterAvatar:
            'https://cdn.diandiansheji.com/avatar/1779717372011188225.jpg',
          painterProfile: null,
          width: 928,
          height: 1232,
          size: '510414',
          contentType: 'image/webp',
          imageAve: '0x000000',
          fansNum: 106,
          worksNum: 8003,
          focusFlag: 0,
          produceTime: '2024-11-19 14:06',
          initImgObject: null,
          instructs: ['基础V2.1', '风格化 100', '比例 3:4'],
          ossWatermarkPath:
            'watermark,image_d2ViL3dhdGVybWFyay9kZF93YXRlcm1hcmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA,g_south,t_40,x_24,y_24',
        },
        {
          id: '1858755346078044161',
          imgId: '1858756241809051650',
          prompt:
            '一直兔子和松鼠拿着铁锹在花园里面挖土，兔子穿着红色的衣服，松鼠穿着黄色的背带裤，背景：房子的后花园，开满了五颜六色鲜花的围墙里面。高清，.3d皮克斯风格，给兔子和松鼠特写。',
          promptUse:
            '一直兔子和松鼠拿着铁锹在花园里面挖土，兔子穿着红色的衣服，松鼠穿着黄色的背带裤，背景：房子的后花园，开满了五颜六色鲜花的围墙里面。高清，.3d皮克斯风格，给兔子和松鼠特写。 --比例 9:16 --基础V2 --风格化 0 --慢速',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/a68d75db-80c4-42f6-a0f7-209c14b9819a_0_0.webp',
          goodNum: 0,
          collectNum: 0,
          collectState: 0,
          likeState: 0,
          painterId: '1787160275968954370',
          painterName: '不晚🍂',
          painterAvatar:
            'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKPlKIicNsxzkeiazuc2mDhqAQHbse8XkBO1N2ewiab7cGuAHK3B12bsRCCUpXy3sFoJIoGVg0nZlX7A/132',
          painterProfile: null,
          width: 816,
          height: 1456,
          size: '635534',
          contentType: 'image/webp',
          imageAve: '0x000000',
          fansNum: 2,
          worksNum: 97,
          focusFlag: 0,
          produceTime: '2024-11-19 14:16',
          initImgObject: null,
          instructs: ['基础V2', '风格化 0', '比例 9:16'],
          ossWatermarkPath:
            'watermark,image_d2ViL3dhdGVybWFyay9kZF93YXRlcm1hcmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA,g_south,t_40,x_24,y_24',
        },
        {
          id: '1858756162839056385',
          imgId: '1858757449890238466',
          prompt:
            '一位穿着白色西装的女商人的逼真照片，深色长发，棕色眼睛，坐在石头上，旁边是一只巨大的真正的白色布偶猫。人的两倍大，像狮子那么大。',
          promptUse:
            '一位穿着白色西装的女商人的逼真照片，深色长发，棕色眼睛，坐在石头上，旁边是一只巨大的真正的白色布偶猫。人的两倍大，像狮子那么大。 --比例 3:4 --基础V2 --风格化 100 --慢速',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/b693fcff-f1df-405d-ab63-5cfdac06f9ba_0_0.webp',
          goodNum: 0,
          collectNum: 0,
          collectState: 0,
          likeState: 0,
          painterId: '1858755726912098306',
          painterName: '点点U3U5',
          painterAvatar:
            'http://cdn.diandiansheji.com/avatar/user-default-avatar.png',
          painterProfile: null,
          width: 928,
          height: 1232,
          size: '433632',
          contentType: 'image/webp',
          imageAve: '0x000000',
          fansNum: 0,
          worksNum: 1,
          focusFlag: 0,
          produceTime: '2024-11-19 14:21',
          initImgObject: null,
          instructs: ['基础V2', '风格化 100', '比例 3:4'],
          ossWatermarkPath:
            'watermark,image_d2ViL3dhdGVybWFyay9kZF93YXRlcm1hcmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA,g_south,t_40,x_24,y_24',
        },
        {
          id: '1858756075975020545',
          imgId: '1858757173930201089',
          prompt:
            '雨，苏州花园芙蓉花从近到远，密集的芙蓉花和许多带水滴的芽，芙蓉花迷人，花清晰，真正的芙蓉花，闪闪发光，美丽，逼真，浪漫，3d，真实照片，slr相机照片，超高清图像质量，高清',
          promptUse:
            '雨，苏州花园芙蓉花从近到远，密集的芙蓉花和许多带水滴的芽，芙蓉花迷人，花清晰，真正的芙蓉花，闪闪发光，美丽，逼真，浪漫，3d，真实照片，slr相机照片，超高清图像质量，高清 --比例 9:16 --基础V2.1 --风格化 100 --风格 真实 --慢速',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/7ac869fc-4437-4932-94f2-02d85537cda5_0_0.webp',
          goodNum: 0,
          collectNum: 0,
          collectState: 0,
          likeState: 0,
          painterId: '1847870766604980225',
          painterName: '风荷',
          painterAvatar:
            'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKqiavB6eFcicmDlicqJ3wiaPQFU125mOnTr0Xso3350ZbGE0UcK5OeJviaCiaa81CJBprVsNgDu4YjOsyw/132',
          painterProfile: null,
          width: 816,
          height: 1456,
          size: '522654',
          contentType: 'image/webp',
          imageAve: '0x000000',
          fansNum: 0,
          worksNum: 120,
          focusFlag: 0,
          produceTime: '2024-11-19 14:20',
          initImgObject: null,
          instructs: ['基础V2.1', '风格 真实', '风格化 100', '比例 9:16'],
          ossWatermarkPath:
            'watermark,image_d2ViL3dhdGVybWFyay9kZF93YXRlcm1hcmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA,g_south,t_40,x_24,y_24',
        },
      ];
      setImages(response);
    };
    fetchImages();
  }, []);

  const breakpointColumnsObj = {
    default: 5,
    1024: 3,
    768: 2,
    576: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto gap-[8px]"
      columnClassName="bg-clip-padding"
    >
      {images.map((img: any) => (
        <div
          key={img.id}
          className="overflow-hidden rounded-lg mt-[8px] cursor-pointer"
        //   onMouseEnter={() => {
        //     setShowMasonryInfo(true);
        //     setCurrentShowIndex(index);
        //   }}
        //   onMouseLeave={() => {
        //     setShowMasonryInfo(false);
        //     setCurrentShowIndex(null);
        //   }}
        >
          <img
            src={img.imageUrl}
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryGrid;
