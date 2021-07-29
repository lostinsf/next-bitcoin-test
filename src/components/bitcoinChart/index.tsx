import React, { useState, useEffect, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import _ from 'lodash';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import moment from 'moment';
import currencies from 'public/supported-currencies.json';

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

function BitcoinChart(): JSX.Element {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [object, setObject] = useState<IMyAppObjects>(initMyAppObjects);
  const [currency, setCurrency] = useState<string>('KRW');

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
      setCurrency(currency);
    },
    [object.baseUrl],
  );

  const onCurrencySelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    getBitcoinData(e.target.value);
  }, []);

  useEffect(() => {
    getBitcoinData(currency);
  }, []);

  return (
    <div className="bitcoinChart">
      {isLoading ? (
        <div>Search Loading ...</div>
      ) : (
        <>
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
            {currency !== 'KRW' && (
              <div>
                <a href="#" className="link" onClick={() => getBitcoinData('KRW')}>
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
  );
}

export default React.memo(BitcoinChart, isEqual);
