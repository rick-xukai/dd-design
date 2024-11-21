import React, { useEffect, useState, useRef } from 'react';
// import Masonry from 'react-masonry-css';
import _ from 'lodash';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Images } from '@/theme/images';
import { WaterfallItemsPositions } from '@/types/global';

interface MasonryItemProps {
  id: string;
  imageUrl: string;
  width: number;
  height: number;
}

const MasonryGrid = () => {
  const containerRef = useRef<any>(null);

  const [carouselPlaceholderSize, setCarouselPlaceholderSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const [positions, setPositions] = useState<WaterfallItemsPositions[]>([]);

  const [masonryContainerHeight, setMasonryContainerHeight] =
    useState<number>(0);

  const [images, setImages] = useState<MasonryItemProps[]>([]);

  const gap = 8;
  const minColumnWidth = 200;

  useEffect(() => {
    const fetchImages = async () => {
      const response: MasonryItemProps[] = [
        {
          id: '1858753063332286466',
          imageUrl: '',
          width: 500,
          height: 500,
        },
        {
          id: '1858753063332286466',
          imageUrl: '',
          width: 500,
          height: 500,
        },
        {
          id: '1858753063332286466',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/7893441a-c190-4d38-aebc-fa180d2e4415_0.webp',
          width: 1088,
          height: 1088,
        },
        {
          id: '1858756154563694594',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/143e6e9a-d652-4f5d-bbda-8020f2a200be_0_0.webp',
          width: 816,
          height: 1456,
        },
        {
          id: '1858755627033497601',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/410768e4-ec50-4137-bf13-422a3035a4d2_0_0.webp',
          width: 928,
          height: 1232,
        },
        {
          id: '1858752179076534273',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/eb887f58-4917-4946-b514-c318408c0082_0.webp',
          width: 768,
          height: 512,
        },
        {
          id: '1858752728408723458',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/340ffb5f-a937-4de2-84e1-de92c6f129bf_0_0.webp',
          width: 928,
          height: 1232,
        },
        {
          id: '1858755346078044161',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/a68d75db-80c4-42f6-a0f7-209c14b9819a_0_0.webp',
          width: 816,
          height: 1456,
        },
        {
          id: '1858756162839056385',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/b693fcff-f1df-405d-ab63-5cfdac06f9ba_0_0.webp',
          width: 928,
          height: 1232,
        },
        {
          id: '1858756075975020545',
          imageUrl:
            'https://cdn.diandiansheji.com/mj/7ac869fc-4437-4932-94f2-02d85537cda5_0_0.webp',
          width: 816,
          height: 1456,
        },
      ];
      setImages(response);
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const calculateLayout = () => {
      if (!containerRef.current) return;

      // 获取容器宽度
      const containerWidth = containerRef.current.offsetWidth;

      // 动态计算列数
      const columnCount = Math.floor(containerWidth / (minColumnWidth + gap));

      // 动态调整列宽
      const adjustedColumnWidth =
        (containerWidth - (columnCount - 1) * gap) / columnCount;

      // 每列累积高度
      const columnHeights = Array(columnCount).fill(0);

      const newPositions: WaterfallItemsPositions[] = [];

      images.forEach((item) => {
        // 找到最短列
        const shortestColumnIndex = columnHeights.indexOf(
          Math.min(...columnHeights)
        );
        // 计算横坐标
        const xCoordinate = shortestColumnIndex * (adjustedColumnWidth + gap);
        // 计算纵坐标
        const yCoordinate = columnHeights[shortestColumnIndex];

        newPositions.push({
          xCoordinate,
          yCoordinate,
          width: adjustedColumnWidth,
          height: (item.height / item.width) * adjustedColumnWidth, // 保持比例
        });

        // 更新列高度
        columnHeights[shortestColumnIndex] +=
          (item.height / item.width) * adjustedColumnWidth + gap;
      });

      // 找到最长的一列，为父容器设置高度
      setMasonryContainerHeight(_.max(columnHeights));

      setPositions(newPositions);
    };

    calculateLayout();

    window.addEventListener('resize', calculateLayout);
    return () => window.removeEventListener('resize', calculateLayout);
  }, [images]);

  useEffect(() => {
    if (positions.length && positions.length >= 2) {
      // 设置轮播图占位宽高
      setCarouselPlaceholderSize({
        width: positions[0].width + positions[1].xCoordinate,
        height: positions[0].height,
      });
    }
  }, [positions]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        height: masonryContainerHeight,
      }}
    >
      <div
        className="absolute top-0 left-0 z-10 rounded-2xl"
        style={{
          width: carouselPlaceholderSize.width,
          height: carouselPlaceholderSize.height,
        }}
      >
        <Swiper
          loop={true}
          effect={'fade'}
          navigation={true}
          autoplay={{
            delay: 2000,
          }}
          modules={[Navigation, EffectFade, Autoplay]}
          className="h-full"
        >
          <SwiperSlide>
            <img
              src={Images.TestImages8.src}
              alt=""
              className="rounded-2xl h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Images.TestImages9.src}
              alt=""
              className="rounded-2xl h-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {positions.map((pos, index: number) => (
        <div
          key={index}
          className="absolute overflow-hidden rounded-2xl"
          style={{
            top: pos.yCoordinate,
            left: pos.xCoordinate,
            width: pos.width,
            height: pos.height,
            opacity: index === 0 || index === 1 ? 0 : 1,
          }}
        >
          {images[index].imageUrl && (
            <img
              src={images[index].imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
