import styled from '@emotion/styled';
import { down } from 'styled-breakpoints';
import { lightTheme } from '@/styles/theme';

export const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainLayoutTop = styled.div`
  flex: 1;
`;

export const MainLayoutContainer = styled.div`
  background-color: ${lightTheme.colors.gray100};
  flex: 8;
`;

export const MainLayoutBottom = styled.div`
  flex: 1;
`;
