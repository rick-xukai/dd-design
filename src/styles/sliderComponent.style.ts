import styled from 'styled-components';

import { SliderType } from '@/types/global';

const CheckMoreButton = styled.div`
  width: 80px;
  height: 35px;
  background: var(--theme-container-bg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  font-size: 14px;
  color: var(--theme-home-label-color);
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
`;

const SliderContainer = styled.div`
  margin-top: 10px;
  display: flex;
  overflow: auto;
  border-radius: 16px;
  &::-webkit-scrollbar {
    display: none;
  }
  > :last-child {
    margin-right: 0px;
  }
`;

const ImageCardContainer = styled.div<{ $type: string }>`
  height: ${(props) =>
    props.$type === SliderType.imageOnly ? '240px' : '270px'};
  border-radius: 16px;
  flex-shrink: 0;
  margin-right: 16px;
  cursor: pointer;
`;

const CardContainer = styled.div`
  border-radius: 16px;
  height: 270px;
  margin-right: 16px;
  cursor: pointer;
`;

export { CheckMoreButton, ImageCardContainer, SliderContainer, CardContainer };
