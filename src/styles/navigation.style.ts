import styled from 'styled-components';

import { Colors } from '@/theme/colors';

const Container = styled.div`
  width: 240px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media(max-width: 1024px) {
    width: 140px;
  }
`;

const OptionContainer = styled.div`
  &:hover {
    background: ${Colors.navigationHover};
    border-radius: 16px;
  }
`;

const OptionTag = styled.div`
  border-radius: 8px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container, OptionContainer, OptionTag };
