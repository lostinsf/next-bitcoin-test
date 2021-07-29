import React from 'react';
import IsEqual from 'react-fast-compare';
import { BitcoinChart, Footer, Header } from '../../components';

function Intro(): JSX.Element {
  return (
    <>
      <Header title="welcome bitcoin test center" />
      <BitcoinChart />
      <Footer title="welcome bitcoin test center" />
    </>
  );
}

export default React.memo(Intro, IsEqual);
