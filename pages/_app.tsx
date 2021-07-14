import React, { Component } from 'react';
import Head from 'next/head';
import _ from 'lodash';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import moment from 'moment';
import Header from './components/Header';
import currencies from './supported-currencies.json';
import './index.css';
import './App.css';

console.log(currencies);

interface MyState {
  historicalData: string | null;
  currency: string;
  baseUrl: string;
}

class App extends Component {
  constructor(props) {
    super(props);

    // chart.js defaults
    Chart.defaults.global.defaultFontColor = '#000';
    Chart.defaults.global.defaultFontSize = 16;

    this.state = {
      historicalData: null,
      currency: 'PHP',
      baseUrl: 'https://api.coindesk.com/',
    };

    this.onCurrencySelect = this.onCurrencySelect.bind(this);
  }

  componentDidMount() {
    this.getBitcoinData();
  }

  getBitcoinData() {
    const { baseUrl, currency } = this.state;

    fetch(`${baseUrl}v1/bpi/historical/close.json?currency=${currency}`)
      .then((response) => response.json())
      .then((historicalData) => this.setState({ historicalData }))
      .catch((e) => e);
  }

  formatChartData() {
    const { bpi }: any = this.state.historicalData;

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
  }

  setCurrency(currency) {
    this.setState({ currency }, this.getBitcoinData);
  }

  onCurrencySelect(e) {
    this.setCurrency(e.target.value);
  }

  render() {
    if (this.state.historicalData) {
      return (
        <div>
          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="theme-color" content="#000000" />
            <meta httpEquiv="X-UA-Compatible" content="chrome=1" />

            <link rel="manifest" href="/manifest.json" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Bungee" rel="stylesheet" />

            <title>비트코인 사이트 테스트</title>
            <meta name="keywords" content="bitcoin" />
            <meta name="description" content="테스트 용도로 사용하기 위한 사이트 입니다." />
          </Head>
          <div className="app">
            <Header title="BITCOIN PRICE INDEX" />

            <div className="select-container">
              <span style={{ fontSize: 18, fontFamily: 'Bungee' }}> Select your currency: </span>
              <select value={this.state.currency} onChange={this.onCurrencySelect}>
                {currencies.map((obj, index) => (
                  <option key={`${index}-${obj.country}`} value={obj.currency}>
                    {' '}
                    {obj.country}{' '}
                  </option>
                ))}
              </select>
              {this.state.currency !== 'PHP' && (
                <div>
                  <a
                    href="#"
                    className="link"
                    onClick={() => this.setCurrency('PHP')}
                    style={{ color: 'black', fontSize: 16, fontFamily: 'Bungee' }}
                  >
                    {' '}
                    [CLICK HERE TO RESET]{' '}
                  </a>
                </div>
              )}
            </div>

            <div style={{ marginTop: 10 }}>
              <Line data={this.formatChartData()} height={250} />
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default App;
