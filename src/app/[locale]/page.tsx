'use client';
import { useState, useEffect } from 'react';
import { Input, Col, Row, Tabs } from 'antd';
import Image from 'next/image';
import _ from 'lodash';
import { useTranslations } from 'next-intl';

import {
  ButtonStyled,
  FunctionOptionContainer,
  TabsContainer,
} from '@/styles/homePage.style';
import { Images } from '@/theme/images';
import {
  HomeFunctionOptionHigh,
  HomeFunctionOptionLow,
  CarouselPlaceholder,
} from '@/constants/constants';
import SliderComponent from '@/app/_components/sliderComponent';
import WaterfallLayout from '@/app/_components/waterfallLayout';
import SVGRender from '@/app/_components/svgRender';
import { MyAssetsTestData, TutorialTestData } from '@/constants/constants';
import { SliderType, HomePageTabsKey, SVGName } from '@/types/global';
import { handleSetTheme } from '@/utils/func';
import useHomePageStore from '@/store/homePage.store';

const Home = () => {
  const t = useTranslations();

  const { fetchData, recommendedData, waterfullListTotal } = useHomePageStore();

  const [tabKey, setTabKey] = useState<string>(HomePageTabsKey.recommended);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [comboRecommendedData, setComboRecommendedData] = useState<any>({
    waterfall: [],
    carousels: [],
  });

  const getData = async () => {
    const payload = {
      pageNumber: pageNumber,
      pageSize: 20,
    };

    fetchData('/api/recommendedList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  };

  useEffect(() => {
    const { carouselList } = recommendedData;
    let placeholderCount = carouselList && carouselList.length ? 2 : 0;
    if (
      waterfullListTotal !== null &&
      comboRecommendedData.waterfall.length ===
        waterfullListTotal + placeholderCount
    ) {
      return;
    }
    getData();
  }, [pageNumber]);

  useEffect(() => {
    if (!_.isEmpty(recommendedData)) {
      let waterfallList = comboRecommendedData.waterfall;
      const { recommendedList, carouselList } = recommendedData;
      // 如果存在轮播图的话添加占位符
      if (carouselList && carouselList.length) {
        waterfallList = _.union(
          CarouselPlaceholder,
          comboRecommendedData.waterfall
        );
      }
      setComboRecommendedData({
        waterfall: [...waterfallList, ...recommendedList],
        carousels: carouselList,
      });
    }
  }, [recommendedData]);

  return (
    <div className="lg:p-[40px] px-[10px] py-[40px]">
      <Row>
        <Col span={6}>
          <div className="flex items-center">
            <div className="text-base text-themeNavigationColor p-[10px] cursor-pointer">
              {t('community')}
            </div>
          </div>
        </Col>
        <Col span={18}>
          <div className="flex justify-end">
            <div className="w-[60%] max-w-[400px]">
              <Input
                className="h-[48px] bg-themeContainerBg border-0 rounded-2xl px-[24px] shadow-none text-themeWhite"
                placeholder={t('search')}
                suffix={<Image src={Images.SearchIcon} alt="" />}
              />
            </div>
            <ButtonStyled className="bg-homeTabActive" onClick={handleSetTheme}>
              {t('createDesign')}
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
                    componentName={item.icon}
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
                    <img src={item.banner.src} alt="" className="rounded-2xl" />
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
            <FunctionOptionContainer $isHigh={false} title={item.name}>
              <Row className="h-full">
                <Col span={18}>
                  <div className="flex h-full items-center pl-4">
                    <SVGRender
                      componentName={item.icon}
                      classProps="text-themeHomeFunctionColor mr-2"
                    />
                    <div className="text-themeHomeFunctionColor text-sm truncate">
                      {item.name}
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <SVGRender
                    componentName={SVGName.ToRight}
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
          icon={SVGName.Assistants}
          title={t('myAssets')}
          data={MyAssetsTestData}
          moreFunction={() => {}}
        />
      </div>
      <div className="mt-[24px]">
        <SliderComponent
          type={SliderType.imageCard}
          icon={SVGName.Book}
          title={t('gettingStarted')}
          data={TutorialTestData}
          moreFunction={() => {}}
        />
      </div>
      <div className="mt-[24px]">
        <TabsContainer>
          <Tabs
            defaultActiveKey={tabKey}
            items={[
              {
                key: HomePageTabsKey.recommended,
                label: <span>{t('recommended')}</span>,
              },
              {
                key: HomePageTabsKey.hot,
                label: <span>{t('popular')}</span>,
              },
              {
                key: HomePageTabsKey.daily,
                label: <span>{t('dailySelections')}</span>,
              },
              {
                key: HomePageTabsKey.favorite,
                label: <span>{t('like')}</span>,
              },
              {
                key: HomePageTabsKey.collection,
                label: <span>{t('favorites')}</span>,
              },
            ]}
            onChange={(key) => setTabKey(key)}
          />
        </TabsContainer>
        {(tabKey === HomePageTabsKey.recommended ||
          tabKey === HomePageTabsKey.daily ||
          tabKey === HomePageTabsKey.hot) && (
          <WaterfallLayout
            sourceData={comboRecommendedData}
            nextPage={() => setPageNumber(pageNumber + 1)}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
