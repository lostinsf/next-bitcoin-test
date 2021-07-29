import styled from '@emotion/styled';

export const BitcoinChartWrapper = styled.div`
  margin: 0 auto;
  max-width: 720px;
  text-align: center;
`;

export const SelectContainer = styled.div`
  span {
    font-family: 'Bungee', cursive;
    font-size: 18px;
  }
  select {
    -webkit-appearance: none;
    background: transparent;
    background-image: none;
    border: unset;
    box-shadow: none;
    color: #ff1769;
    cursor: pointer;
    font-family: 'Bungee', cursive;
    font-size: 18px;
    max-width: 210px;
    padding: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;

    :focus {
      outline: none;
    }
  }
  a {
    color: 'black';
    font-family: 'Bungee', cursive;
    font-size: 16px;
  }
`;

export const LineData = styled.div`
  margin-top: 10px;
`;
