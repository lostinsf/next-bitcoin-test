exports.id = "pages__app_js";
exports.ids = ["pages__app_js"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "./pages/components/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _supported_currencies_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./supported-currencies.json */ "./pages/supported-currencies.json");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App.css */ "./pages/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Administrator\\github\\bitcoin-price-index\\pages\\_app.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









console.log(_supported_currencies_json__WEBPACK_IMPORTED_MODULE_6__);

class App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props); // chart.js defaults

    react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Chart.defaults.global.defaultFontColor = '#000';
    react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Chart.defaults.global.defaultFontSize = 16;
    this.state = {
      historicalData: null,
      currency: "PHP",
      baseUrl: 'https://api.coindesk.com/'
    };
    this.onCurrencySelect = this.onCurrencySelect.bind(this);
  }

  componentDidMount() {
    this.getBitcoinData();
  }

  getBitcoinData() {
    const {
      baseUrl,
      currency
    } = this.state;
    fetch(`${baseUrl}v1/bpi/historical/close.json?currency=${currency}`).then(response => response.json()).then(historicalData => this.setState({
      historicalData
    })).catch(e => e);
  }

  formatChartData() {
    const {
      bpi
    } = this.state.historicalData;
    return {
      labels: lodash__WEBPACK_IMPORTED_MODULE_3___default().map(lodash__WEBPACK_IMPORTED_MODULE_3___default().keys(bpi), date => moment__WEBPACK_IMPORTED_MODULE_5___default()(date).format("ll")),
      datasets: [{
        label: "Bitcoin",
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
        data: lodash__WEBPACK_IMPORTED_MODULE_3___default().values(bpi)
      }]
    };
  }

  setCurrency(currency) {
    this.setState({
      currency
    }, this.getBitcoinData);
  }

  onCurrencySelect(e) {
    this.setCurrency(e.target.value);
  }

  render() {
    if (this.state.historicalData) {
      return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }
      }, __jsx("meta", {
        charset: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "theme-color",
        content: "#000000",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }
      }), __jsx("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "chrome=1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "manifest",
        href: "/manifest.json",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "shortcut icon",
        href: "/favicon.ico",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Bungee",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }
      }), __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }
      }, "\uBE44\uD2B8\uCF54\uC778 \uC0AC\uC774\uD2B8 \uD14C\uC2A4\uD2B8"), __jsx("meta", {
        name: "keywords",
        content: "bitcoin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "description",
        content: "\uD14C\uC2A4\uD2B8 \uC6A9\uB3C4\uB85C \uC0AC\uC6A9\uD558\uAE30 \uC704\uD55C \uC0AC\uC774\uD2B8 \uC785\uB2C8\uB2E4.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "app",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }
      }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
        title: "BITCOIN PRICE INDEX",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "select-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }
      }, __jsx("span", {
        style: {
          fontSize: 18,
          fontFamily: 'Bungee'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }
      }, " Select your currency: "), __jsx("select", {
        value: this.state.currency,
        onChange: this.onCurrencySelect,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }
      }, _supported_currencies_json__WEBPACK_IMPORTED_MODULE_6__.map((obj, index) => __jsx("option", {
        key: `${index}-${obj.country}`,
        value: obj.currency,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }
      }, " ", obj.country, " "))), this.state.currency !== 'PHP' && __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 49
        }
      }, __jsx("a", {
        href: "#",
        className: "link",
        onClick: () => this.setCurrency('PHP'),
        style: {
          color: "black",
          fontSize: 16,
          fontFamily: 'Bungee'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }
      }, " [CLICK HERE TO RESET] "))), __jsx("div", {
        style: {
          marginTop: 10
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }
      }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {
        data: this.formatChartData(),
        height: 250,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }
      }))));
    }

    return null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/components/Header.js":
/*!************************************!*\
  !*** ./pages/components/Header.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Administrator\\github\\bitcoin-price-index\\pages\\components\\Header.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const Header = props => __jsx("header", {
  style: {
    marginBottom: 10
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("span", {
  className: "header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}, " ", props.title, " ")), __jsx("div", {
  className: "subheader-body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, __jsx("span", {
  className: "subheader",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}, " Powered by ", __jsx("a", {
  className: "link",
  target: "_blank",
  href: "https://www.coindesk.com/price/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 47
  }
}, "CoinDesk"), ". ")));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/App.css":
/*!***********************!*\
  !*** ./pages/App.css ***!
  \***********************/
