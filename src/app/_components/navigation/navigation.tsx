'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import {
  Container,
  OptionContainer,
  OptionTag,
} from '@/styles/navigation.style';
import { BreakPoint } from '@/types/global';
import { Images } from '@/theme/images';
import { NavigationOptions } from '@/constants/constants';

const Navigation = () => {
  const router = useRouter();

  const [windoWidthwSize, setWindowWidthSize] = useState<number>(BreakPoint.lg);

  useEffect(() => {
    if (window) {
      setWindowWidthSize(window.innerWidth);
    }
    const handleResize = (event: any) => {
      const { target } = event;
      setWindowWidthSize(target.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container className="sticky top-0 left-0 h-screen px-[16px] py-[40px] overflow-auto">
      <div>
        <div className="px-[16px]">
          <img
            className="lg:w-[128px] w-[48px] h-[48px]"
            src={
              windoWidthwSize >= BreakPoint.lg
                ? Images.NameLogo.src
                : Images.Logo.src
            }
            alt=""
          />
        </div>
        {NavigationOptions.map((item, index) => (
          <div key={index} className="pt-[40px]">
            {item.label && (
              <div className="text-navigationLabel text-xs mb-2 px-[16px]">
                {item.label}
              </div>
            )}
            {item.options.map((option) => (
              <OptionContainer
                key={option.link}
                className="flex h-[48px] items-center mb-2 cursor-pointer px-[16px]"
                onClick={() => router.push(option.link)}
              >
                <Image src={option.icon} alt="" />
                {windoWidthwSize >= BreakPoint.lg && (
                  <>
                    <div className="text-navigationText text-base ml-4">
                      {option.name}
                    </div>
                    {option.name === '我的资产' && (
                      <OptionTag className="text-navigationTagText1 w-[24px] h-[24px] bg-navigationTag1 text-xs">
                        6
                      </OptionTag>
                    )}
                    {option.name === '视频生成' && (
                      <OptionTag className="bg-navigationTag2 text-navigationTagText2 w-[40px] h-[24px] text-xs">
                        最新
                      </OptionTag>
                    )}
                  </>
                )}
              </OptionContainer>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Navigation;
