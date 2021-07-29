import React from 'react';
import IsEqual from 'react-fast-compare';
import { Header, Footer } from '@/components';
import { MainLayoutWrapper, MainLayoutTop, MainLayoutContainer, MainLayoutBottom } from './styles';

interface IMainLayoutProps {
  children: React.ReactNode;
}
function MainLayout(props: IMainLayoutProps): JSX.Element {
  const { children } = props;

  return (
    <MainLayoutWrapper>
      <MainLayoutTop>
        <Header title="bitcoin test center" />
      </MainLayoutTop>
      <MainLayoutContainer>{children}</MainLayoutContainer>
      <MainLayoutBottom>
        <Footer title="welcome to test center" />
      </MainLayoutBottom>
    </MainLayoutWrapper>
  );
}

export default React.memo(MainLayout, IsEqual);
