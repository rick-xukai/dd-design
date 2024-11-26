import styled from 'styled-components';

import { MainContainerWidth } from '@/constants/constants';

const Container = styled.div`
  width: ${MainContainerWidth.default};
  &::-webkit-scrollbar {
    display: none;
  }
  .svg-logo {
    svg {
      width: 100%;
      stroke: initial;
      fill: currentColor;
    }
  }
  .ant-avatar {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 1024px) {
    width: ${MainContainerWidth.lg};
  }
`;

const OptionContainer = styled.div`
  &.active {
    background: var(--theme-container-bg);
    border-radius: 16px;
  }
  &:hover {
    background: var(--theme-container-bg);
    border-radius: 16px;
  }
`;

const OptionTag = styled.div`
  padding: 4px 8px;
  border-radius: 8px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container, OptionContainer, OptionTag };
