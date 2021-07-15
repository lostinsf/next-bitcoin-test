import React, { Component, useEffect, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import _ from 'lodash';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import moment from 'moment';
import currencies from 'public/supported-currencies.json';
import Header from 'src/components/header';
import 'styles/index.css';
import 'styles/App.css';

interface AppState {
  historicalData: any;
  currency: string;
  baseUrl: string;
}

const initAppStates: AppState = {
  historicalData: null,
  currency: 'PHP',
  baseUrl: 'https://api.coindesk.com/',
};

function MyApp(): JSX.Element {
  const [state, setState] = useState<AppState>(initAppStates);

  useEffect(() => {
    const getBitcoinData = (): void => {
      fetch(`${state.baseUrl}v1/bpi/historical/close.json?currency=${state.currency}`)
        .then((response) => response.json())
        .then((response) => {
          setState({ ...state, historicalData: response });
        })
        .catch((e) => e);
    };

    getBitcoinData();
  }, []);

  // chart.js defaults
  Chart.defaults.global.defaultFontColor = '#000';
  Chart.defaults.global.defaultFontSize = 16;

  const formatChartData = (): any => {
    if (!state.historicalData) {
      return {};
    }

    const { bpi }: any = state.historicalData;
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

  // const setCurrency = (currency: string): void => {
  //   setState((state) => ({ ...state, currency }));
  // };

  // const onCurrencySelect = (e): void => {
  //   setCurrency(e.target.value);
  // };

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
        <Header title="BITCOIN PRICE INDEX" />

        <div className="select-container">
          <span style={{ fontSize: 18, fontFamily: 'Bungee' }}> Select your currency: </span>
          {/* <select value={state.currency} onChange={onCurrencySelect()}>
            {currencies.map((obj, index) => (
              <option key={`${index}-${obj.country}`} value={obj.currency}>
                {' '}
                {obj.country}{' '}
              </option>
            ))}
          </select>
          {state.currency !== 'PHP' && (
            <div>
              <a
                href="#"
                className="link"
                onClick={() => setCurrency('PHP')}
                style={{ color: 'black', fontSize: 16, fontFamily: 'Bungee' }}>
                {' '}
                [CLICK HERE TO RESET]{' '}
              </a>
            </div>
          )} */}
        </div>

        <div style={{ marginTop: 10 }}>
          <Line data={formatChartData()} height={250} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
