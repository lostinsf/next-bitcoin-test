import styled from '@emotion/styled';
import { lightTheme } from '@/styles/theme';
import { down } from 'styled-breakpoints';

export const BitcoinChartWrapper = styled.div`
  margin: 0 auto;
  max-width: 720px;
  text-align: center;
`;

export const SelectContainer = styled.div`
  span {
    font-family: ${lightTheme.fonts.bungee};
    font-size: 18px;

    ${down('md')} {
      font-size: 14px;
    }
  }
  select {
    -webkit-appearance: none;
    background: transparent;
    background-image: none;
    border: unset;
    box-shadow: none;
    color: ${lightTheme.colors.pink300};
    cursor: pointer;
    font-family: ${lightTheme.fonts.bungee};
    font-size: 18px;
    max-width: 230px;
    padding: 10px;
    text-align-last: center;
    text-overflow: ellipsis;
    white-space: nowrap;

    :focus {
      outline: none;
    }

    ${down('md')} {
      font-size: 14px;
    }
  }
  a {
    color: ${lightTheme.colors.black100};
    font-family: ${lightTheme.fonts.bungee};
    font-size: 16px;
  }
`;

export const LineData = styled.div`
  margin-top: 10px;
`;
