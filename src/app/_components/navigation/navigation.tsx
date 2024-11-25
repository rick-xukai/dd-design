'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Avatar, Badge } from 'antd';
import _ from 'lodash';
import { useWindowSize } from 'react-use';

import {
  Container,
  OptionContainer,
  OptionTag,
} from '@/styles/navigation.style';
import { BreakPoint, SVGName } from '@/types/global';
import { Images } from '@/theme/images';
import { NavigationOptions } from '@/constants/constants';
import SVGRender from '@/app/_components/svgRender';

const Navigation = () => {
  const router = useRouter();
  const { width } = useWindowSize();

  return (
    <Container className="fixed top-0 left-0 h-screen px-[16px] py-[40px] overflow-auto bg-background z-[999]">
      <div className="flex flex-col h-full">
        <div
          onClick={() => router.push('/')}
          className="lg:px-[16px] cursor-pointer text-themePrimary flex items-center lg:justify-normal justify-center"
        >
          <SVGRender
            componentName={
              width > BreakPoint.lg ? SVGName.NameLogo : SVGName.Logo
            }
            classProps="lg:w-[128px] w-[48px] h-[48px] svg-logo"
          />
        </div>

        {NavigationOptions.map((item, index) => (
          <div key={index} className="pt-[40px]">
            {item.label && width > BreakPoint.lg && (
              <div className="text-themeContainerColor text-xs mb-2 px-[16px]">
                {item.label}
              </div>
            )}
            {item.options.map((option) => (
              <OptionContainer
                key={option.link}
                className="flex h-[48px] items-center mb-2 cursor-pointer px-[16px]"
                onClick={() => router.push(option.link)}
              >
                <SVGRender
                  componentName={option.icon}
                  classProps="text-themePrimary"
                />
                {width > BreakPoint.lg && (
                  <>
                    <div className="text-themePrimary text-base ml-4">
                      {option.name}
                    </div>
                    {option.name === '我的资产' && (
                      <OptionTag className="text-navigationTagText1 w-[24px] h-[24px] bg-navigationTag1 text-xs">
                        6
                      </OptionTag>
                    )}
                    {option.name === '视频生成' && (
                      <OptionTag className="bg-navigationTagText1 text-navigationTagText2 w-[40px] h-[24px] text-xs">
                        最新
                      </OptionTag>
                    )}
                  </>
                )}
              </OptionContainer>
            ))}
          </div>
        ))}
        <div className="mt-auto pb-6 pt-[50px] avatar-container">
          <div>
            <OptionContainer className="flex h-[48px] items-center mb-2 cursor-pointer px-[16px]">
              <SVGRender
                componentName={SVGName.Download}
                classProps="text-themePrimary"
              />
              {width > BreakPoint.lg && (
                <div className="text-themePrimary text-base ml-4">下载</div>
              )}
            </OptionContainer>
            <OptionContainer className="flex h-[48px] items-center mb-2 cursor-pointer px-[16px]">
              <SVGRender
                componentName={SVGName.Gift}
                classProps="text-themePrimary"
              />
              {width > BreakPoint.lg && (
                <div className="text-themePrimary text-base ml-4">任务</div>
              )}
            </OptionContainer>
            <OptionContainer className="flex h-[48px] items-center mb-2 cursor-pointer px-[16px]">
              <Badge count={10} overflowCount={999}>
                <SVGRender
                  componentName={SVGName.Message}
                  classProps="text-themePrimary"
                />
              </Badge>
              {width > BreakPoint.lg && (
                <div className="text-themePrimary text-base ml-4">消息</div>
              )}
            </OptionContainer>
          </div>
          <div className="mt-[24px]">
            <Avatar icon={<img src={Images.TestImages6.src} />} />
            {width > BreakPoint.lg && (
              <span className="ml-[10px] text-base text-themePrimary">
                User name
              </span>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navigation;
