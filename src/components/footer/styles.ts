import styled from '@emotion/styled';
import { down } from 'styled-breakpoints';
import { lightTheme } from '@/styles/theme';

export const FooterWrapper = styled.footer`
  color: ${lightTheme.colors.black500};
  font-size: 20px;
  position: relative;

  ${down('lg')} {
    font-size: 16px;
  }

  ${down('md')} {
    font-size: 12px;
  }
`;

export const FooterInner = styled.div`
  text-align: center;
`;
