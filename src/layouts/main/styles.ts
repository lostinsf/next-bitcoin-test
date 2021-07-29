import styled from '@emotion/styled';
import { down } from 'styled-breakpoints';
import { lightTheme } from '@/styles/theme';

export const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

export const MainLayoutTop = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const MainLayoutContainer = styled.div`
  background-color: ${lightTheme.colors.gray100};
  flex: 8;
  ${down('lg')} {
    flex: 6;
  }
`;

export const MainLayoutBottom = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;
