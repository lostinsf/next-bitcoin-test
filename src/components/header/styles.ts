import styled from '@emotion/styled';
import { down } from 'styled-breakpoints';
import { lightTheme } from '@/styles/theme';

export const HeaderWrapper = styled.header`
  margin-bottom: 10px;
  text-align: center;

  a {
    color: ${lightTheme.colors.pink300};
    text-decoration: none;

    &:hover {
      border-bottom: 2px solid ${lightTheme.colors.black100};
      text-decoration: none;
    }
  }
`;

export const HeaderTitle = styled.span`
  font-family: ${lightTheme.fonts.bungee};
  font-size: 60px;

  ${down('lg')} {
    font-size: 30px;
  }
`;
export const HeaderSubTitle = styled.span`
  font-family: ${lightTheme.fonts.bungee};
  font-size: 20px;

  ${down('lg')} {
    font-size: 16px;
  }
`;