/***/ (function() {



/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/***/ (function() {



/***/ }),

/***/ "./pages/supported-currencies.json":
/*!*****************************************!*\
  !*** ./pages/supported-currencies.json ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"currency":"AED","country":"United Arab Emirates Dirham"},{"currency":"AFN","country":"Afghan Afghani"},{"currency":"ALL","country":"Albanian Lek"},{"currency":"AMD","country":"Armenian Dram"},{"currency":"ANG","country":"Netherlands Antillean Guilder"},{"currency":"AOA","country":"Angolan Kwanza"},{"currency":"ARS","country":"Argentine Peso"},{"currency":"AUD","country":"Australian Dollar"},{"currency":"AWG","country":"Aruban Florin"},{"currency":"AZN","country":"Azerbaijani Manat"},{"currency":"BAM","country":"Bosnia-Herzegovina Convertible Mark"},{"currency":"BBD","country":"Barbadian Dollar"},{"currency":"BDT","country":"Bangladeshi Taka"},{"currency":"BGN","country":"Bulgarian Lev"},{"currency":"BHD","country":"Bahraini Dinar"},{"currency":"BIF","country":"Burundian Franc"},{"currency":"BMD","country":"Bermudan Dollar"},{"currency":"BND","country":"Brunei Dollar"},{"currency":"BOB","country":"Bolivian Boliviano"},{"currency":"BRL","country":"Brazilian Real"},{"currency":"BSD","country":"Bahamian Dollar"},{"currency":"BTC","country":"Bitcoin"},{"currency":"BTN","country":"Bhutanese Ngultrum"},{"currency":"BWP","country":"Botswanan Pula"},{"currency":"BYR","country":"Belarusian Ruble"},{"currency":"BZD","country":"Belize Dollar"},{"currency":"CAD","country":"Canadian Dollar"},{"currency":"CDF","country":"Congolese Franc"},{"currency":"CHF","country":"Swiss Franc"},{"currency":"CLF","country":"Chilean Unit of Account (UF)"},{"currency":"CLP","country":"Chilean Peso"},{"currency":"CNY","country":"Chinese Yuan"},{"currency":"COP","country":"Colombian Peso"},{"currency":"CRC","country":"Costa Rican Colón"},{"currency":"CUP","country":"Cuban Peso"},{"currency":"CVE","country":"Cape Verdean Escudo"},{"currency":"CZK","country":"Czech Republic Koruna"},{"currency":"DJF","country":"Djiboutian Franc"},{"currency":"DKK","country":"Danish Krone"},{"currency":"DOP","country":"Dominican Peso"},{"currency":"DZD","country":"Algerian Dinar"},{"currency":"EEK","country":"Estonian Kroon"},{"currency":"EGP","country":"Egyptian Pound"},{"currency":"ERN","country":"Eritrean Nnakfa"},{"currency":"ETB","country":"Ethiopian Birr"},{"currency":"EUR","country":"Euro"},{"currency":"FJD","country":"Fijian Dollar"},{"currency":"FKP","country":"Falkland Islands Pound"},{"currency":"GBP","country":"British Pound Sterling"},{"currency":"GEL","country":"Georgian Lari"},{"currency":"GHS","country":"Ghanaian Cedi"},{"currency":"GIP","country":"Gibraltar Pound"},{"currency":"GMD","country":"Gambian Dalasi"},{"currency":"GNF","country":"Guinean Franc"},{"currency":"GTQ","country":"Guatemalan Quetzal"},{"currency":"GYD","country":"Guyanaese Dollar"},{"currency":"HKD","country":"Hong Kong Dollar"},{"currency":"HNL","country":"Honduran Lempira"},{"currency":"HRK","country":"Croatian Kuna"},{"currency":"HTG","country":"Haitian Gourde"},{"currency":"HUF","country":"Hungarian Forint"},{"currency":"IDR","country":"Indonesian Rupiah"},{"currency":"ILS","country":"Israeli New Sheqel"},{"currency":"INR","country":"Indian Rupee"},{"currency":"IQD","country":"Iraqi Dinar"},{"currency":"IRR","country":"Iranian Rial"},{"currency":"ISK","country":"Icelandic Króna"},{"currency":"JEP","country":"Jersey Pound"},{"currency":"JMD","country":"Jamaican Dollar"},{"currency":"JOD","country":"Jordanian Dinar"},{"currency":"JPY","country":"Japanese Yen"},{"currency":"KES","country":"Kenyan Shilling"},{"currency":"KGS","country":"Kyrgystani Som"},{"currency":"KHR","country":"Cambodian Riel"},{"currency":"KMF","country":"Comorian Franc"},{"currency":"KPW","country":"North Korean Won"},{"currency":"KRW","country":"South Korean Won"},{"currency":"KWD","country":"Kuwaiti Dinar"},{"currency":"KYD","country":"Cayman Islands Dollar"},{"currency":"KZT","country":"Kazakhstani Tenge"},{"currency":"LAK","country":"Laotian Kip"},{"currency":"LBP","country":"Lebanese Pound"},{"currency":"LKR","country":"Sri Lankan Rupee"},{"currency":"LRD","country":"Liberian Dollar"},{"currency":"LSL","country":"Lesotho Loti"},{"currency":"LTL","country":"Lithuanian Litas"},{"currency":"LVL","country":"Latvian Lats"},{"currency":"LYD","country":"Libyan Dinar"},{"currency":"MAD","country":"Moroccan Dirham"},{"currency":"MDL","country":"Moldovan Leu"},{"currency":"MGA","country":"Malagasy Ariary"},{"currency":"MKD","country":"Macedonian Denar"},{"currency":"MMK","country":"Myanma Kyat"},{"currency":"MNT","country":"Mongolian Tugrik"},{"currency":"MOP","country":"Macanese Pataca"},{"currency":"MRO","country":"Mauritanian Ouguiya"},{"currency":"MTL","country":"Maltese Lira"},{"currency":"MUR","country":"Mauritian Rupee"},{"currency":"MVR","country":"Maldivian Rufiyaa"},{"currency":"MWK","country":"Malawian Kwacha"},{"currency":"MXN","country":"Mexican Peso"},{"currency":"MYR","country":"Malaysian Ringgit"},{"currency":"MZN","country":"Mozambican Metical"},{"currency":"NAD","country":"Namibian Dollar"},{"currency":"NGN","country":"Nigerian Naira"},{"currency":"NIO","country":"Nicaraguan Córdoba"},{"currency":"NOK","country":"Norwegian Krone"},{"currency":"NPR","country":"Nepalese Rupee"},{"currency":"NZD","country":"New Zealand Dollar"},{"currency":"OMR","country":"Omani Rial"},{"currency":"PAB","country":"Panamanian Balboa"},{"currency":"PEN","country":"Peruvian Nuevo Sol"},{"currency":"PGK","country":"Papua New Guinean Kina"},{"currency":"PHP","country":"Philippine Peso"},{"currency":"PKR","country":"Pakistani Rupee"},{"currency":"PLN","country":"Polish Zloty"},{"currency":"PYG","country":"Paraguayan Guarani"},{"currency":"QAR","country":"Qatari Rial"},{"currency":"RON","country":"Romanian Leu"},{"currency":"RSD","country":"Serbian Dinar"},{"currency":"RUB","country":"Russian Ruble"},{"currency":"RWF","country":"Rwandan Franc"},{"currency":"SAR","country":"Saudi Riyal"},{"currency":"SBD","country":"Solomon Islands Dollar"},{"currency":"SCR","country":"Seychellois Rupee"},{"currency":"SDG","country":"Sudanese Pound"},{"currency":"SEK","country":"Swedish Krona"},{"currency":"SGD","country":"Singapore Dollar"},{"currency":"SHP","country":"Saint Helena Pound"},{"currency":"SLL","country":"Sierra Leonean Leone"},{"currency":"SOS","country":"Somali Shilling"},{"currency":"SRD","country":"Surinamese Dollar"},{"currency":"STD","country":"São Tomé and Príncipe Dobra"},{"currency":"SVC","country":"Salvadoran Colón"},{"currency":"SYP","country":"Syrian Pound"},{"currency":"SZL","country":"Swazi Lilangeni"},{"currency":"THB","country":"Thai Baht"},{"currency":"TJS","country":"Tajikistani Somoni"},{"currency":"TMT","country":"Turkmenistani Manat"},{"currency":"TND","country":"Tunisian Dinar"},{"currency":"TOP","country":"Tongan Pa?anga"},{"currency":"TRY","country":"Turkish Lira"},{"currency":"TTD","country":"Trinidad and Tobago Dollar"},{"currency":"TWD","country":"New Taiwan Dollar"},{"currency":"TZS","country":"Tanzanian Shilling"},{"currency":"UAH","country":"Ukrainian Hryvnia"},{"currency":"UGX","country":"Ugandan Shilling"},{"currency":"USD","country":"United States Dollar"},{"currency":"UYU","country":"Uruguayan Peso"},{"currency":"UZS","country":"Uzbekistan Som"},{"currency":"VEF","country":"Venezuelan Bolívar Fuerte"},{"currency":"VND","country":"Vietnamese Dong"},{"currency":"VUV","country":"Vanuatu Vatu"},{"currency":"WST","country":"Samoan Tala"},{"currency":"XAF","country":"CFA Franc BEAC"},{"currency":"XAG","country":"Silver (troy ounce)"},{"currency":"XAU","country":"Gold (troy ounce)"},{"currency":"XBT","country":"Bitcoin"},{"currency":"XCD","country":"East Caribbean Dollar"},{"currency":"XDR","country":"Special Drawing Rights"},{"currency":"XOF","country":"CFA Franc BCEAO"},{"currency":"XPF","country":"CFP Franc"},{"currency":"YER","country":"Yemeni Rial"},{"currency":"ZAR","country":"South African Rand"},{"currency":"ZMK","country":"Zambian Kwacha (pre-2013)"},{"currency":"ZMW","country":"Zambian Kwacha"},{"currency":"ZWL","country":"Zimbabwean Dollar"},{"currency":"KRW","country":"South Korea Won"}]');

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaXRjb2luLXByaWNlLWluZGV4Ly4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9iaXRjb2luLXByaWNlLWluZGV4Ly4vcGFnZXMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImN1cnJlbmNpZXMiLCJBcHAiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiQ2hhcnQiLCJzdGF0ZSIsImhpc3RvcmljYWxEYXRhIiwiY3VycmVuY3kiLCJiYXNlVXJsIiwib25DdXJyZW5jeVNlbGVjdCIsImJpbmQiLCJjb21wb25lbnREaWRNb3VudCIsImdldEJpdGNvaW5EYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0U3RhdGUiLCJjYXRjaCIsImUiLCJmb3JtYXRDaGFydERhdGEiLCJicGkiLCJsYWJlbHMiLCJfIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImRhdGFzZXRzIiwibGFiZWwiLCJmaWxsIiwibGluZVRlbnNpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlckNhcFN0eWxlIiwiYm9yZGVyRGFzaCIsImJvcmRlckRhc2hPZmZzZXQiLCJib3JkZXJKb2luU3R5bGUiLCJwb2ludEJvcmRlckNvbG9yIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEJvcmRlcldpZHRoIiwicG9pbnRIb3ZlclJhZGl1cyIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyV2lkdGgiLCJwb2ludFJhZGl1cyIsInBvaW50SGl0UmFkaXVzIiwiZGF0YSIsInNldEN1cnJlbmN5IiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXIiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJvYmoiLCJpbmRleCIsImNvdW50cnkiLCJjb2xvciIsIm1hcmdpblRvcCIsIkhlYWRlciIsIm1h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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsaURBQUQ7QUFBTSxZQUFJLEVBQUUsS0FBS3JDLGVBQUwsRUFBWjtBQUFvQyxjQUFNLEVBQUUsR0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBakJGLENBbEJBLENBREY7QUEwQ0Q7O0FBRUQsV0FBTyxJQUFQO0FBQ0Q7O0FBcEh5Qjs7QUF1SDVCLCtEQUFlcEIsR0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbklBOztBQUVBLE1BQU0wRCxNQUFNLEdBQUd2RCxLQUFLLElBQ2xCO0FBQVEsT0FBSyxFQUFFO0FBQUN3RCxnQkFBWSxFQUFFO0FBQWYsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQU0sV0FBUyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBMkJ4RCxLQUFLLENBQUN5RCxLQUFqQyxNQURGLENBREYsRUFLRTtBQUFLLFdBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBTSxXQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBd0M7QUFBRyxXQUFTLEVBQUMsTUFBYjtBQUFvQixRQUFNLEVBQUMsUUFBM0I7QUFBb0MsTUFBSSxFQUFDLGlDQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXhDLE9BREYsQ0FMRixDQURGOztBQVlBLCtEQUFlRixNQUFmLEUiLCJmaWxlIjoicGFnZXNfX2FwcF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IExpbmUsIENoYXJ0IH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgY3VycmVuY2llcyBmcm9tICcuL3N1cHBvcnRlZC1jdXJyZW5jaWVzLmpzb24nO1xyXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcclxuaW1wb3J0ICcuL0FwcC5jc3MnXHJcblxyXG5jb25zb2xlLmxvZyhjdXJyZW5jaWVzKVxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgIC8vIGNoYXJ0LmpzIGRlZmF1bHRzXHJcbiAgICBDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRDb2xvciA9ICcjMDAwJztcclxuICAgIENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udFNpemUgPSAxNjtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBoaXN0b3JpY2FsRGF0YTogbnVsbCwgXHJcbiAgICAgIGN1cnJlbmN5OiBcIlBIUFwiLFxyXG4gICAgICBiYXNlVXJsOiAnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tLydcclxuICAgIH1cclxuICAgIHRoaXMub25DdXJyZW5jeVNlbGVjdCA9IHRoaXMub25DdXJyZW5jeVNlbGVjdC5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICB0aGlzLmdldEJpdGNvaW5EYXRhKClcclxuICB9XHJcblxyXG4gIGdldEJpdGNvaW5EYXRhICgpIHtcclxuXHJcbiAgICBjb25zdCB7YmFzZVVybCwgY3VycmVuY3l9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIGZldGNoKGAke2Jhc2VVcmx9djEvYnBpL2hpc3RvcmljYWwvY2xvc2UuanNvbj9jdXJyZW5jeT0ke2N1cnJlbmN5fWApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oaGlzdG9yaWNhbERhdGEgPT4gdGhpcy5zZXRTdGF0ZSh7aGlzdG9yaWNhbERhdGF9KSlcclxuICAgICAgLmNhdGNoKGUgPT4gZSlcclxuICB9XHJcblxyXG4gIGZvcm1hdENoYXJ0RGF0YSAoKSB7XHJcbiAgICBjb25zdCB7YnBpfSA9IHRoaXMuc3RhdGUuaGlzdG9yaWNhbERhdGFcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYWJlbHM6IF8ubWFwKF8ua2V5cyhicGkpLCBkYXRlID0+IG1vbWVudChkYXRlKS5mb3JtYXQoXCJsbFwiKSksXHJcbiAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQml0Y29pblwiLFxyXG4gICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMC40KScsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXHJcbiAgICAgICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxyXG4gICAgICAgICAgYm9yZGVyRGFzaDogW10sXHJcbiAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXHJcbiAgICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXHJcbiAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcclxuICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcclxuICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgyMjAsMjIwLDIyMCwxKScsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcclxuICAgICAgICAgIGRhdGE6IF8udmFsdWVzKGJwaSlcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEN1cnJlbmN5IChjdXJyZW5jeSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVuY3l9LCB0aGlzLmdldEJpdGNvaW5EYXRhKVxyXG4gIH1cclxuXHJcbiAgb25DdXJyZW5jeVNlbGVjdCAoZSkge1xyXG4gICAgdGhpcy5zZXRDdXJyZW5jeShlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmhpc3RvcmljYWxEYXRhKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cImNocm9tZT0xXCIgLz5cclxuXHJcbiAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJ1bmdlZVwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gIFxyXG4gICAgICAgICAgPHRpdGxlPuu5hO2KuOy9lOyduCDsgqzsnbTtirgg7YWM7Iqk7Yq4PC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJiaXRjb2luXCIgLz5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCLthYzsiqTtirgg7Jqp64+E66GcIOyCrOyaqe2VmOq4sCDsnITtlZwg7IKs7J207Yq4IOyeheuLiOuLpC5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgICAgIDxIZWFkZXIgdGl0bGU9XCJCSVRDT0lOIFBSSUNFIElOREVYXCIgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogMTgsIGZvbnRGYW1pbHk6ICdCdW5nZWUnfX0+IFNlbGVjdCB5b3VyIGN1cnJlbmN5OiA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUuY3VycmVuY3l9IG9uQ2hhbmdlPXt0aGlzLm9uQ3VycmVuY3lTZWxlY3R9PlxyXG4gICAgICAgICAgICAgIHtjdXJyZW5jaWVzLm1hcCgob2JqLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtgJHtpbmRleH0tJHtvYmouY291bnRyeX1gfSB2YWx1ZT17b2JqLmN1cnJlbmN5fT4ge29iai5jb3VudHJ5fSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVuY3kgIT09ICdQSFAnICYmICg8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaW5rXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRDdXJyZW5jeSgnUEhQJyl9IHN0eWxlPXt7Y29sb3I6IFwiYmxhY2tcIiwgZm9udFNpemU6IDE2LCBmb250RmFtaWx5OiAnQnVuZ2VlJ319PiBbQ0xJQ0sgSEVSRSBUTyBSRVNFVF0gPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogMTB9fT5cclxuICAgICAgICAgICAgPExpbmUgZGF0YT17dGhpcy5mb3JtYXRDaGFydERhdGEoKX0gaGVpZ2h0PXsyNTB9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEhlYWRlciA9IHByb3BzID0+IChcclxuICA8aGVhZGVyIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxMH19PlxyXG4gICAgPGRpdj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyXCI+IHtwcm9wcy50aXRsZX0gPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkZXItYm9keVwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJoZWFkZXJcIj4gUG93ZXJlZCBieSA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmNvaW5kZXNrLmNvbS9wcmljZS9cIj5Db2luRGVzazwvYT4uIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvaGVhZGVyPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==