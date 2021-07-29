import styled from '@emotion/styled';
import { down } from 'styled-breakpoints';
import { lightTheme } from '@/styles/theme';

export const FooterWrapper = styled.footer`
  color: ${lightTheme.colors.black500};
  font-size: 20px;
  height: 100%;
  position: relative;
  width: 100%;

  ${down('lg')} {
    font-size: 16px;
  }

  ${down('md')} {
    font-size: 12px;
  }
`;

export const FooterInner = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;
