import React from 'react';
import IsEqual from 'react-fast-compare';
import { HeaderWrapper, HeaderTitle, HeaderSubTitle } from './styles';

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps): JSX.Element {
  const { title } = props;

  return (
    <HeaderWrapper>
      <div>
        <HeaderTitle> {title} </HeaderTitle>
      </div>
      <div>
        <HeaderSubTitle>
          {' '}
          Powered by{' '}
          <a className="link" target="_blank" href="https://www.coindesk.com/price/" rel="noreferrer">
            CoinDesk
          </a>
          .{' '}
        </HeaderSubTitle>
      </div>
    </HeaderWrapper>
  );
}

export default React.memo(Header, IsEqual);
