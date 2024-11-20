import styled from 'styled-components';

import { Colors } from '@/theme/colors';

const ButtonStyled = styled.div`
  font-size: 16px;
  width: 226px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  cursor: pointer;
  border-radius: 16px;
  color: #fff;
`;

const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: ${Colors.hoverOrange};
  }
`;

const FunctionOptionContainer = styled.div<{ $isHigh: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.$isHigh ? '168px' : '52px')};
  background: var(--theme-container-bg);
  border-radius: 16px;
  font-size: ${(props) => (props.$isHigh ? '24px' : '14px')};
  color: var(--theme-primary);
  cursor: pointer;
`;

const TabsContainer = styled.div`
  .ant-tabs {
    .ant-tabs-tab-active {
      .ant-tabs-tab-btn {
        color: var(--theme-primary);
      }
    }
    .ant-tabs-tab-btn {
      color: var(--theme-container-color);
      font-size: 16px;
    }
    .ant-tabs-nav {
      margin: 0;
    }
    .ant-tabs-ink-bar {
      width: 18px !important;
      bottom: 8px;
      background: var(--theme-primary);
      border: none;
    }
  }
`;

export { ButtonStyled, IconContainer, FunctionOptionContainer, TabsContainer };
