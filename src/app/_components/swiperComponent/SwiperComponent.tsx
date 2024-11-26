import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AutoplayOptions, SwiperModule } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const SwiperComponent = ({
  loop,
  navigation,
  autoplay,
  modules,
  data,
}: {
  loop: boolean;
  navigation: boolean;
  autoplay: AutoplayOptions | boolean;
  modules: SwiperModule[];
  data: any[];
}) => (
  <Swiper
    loop={loop}
    navigation={navigation}
    autoplay={false}
    modules={modules}
    className="h-full rounded-2xl"
  >
    {data.map((item) => (
      <SwiperSlide key={item.id}>
        <img src={item.imageUrl} alt="" className="rounded-2xl h-full" />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SwiperComponent;
