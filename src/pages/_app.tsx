import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import PageLoading from 'src/components/pageLoading';
import 'src/styles/pageLoading.css';
import 'src/styles/header.css';
import 'src/styles/footer.css';
import 'src/styles/bitcoinChart.css';
import 'src/styles/index.css';

// 1. 내부 인터페이스 및 초기화 설정
interface IMyAppStates {
  isRouteChanging: boolean;
  loadingKey: number;
}

const initMyAppStates: IMyAppStates = {
  isRouteChanging: false,
  loadingKey: 0,
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // 3.1. 내부 변수
  const router = useRouter();
  const [state, setState] = useState<IMyAppStates>(initMyAppStates);

  // 3.2. 내부 함수
  const handleRouteChangeStart = (): void => {
    setState((prevState) => ({
      ...prevState,
      isRouteChanging: true,
      loadingKey: prevState.loadingKey + 1,
    }));
  };

  const handleRouteChangeEnd = (): void => {
    setState((prevState) => ({
      ...prevState,
      isRouteChanging: false,
    }));
  };

  // 3.4. 내부 효과 함수
  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);
    router.events.on('routeChangeError', handleRouteChangeEnd);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
      router.events.off('routeChangeError', handleRouteChangeEnd);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="X-UA-Compatible" content="chrome=1" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Bungee" rel="stylesheet" />
        <title>비트코인 사이트 테스트</title>
        <meta name="description" content="테스트 용도로 사용하기 위한 사이트 입니다." />
      </Head>
      <PageLoading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
