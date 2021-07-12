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
      })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaXRjb2luLXByaWNlLWluZGV4Ly4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9iaXRjb2luLXByaWNlLWluZGV4Ly4vcGFnZXMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImN1cnJlbmNpZXMiLCJBcHAiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiQ2hhcnQiLCJzdGF0ZSIsImhpc3RvcmljYWxEYXRhIiwiY3VycmVuY3kiLCJiYXNlVXJsIiwib25DdXJyZW5jeVNlbGVjdCIsImJpbmQiLCJjb21wb25lbnREaWRNb3VudCIsImdldEJpdGNvaW5EYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0U3RhdGUiLCJjYXRjaCIsImUiLCJmb3JtYXRDaGFydERhdGEiLCJicGkiLCJsYWJlbHMiLCJfIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImRhdGFzZXRzIiwibGFiZWwiLCJmaWxsIiwibGluZVRlbnNpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlckNhcFN0eWxlIiwiYm9yZGVyRGFzaCIsImJvcmRlckRhc2hPZmZzZXQiLCJib3JkZXJKb2luU3R5bGUiLCJwb2ludEJvcmRlckNvbG9yIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEJvcmRlcldpZHRoIiwicG9pbnRIb3ZlclJhZGl1cyIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyV2lkdGgiLCJwb2ludFJhZGl1cyIsInBvaW50SGl0UmFkaXVzIiwiZGF0YSIsInNldEN1cnJlbmN5IiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXIiLCJIZWFkZXIiLCJtYXJnaW5Cb3R0b20iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7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O0FBcEh5Qjs7QUF1SDVCLCtEQUFlTixHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSUE7O0FBRUEsTUFBTW1ELE1BQU0sR0FBR2hELEtBQUssSUFDbEI7QUFBUSxPQUFLLEVBQUU7QUFBQ2lELGdCQUFZLEVBQUU7QUFBZixHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBTSxXQUFTLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUEyQmpELEtBQUssQ0FBQ2tELEtBQWpDLE1BREYsQ0FERixFQUtFO0FBQUssV0FBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFNLFdBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF3QztBQUFHLFdBQVMsRUFBQyxNQUFiO0FBQW9CLFFBQU0sRUFBQyxRQUEzQjtBQUFvQyxNQUFJLEVBQUMsaUNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBeEMsT0FERixDQUxGLENBREY7O0FBWUEsK0RBQWVGLE1BQWYsRSIsImZpbGUiOiJwYWdlc19fYXBwX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgTGluZSwgQ2hhcnQgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBjdXJyZW5jaWVzIGZyb20gJy4vc3VwcG9ydGVkLWN1cnJlbmNpZXMuanNvbic7XHJcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgJy4vQXBwLmNzcydcclxuXHJcbmNvbnNvbGUubG9nKGN1cnJlbmNpZXMpXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgLy8gY2hhcnQuanMgZGVmYXVsdHNcclxuICAgIENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udENvbG9yID0gJyMwMDAnO1xyXG4gICAgQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250U2l6ZSA9IDE2O1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGhpc3RvcmljYWxEYXRhOiBudWxsLCBcclxuICAgICAgY3VycmVuY3k6IFwiUEhQXCIsXHJcbiAgICAgIGJhc2VVcmw6ICdodHRwczovL2FwaS5jb2luZGVzay5jb20vJ1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbkN1cnJlbmN5U2VsZWN0ID0gdGhpcy5vbkN1cnJlbmN5U2VsZWN0LmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIHRoaXMuZ2V0Qml0Y29pbkRhdGEoKVxyXG4gIH1cclxuXHJcbiAgZ2V0Qml0Y29pbkRhdGEgKCkge1xyXG5cclxuICAgIGNvbnN0IHtiYXNlVXJsLCBjdXJyZW5jeX0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgZmV0Y2goYCR7YmFzZVVybH12MS9icGkvaGlzdG9yaWNhbC9jbG9zZS5qc29uP2N1cnJlbmN5PSR7Y3VycmVuY3l9YClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihoaXN0b3JpY2FsRGF0YSA9PiB0aGlzLnNldFN0YXRlKHtoaXN0b3JpY2FsRGF0YX0pKVxyXG4gICAgICAuY2F0Y2goZSA9PiBlKVxyXG4gIH1cclxuXHJcbiAgZm9ybWF0Q2hhcnREYXRhICgpIHtcclxuICAgIGNvbnN0IHticGl9ID0gdGhpcy5zdGF0ZS5oaXN0b3JpY2FsRGF0YVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxhYmVsczogXy5tYXAoXy5rZXlzKGJwaSksIGRhdGUgPT4gbW9tZW50KGRhdGUpLmZvcm1hdChcImxsXCIpKSxcclxuICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJCaXRjb2luXCIsXHJcbiAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwwLjQpJyxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcclxuICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXHJcbiAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcclxuICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxyXG4gICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDIyMCwyMjAsMjIwLDEpJyxcclxuICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMixcclxuICAgICAgICAgIHBvaW50UmFkaXVzOiAxLFxyXG4gICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgZGF0YTogXy52YWx1ZXMoYnBpKVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q3VycmVuY3kgKGN1cnJlbmN5KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW5jeX0sIHRoaXMuZ2V0Qml0Y29pbkRhdGEpXHJcbiAgfVxyXG5cclxuICBvbkN1cnJlbmN5U2VsZWN0IChlKSB7XHJcbiAgICB0aGlzLnNldEN1cnJlbmN5KGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaGlzdG9yaWNhbERhdGEpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiY2hyb21lPTFcIiAvPlxyXG5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QnVuZ2VlXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgXHJcbiAgICAgICAgICA8dGl0bGU+67mE7Yq47L2U7J24IOyCrOydtO2KuCDthYzsiqTtirg8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cImJpdGNvaW5cIiAvPlxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgY29udGVudD1cIu2FjOyKpO2KuCDsmqnrj4TroZwg7IKs7Jqp7ZWY6riwIOychO2VnCDsgqzsnbTtirgg7J6F64uI64ukLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICAgICAgPEhlYWRlciB0aXRsZT1cIkJJVENPSU4gUFJJQ0UgSU5ERVhcIiAvPlxyXG5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogMTgsIGZvbnRGYW1pbHk6ICdCdW5nZWUnfX0+IFNlbGVjdCB5b3VyIGN1cnJlbmN5OiA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUuY3VycmVuY3l9IG9uQ2hhbmdlPXt0aGlzLm9uQ3VycmVuY3lTZWxlY3R9PlxyXG4gICAgICAgICAgICAgIHtjdXJyZW5jaWVzLm1hcCgob2JqLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtgJHtpbmRleH0tJHtvYmouY291bnRyeX1gfSB2YWx1ZT17b2JqLmN1cnJlbmN5fT4ge29iai5jb3VudHJ5fSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVuY3kgIT09ICdQSFAnICYmICg8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaW5rXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRDdXJyZW5jeSgnUEhQJyl9IHN0eWxlPXt7Y29sb3I6IFwiYmxhY2tcIiwgZm9udFNpemU6IDE2LCBmb250RmFtaWx5OiAnQnVuZ2VlJ319PiBbQ0xJQ0sgSEVSRSBUTyBSRVNFVF0gPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogMTB9fT5cclxuICAgICAgICAgICAgPExpbmUgZGF0YT17dGhpcy5mb3JtYXRDaGFydERhdGEoKX0gaGVpZ2h0PXsyNTB9IC8+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBIZWFkZXIgPSBwcm9wcyA9PiAoXHJcbiAgPGhlYWRlciBzdHlsZT17e21hcmdpbkJvdHRvbTogMTB9fT5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlclwiPiB7cHJvcHMudGl0bGV9IDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGVyLWJvZHlcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViaGVhZGVyXCI+IFBvd2VyZWQgYnkgPGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5jb2luZGVzay5jb20vcHJpY2UvXCI+Q29pbkRlc2s8L2E+LiA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2hlYWRlcj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=