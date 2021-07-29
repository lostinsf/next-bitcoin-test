import React from 'react';
import IsEqual from 'react-fast-compare';
import { BitcoinChart } from '@/components';
import { MainLayout } from '@/layouts';

function Intro(): JSX.Element {
  return (
    <>
      <MainLayout>
        <BitcoinChart />
      </MainLayout>
    </>
  );
}

export default React.memo(Intro, IsEqual);
