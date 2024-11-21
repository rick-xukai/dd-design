'use client';
import { useState } from 'react';
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
import SVGRender from '@/app/_components/svgRender';
import { MyAssetsTestData, TutorialTestData } from '@/constants/constants';
import { SliderType, HomePageTabsKey } from '@/types/global';
import { handleSetTheme } from '@/utils/func';

const Home = () => {
  const [tabKey, setTabKey] = useState<string>(HomePageTabsKey.recommended);

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
              {/* <IconContainer className="bg-themeContainerBg">
                <Image src={Images.GiftIcon} alt="" />
              </IconContainer>
              <IconContainer className="bg-themeContainerBg">
                <Image src={Images.MessageIcon} alt="" />
              </IconContainer> */}
              <ButtonStyled
                className="bg-homeTabActive"
                onClick={handleSetTheme}
              >
                创建设计
              </ButtonStyled>
            </div>
          </Col>
        </Row>
        <Row className="mt-[32px]" gutter={[16, 16]}>
          {HomeFunctionOptionHigh.map((item, index) => (
            <Col key={`${item.name}-${index}`} span={6}>
              <FunctionOptionContainer $isHigh>
                <Row>
                  <Col span={12}>
                    <SVGRender
                      src={item.icon.src}
                      classProps="text-themePrimary pt-6 pl-6"
                    />
                    <div className="pt-10 pl-6 pb-6">
                      <div className="mb-4">{item.name}</div>
                      <div className="text-xs text-themeContainerColor">
                        {item.label}
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="flex items-end h-full">
                      <img
                        src={item.banner.src}
                        alt=""
                        className="rounded-2xl"
                      />
                    </div>
                  </Col>
                </Row>
              </FunctionOptionContainer>
            </Col>
          ))}
        </Row>
        <Row className="mt-[24px]" gutter={[16, 16]}>
          {HomeFunctionOptionLow.map((item, index) => (
            <Col key={`${item.name}-${index}`} span={4}>
              <FunctionOptionContainer $isHigh={false}>
                <Row className="h-full">
                  <Col span={18}>
                    <div className="flex h-full items-center pl-4">
                      <SVGRender
                        src={item.icon.src}
                        classProps="text-themeHomeFunctionColor mr-2"
                      />
                      <div className="text-themeHomeFunctionColor text-sm">
                        {item.name}
                      </div>
                    </div>
                  </Col>
                  <Col span={6}>
                    <SVGRender
                      src={Images.ToRightIcon.src}
                      classProps="text-themeHomeFunctionColor flex h-full items-center justify-end pr-2.5"
                    />
                  </Col>
                </Row>
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
