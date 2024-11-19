'use client';
import { Input, Col, Row } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import Image from 'next/image';

import {
  ButtonStyled,
  IconContainer,
  FunctionOptionContainer,
} from '@/styles/homePage.style';
import { Images } from '@/theme/images';
import {
  HomeFunctionOptionHigh,
  HomeFunctionOptionLow,
} from '@/constants/constants';

const Home = () => {
  return (
    <StyleProvider layer>
      <div className="p-[40px]">
        <Row>
          <Col span={10}>
            <div className="flex items-center">
              <div className="text-base text-navigationText p-[10px] cursor-pointer">
                社区
              </div>
              <ButtonStyled className="bg-homeTabActive">创建设计</ButtonStyled>
            </div>
          </Col>
          <Col span={14}>
            <div className="flex justify-end">
              <div className="w-[60%] max-w-[400px]">
                <Input
                  className="h-[48px] bg-navigationHover border-0 rounded-2xl px-[24px]"
                  placeholder="搜索"
                  suffix={<Image src={Images.SearchIcon} alt="" />}
                />
              </div>
              <IconContainer className="bg-navigationHover">
                <Image src={Images.GiftIcon} alt="" />
              </IconContainer>
              <IconContainer className="bg-navigationHover">
                <Image src={Images.MessageIcon} alt="" />
              </IconContainer>
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
      </div>
    </StyleProvider>
  );
};

export default Home;
