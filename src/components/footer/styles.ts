import styled from '@emotion/styled';
import { down } from 'styled-breakpoints';

export const FooterWrapper = styled.footer`
  padding: 0 32rem;

  ${down('lg')} {
    padding: 0 16rem;
  }

  ${down('md')} {
    padding: 0 8rem;
  }
`;

export const FooterInner = styled.div`
  border-top: 1px solid var(--footer-border-top-color);
  padding-top: 32rem;
  text-align: center;

  ${down('lg')} {
    padding-top: 16rem;
  }
  ${down('md')} {
    padding-top: 8rem;
  }
`;
