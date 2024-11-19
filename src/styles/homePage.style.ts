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
`;

const FunctionOptionContainer = styled.div<{ $isHigh: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.$isHigh ? '168px' : '52px')};
  background: ${Colors.navigationHover};
  border-radius: 16px;
  font-size: ${(props) => (props.$isHigh ? '24px' : '14px')};
  color: ${Colors.white};
  cursor: pointer;
`;

export { ButtonStyled, IconContainer, FunctionOptionContainer };
