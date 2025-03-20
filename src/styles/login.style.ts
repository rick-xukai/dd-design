import styled from 'styled-components';

import { Images } from '@/theme/images';

const LoginContainer = styled.div`
  background-image: url(${Images.AnimatedBackground.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .formContent {
    border-radius: 16px;
    border: 1px solid #27272a;
    background: rgba(39, 39, 42, 0.3);
    backdrop-filter: blur(10px);
  }
`;

export { LoginContainer };
