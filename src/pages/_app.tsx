import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import _ from 'lodash';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import moment from 'moment';
import currencies from 'public/supported-currencies.json';
import Header from 'src/components/header';
import 'styles/header.css';
import 'styles/index.css';

// 1. 내부 인터페이스 및 초기화 설정
interface IMyAppObjects {
  historicalData: any;
  baseUrl: string;
}

const initMyAppObjects: IMyAppObjects = {
  historicalData: null,
  baseUrl: 'https://api.coindesk.com/',
};

// 2. 글로벌 초기값 설정
Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.defaultFontSize = 16;

// 3. 글로벌 헤더 설정
function MyApp(): JSX.Element {
  // 3.1. 내부 변수
  const [isLoading, setLoading] = useState<boolean>(false);
  const [object, setObject] = useState<IMyAppObjects>(initMyAppObjects);
  const [currency, setCurrency] = useState<string>('PHP');

  // 3.2. 내부 함수
  const formatChartData = (): any => {
    if (!object.historicalData) {
      return {};
    }

    const { bpi }: any = object.historicalData;
    return {
      labels: _.map(_.keys(bpi), (date) => moment(date).format('ll')),
      datasets: [
        {
          label: 'Bitcoin',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: _.values(bpi),
        },
      ],
    };
  };

  // 3.3. 내부 콜백 함수
  const getBitcoinData = useCallback(
    (currency): void => {
      setLoading(true);
      fetch(`${object.baseUrl}v1/bpi/historical/close.json?currency=${currency}`)
        .then((response) => response.json())
        .then((response) => {
          setObject({ ...object, historicalData: response });
        })
        .catch((e) => e)
        .finally(() => setLoading(false));
    },
    [object.baseUrl],
  );

  const onCurrencySelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    getBitcoinData(e.target.value);
    setCurrency(e.target.value);
  }, []);

  // 3.4. 내부 효과 함수

  useEffect(() => {
    getBitcoinData(currency);
  }, []);

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
      <div className="app">
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <>
            <Header title="BITCOIN PRICE INDEX" />

            <div className="select-container">
              <span> Select your currency: </span>
              <select value={currency} onChange={onCurrencySelect}>
                {currencies.map((obj) => (
                  <option key={obj.currency} value={obj.currency}>
                    {' '}
                    {obj.country}{' '}
                  </option>
                ))}
              </select>
              {currency !== 'PHP' && (
                <div>
                  <a href="#" className="link" onClick={() => setCurrency('PHP')}>
                    {' '}
                    [CLICK HERE TO RESET]{' '}
                  </a>
                </div>
              )}
            </div>

            <div className="lineData">
              <Line data={formatChartData()} height={250} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MyApp;
