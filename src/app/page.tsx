'use client';
import { useState, useEffect } from 'react';
import { Input, Col, Row, Tabs } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import Image from 'next/image';

import {
  ButtonStyled,
  IconContainer,
  FunctionOptionContainer,
  TabsContainer,
} from '@/styles/homePage.style';
import { Images } from '@/theme/images';
import {
  HomeFunctionOptionHigh,
  HomeFunctionOptionLow,
  HomePageTabs,
} from '@/constants/constants';
import SliderComponent from '@/app/_components/sliderComponent';
import Waterfall from '@/app/_components/waterfall';
import { MyAssetsTestData, TutorialTestData } from '@/constants/constants';
import { SliderType, HomePageTabsKey } from '@/types/global';
import { handleSetTheme } from '@/utils/func';

const Home = () => {
  const [tabKey, setTabKey] = useState<string>(HomePageTabsKey.recommended);

  useEffect(() => {
    // setIsClient(true);
  }, []);

  return (
    <StyleProvider layer>
      <div className="lg:p-[40px] px-[10px] py-[40px]">
        <Row>
          <Col span={6}>
            <div className="flex items-center">
              <div className="text-base text-themeNavigationColor p-[10px] cursor-pointer">
                社区
              </div>
            </div>
          </Col>
          <Col span={18}>
            <div className="flex justify-end">
              <div className="w-[60%] max-w-[400px]">
                <Input
                  className="h-[48px] bg-themeContainerBg border-0 rounded-2xl px-[24px] shadow-none text-themeWhite"
                  placeholder="搜索"
                  suffix={<Image src={Images.SearchIcon} alt="" />}
                />
              </div>
              <IconContainer className="bg-themeContainerBg">
                <Image src={Images.GiftIcon} alt="" />
              </IconContainer>
              <IconContainer className="bg-themeContainerBg">
                <Image src={Images.MessageIcon} alt="" />
              </IconContainer>
              <ButtonStyled
                className="bg-homeTabActive"
                onClick={() => handleSetTheme(false)}
              >
                创建设计
              </ButtonStyled>
            </div>
          </Col>
        </Row>
        <Row className="mt-[32px]" gutter={[16, 16]}>
          {HomeFunctionOptionHigh.map((item, index) => (
            <Col key={index} span={6}>
              <FunctionOptionContainer $isHigh>{item}</FunctionOptionContainer>
            </Col>
          ))}
        </Row>
        <Row className="mt-[24px]" gutter={[16, 16]}>
          {HomeFunctionOptionLow.map((item, index) => (
            <Col key={index} span={4}>
              <FunctionOptionContainer $isHigh={false}>
                {item}
              </FunctionOptionContainer>
            </Col>
          ))}
        </Row>
        <div className="mt-[24px]">
          <SliderComponent
            type={SliderType.imageOnly}
            icon={Images.MenuAssistantsIcon.src}
            title="我的资产"
            data={MyAssetsTestData}
            moreFunction={() => {}}
          />
        </div>
        <div className="mt-[24px]">
          <SliderComponent
            type={SliderType.imageCard}
            icon={Images.BookIcon.src}
            title="新手入门"
            data={TutorialTestData}
            moreFunction={() => {}}
          />
        </div>
        <div className="mt-[24px]">
          <TabsContainer>
            <Tabs
              defaultActiveKey={tabKey}
              items={HomePageTabs}
              onChange={(key) => setTabKey(key)}
            />
          </TabsContainer>
          {(tabKey === HomePageTabsKey.recommended ||
            tabKey === HomePageTabsKey.daily ||
            tabKey === HomePageTabsKey.hot) && <Waterfall />}
        </div>
      </div>
    </StyleProvider>
  );
};

export default Home;
