import styled from '@emotion/styled';
import { down } from 'styled-breakpoints';

export const HeaderWrapper = styled.header`
  margin-bottom: 10px;
  text-align: center;

  a {
    color: #ff1769;
    text-decoration: none;

    &:hover {
      border-bottom: 2px solid #000;
      text-decoration: none;
    }
  }
`;

export const HeaderTitle = styled.span`
  font-family: 'Bungee', cursive;
  font-size: 60px;

  ${down('lg')} {
    font-size: 30px;
  }
`;
export const HeaderSubTitle = styled.span`
  font-family: 'Bungee', cursive;
  font-size: 20px;
`;
