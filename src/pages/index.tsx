import { NextSeo } from 'next-seo';
import { Intro } from '@/containers';

function HomePage(): JSX.Element {
  return (
    <>
      <NextSeo title="비트코인 테스트 - 메인" description="비트코인 테스트 페이지 입니다." />
      <Intro />
    </>
  );
}

export default HomePage;
