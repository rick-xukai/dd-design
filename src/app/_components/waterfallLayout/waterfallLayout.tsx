import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useWindowSize } from 'react-use';
import { Image } from 'antd';
import _ from 'lodash';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';

import { WaterfallItemsPositions, BreakPoint } from '@/types/global';
import SwiperComponent from '@/app/_components/swiperComponent';

const WaterfallLayout = ({
  sourceData,
  nextPage,
}: {
  sourceData: any;
  nextPage: () => void;
}) => {
  const gridItemsGap = 8;

  const { width } = useWindowSize();

  const containerRef = useRef<any>(null);

  const [carouselPlaceholderSize, setCarouselPlaceholderSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [positions, setPositions] = useState<WaterfallItemsPositions[]>([]);
  const [masonryContainerHeight, setMasonryContainerHeight] =
    useState<number>(0);
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const [needSwiper, setNeedSwiper] = useState<boolean>(false);

  const calculateLayout = (event?: any) => {
    let minColumnWidth = width >= BreakPoint.contentMax ? 300 : 200;

    if (event) {
      const { innerWidth } = event.target;
      if (innerWidth >= BreakPoint.contentMax) {
        minColumnWidth = 300;
      } else {
        minColumnWidth = 200;
      }
    }

    if (!containerRef.current) return;

    // 获取容器宽度
    const containerWidth = containerRef.current.offsetWidth;

    // 动态计算列数
    const columnCount = Math.floor(
      containerWidth / (minColumnWidth + gridItemsGap)
    );

    // 动态调整列宽
    const adjustedColumnWidth =
      (containerWidth - (columnCount - 1) * gridItemsGap) / columnCount;

    // 每列累积高度
    const columnHeights = Array(columnCount).fill(0);

    const newPositions: WaterfallItemsPositions[] = [];

    sourceData.waterfall.forEach((item: { height: number; width: number }) => {
      // 找到最短列
      const shortestColumnIndex = columnHeights.indexOf(
        Math.min(...columnHeights)
      );
      // 计算横坐标
      const xCoordinate =
        shortestColumnIndex * (adjustedColumnWidth + gridItemsGap);
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
        (item.height / item.width) * adjustedColumnWidth + gridItemsGap;
    });

    // 找到最长的一列，为父容器设置高度
    setMasonryContainerHeight(_.max(columnHeights));

    setPositions(newPositions);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // 在完全距离底部之前150px触发事件
    if (scrollTop + clientHeight >= scrollHeight - 150) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  const scrollListener = useCallback(() => {
    handleScroll();
  }, []);

  useEffect(() => {
    const { carousels } = sourceData;
    if (carousels && carousels.length) {
      setNeedSwiper(true);
    }

    calculateLayout();

    window.addEventListener('resize', calculateLayout);
    return () => window.removeEventListener('resize', calculateLayout);
  }, [sourceData]);

  useEffect(() => {
    if (positions.length && positions.length >= 2) {
      // 设置轮播图占位宽高
      setCarouselPlaceholderSize({
        width: positions[0].width + positions[1].xCoordinate,
        height: positions[0].height,
      });
    }
  }, [positions]);

  useEffect(() => {
    if (isBottom) {
      nextPage();
    }
  }, [isBottom]);

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

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
        {needSwiper && (
          <SwiperComponent
            loop={false}
            navigation={true}
            autoplay={{
              delay: 2000,
            }}
            modules={[Navigation, EffectFade, Autoplay]}
            data={sourceData.carousels}
          />
        )}
      </div>
      {positions.map((pos, index) => (
        <div
          key={index}
          className="absolute overflow-hidden rounded-2xl cursor-pointer"
          style={{
            top: pos.yCoordinate,
            left: pos.xCoordinate,
            width: pos.width,
            height: pos.height,
            opacity: !needSwiper ? 1 : index === 0 || index === 1 ? 0 : 1,
          }}
        >
          {sourceData.waterfall[index].imageUrl && (
            <Image
              preview={false}
              src={sourceData.waterfall[index].imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default WaterfallLayout;
