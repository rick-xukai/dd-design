import React from 'react';
import { Row, Col } from 'antd';
import { useTranslations } from 'next-intl';

import {
  CheckMoreButton,
  ImageCardContainer,
  SliderContainer,
} from '@/styles/sliderComponent.style';
import { SliderType, SVGName } from '@/types/global';
import SVGRender from '@/app/_components/svgRender';

const SliderComponent = ({
  icon,
  title,
  data,
  type,
  moreFunction,
}: {
  icon: string;
  title: string;
  data: any[];
  type: string;
  moreFunction: () => void;
}) => {
  const t = useTranslations();

  return (
    <div>
      <Row>
        <Col span={12}>
          <div className="flex items-center h-[100%]">
            <SVGRender
              componentName={icon}
              classProps="text-themeNavigationColor"
            />
            <div className="ml-[5px] text-themeHomeLabelColor text-base">
              {title}
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="flex justify-end">
            <CheckMoreButton onClick={moreFunction}>
              <div>{t('more')}</div>
              <SVGRender
                componentName={SVGName.RightArrow}
                classProps="text-themeHomeLabelColor"
              />
            </CheckMoreButton>
          </div>
        </Col>
      </Row>
      {type === SliderType.imageOnly && (
        <SliderContainer>
          {data.map((item) => (
            <ImageCardContainer key={item.id} $type={SliderType.imageOnly}>
              <img src={item.image.src} alt="" className="h-[100%]" />
            </ImageCardContainer>
          ))}
        </SliderContainer>
      )}
      {type === SliderType.imageCard && (
        <SliderContainer>
          {data.map((item) => (
            <ImageCardContainer
              key={item.id}
              $type={SliderType.imageCard}
              className="bg-themeContainerBg max-w-[300px]"
            >
              <img src={item.image.src} alt="" className="h-[169px]" />
              <div>
                <div className="flex px-[24px] pt-[16px] items-center">
                  <div className="text-themePrimary">{item.title}</div>
                  <div className="flex items-center justify-center ml-[8px] w-[45px] h-[20px] rounded-[8px] bg-themeContainerBg text-xs text-themeContainerColor2">
                    {item.duration}
                  </div>
                </div>
                <div className="text-themeContainerColor text-xs px-[24px] py-[8px]">
                  {item.description}
                </div>
              </div>
            </ImageCardContainer>
          ))}
        </SliderContainer>
      )}
    </div>
  );
};

export default SliderComponent;
