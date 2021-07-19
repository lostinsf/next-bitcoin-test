import React from 'react';
import IsEqual from 'react-fast-compare';

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps): JSX.Element {
  const { title } = props;

  return (
    <header>
      <div>
        <span className="header"> {title} </span>
      </div>
      <div className="subheader-body">
        <span className="subheader">
          {' '}
          Powered by{' '}
          <a className="link" target="_blank" href="https://www.coindesk.com/price/" rel="noreferrer">
            CoinDesk
          </a>
          .{' '}
        </span>
      </div>
    </header>
  );
}

export default React.memo(Header, IsEqual);
