self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Administrator_github_bitcoin_price_index_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Administrator_github_bitcoin_price_index_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Administrator_github_bitcoin_price_index_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_Administrator_github_bitcoin_price_index_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Administrator_github_bitcoin_price_index_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Administrator_github_bitcoin_price_index_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Header */ "./pages/components/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _supported_currencies_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./supported-currencies.json */ "./pages/supported-currencies.json");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./App.css */ "./pages/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_14__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\Administrator\\github\\bitcoin-price-index\\pages\\_app.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_6___default().createElement);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_Administrator_github_bitcoin_price_index_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_Administrator_github_bitcoin_price_index_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_Administrator_github_bitcoin_price_index_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










console.log(_supported_currencies_json__WEBPACK_IMPORTED_MODULE_12__);

var App = /*#__PURE__*/function (_Component) {
  (0,C_Users_Administrator_github_bitcoin_price_index_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    (0,C_Users_Administrator_github_bitcoin_price_index_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, App);

    _this = _super.call(this, props); // chart.js defaults

    react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__.Chart.defaults.global.defaultFontColor = '#000';
    react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__.Chart.defaults.global.defaultFontSize = 16;
    _this.state = {
      historicalData: null,
      currency: "PHP",
      baseUrl: 'https://api.coindesk.com/'
    };
    _this.onCurrencySelect = _this.onCurrencySelect.bind((0,C_Users_Administrator_github_bitcoin_price_index_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    return _this;
  }

  (0,C_Users_Administrator_github_bitcoin_price_index_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getBitcoinData();
    }
  }, {
    key: "getBitcoinData",
    value: function getBitcoinData() {
      var _this2 = this;

      var _this$state = this.state,
          baseUrl = _this$state.baseUrl,
          currency = _this$state.currency;
      fetch("".concat(baseUrl, "v1/bpi/historical/close.json?currency=").concat(currency)).then(function (response) {
        return response.json();
      }).then(function (historicalData) {
        return _this2.setState({
          historicalData: historicalData
        });
      })["catch"](function (e) {
        return e;
      });
    }
  }, {
    key: "formatChartData",
    value: function formatChartData() {
      var bpi = this.state.historicalData.bpi;
      return {
        labels: lodash__WEBPACK_IMPORTED_MODULE_9___default().map(lodash__WEBPACK_IMPORTED_MODULE_9___default().keys(bpi), function (date) {
          return moment__WEBPACK_IMPORTED_MODULE_11___default()(date).format("ll");
        }),
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
          data: lodash__WEBPACK_IMPORTED_MODULE_9___default().values(bpi)
        }]
      };
    }
  }, {
    key: "setCurrency",
    value: function setCurrency(currency) {
      this.setState({
        currency: currency
      }, this.getBitcoinData);
    }
  }, {
    key: "onCurrencySelect",
    value: function onCurrencySelect(e) {
      this.setCurrency(e.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.historicalData) {
        return __jsx((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
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
        }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__.default, {
          title: "\uBE44\uD2B8\uCF54\uC778 \uC0AC\uC774\uD2B8 \uD14C\uC2A4\uD2B8",
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
        }, _supported_currencies_json__WEBPACK_IMPORTED_MODULE_12__.map(function (obj, index) {
          return __jsx("option", {
            key: "".concat(index, "-").concat(obj.country),
            value: obj.currency,
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }
          }, " ", obj.country, " ");
        })), this.state.currency !== 'PHP' && __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 49
          }
        }, __jsx("a", {
          href: "#",
          className: "link",
          onClick: function onClick() {
            return _this3.setCurrency('PHP');
          },
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
        }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__.Line, {
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
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiY3VycmVuY2llcyIsIkFwcCIsInByb3BzIiwiQ2hhcnQiLCJzdGF0ZSIsImhpc3RvcmljYWxEYXRhIiwiY3VycmVuY3kiLCJiYXNlVXJsIiwib25DdXJyZW5jeVNlbGVjdCIsImJpbmQiLCJnZXRCaXRjb2luRGF0YSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInNldFN0YXRlIiwiZSIsImJwaSIsImxhYmVscyIsIl8iLCJkYXRlIiwibW9tZW50IiwiZm9ybWF0IiwiZGF0YXNldHMiLCJsYWJlbCIsImZpbGwiLCJsaW5lVGVuc2lvbiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyQ2FwU3R5bGUiLCJib3JkZXJEYXNoIiwiYm9yZGVyRGFzaE9mZnNldCIsImJvcmRlckpvaW5TdHlsZSIsInBvaW50Qm9yZGVyQ29sb3IiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInBvaW50Qm9yZGVyV2lkdGgiLCJwb2ludEhvdmVyUmFkaXVzIiwicG9pbnRIb3ZlckJhY2tncm91bmRDb2xvciIsInBvaW50SG92ZXJCb3JkZXJDb2xvciIsInBvaW50SG92ZXJCb3JkZXJXaWR0aCIsInBvaW50UmFkaXVzIiwicG9pbnRIaXRSYWRpdXMiLCJkYXRhIiwic2V0Q3VycmVuY3kiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsIm9iaiIsImluZGV4IiwiY291bnRyeSIsImNvbG9yIiwibWFyZ2luVG9wIiwiZm9ybWF0Q2hhcnREYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHdEQUFaOztJ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LEVBQUUsS0FBS0MsZUFBTCxFQUFaO0FBQW9DLGdCQUFNLEVBQUUsR0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBakJGLENBbEJBLENBREY7QUEwQ0Q7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFwSGVDLDRDOztBQXVIbEIsK0RBQWVyRCxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGE1N2NkOTdlNDg3NjVkMzJmMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IExpbmUsIENoYXJ0IH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgY3VycmVuY2llcyBmcm9tICcuL3N1cHBvcnRlZC1jdXJyZW5jaWVzLmpzb24nO1xyXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcclxuaW1wb3J0ICcuL0FwcC5jc3MnXHJcblxyXG5jb25zb2xlLmxvZyhjdXJyZW5jaWVzKVxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgIC8vIGNoYXJ0LmpzIGRlZmF1bHRzXHJcbiAgICBDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRDb2xvciA9ICcjMDAwJztcclxuICAgIENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udFNpemUgPSAxNjtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBoaXN0b3JpY2FsRGF0YTogbnVsbCwgXHJcbiAgICAgIGN1cnJlbmN5OiBcIlBIUFwiLFxyXG4gICAgICBiYXNlVXJsOiAnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tLydcclxuICAgIH1cclxuICAgIHRoaXMub25DdXJyZW5jeVNlbGVjdCA9IHRoaXMub25DdXJyZW5jeVNlbGVjdC5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICB0aGlzLmdldEJpdGNvaW5EYXRhKClcclxuICB9XHJcblxyXG4gIGdldEJpdGNvaW5EYXRhICgpIHtcclxuXHJcbiAgICBjb25zdCB7YmFzZVVybCwgY3VycmVuY3l9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIGZldGNoKGAke2Jhc2VVcmx9djEvYnBpL2hpc3RvcmljYWwvY2xvc2UuanNvbj9jdXJyZW5jeT0ke2N1cnJlbmN5fWApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oaGlzdG9yaWNhbERhdGEgPT4gdGhpcy5zZXRTdGF0ZSh7aGlzdG9yaWNhbERhdGF9KSlcclxuICAgICAgLmNhdGNoKGUgPT4gZSlcclxuICB9XHJcblxyXG4gIGZvcm1hdENoYXJ0RGF0YSAoKSB7XHJcbiAgICBjb25zdCB7YnBpfSA9IHRoaXMuc3RhdGUuaGlzdG9yaWNhbERhdGFcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYWJlbHM6IF8ubWFwKF8ua2V5cyhicGkpLCBkYXRlID0+IG1vbWVudChkYXRlKS5mb3JtYXQoXCJsbFwiKSksXHJcbiAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQml0Y29pblwiLFxyXG4gICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMC40KScsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXHJcbiAgICAgICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxyXG4gICAgICAgICAgYm9yZGVyRGFzaDogW10sXHJcbiAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXHJcbiAgICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXHJcbiAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcclxuICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcclxuICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgyMjAsMjIwLDIyMCwxKScsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcclxuICAgICAgICAgIGRhdGE6IF8udmFsdWVzKGJwaSlcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEN1cnJlbmN5IChjdXJyZW5jeSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVuY3l9LCB0aGlzLmdldEJpdGNvaW5EYXRhKVxyXG4gIH1cclxuXHJcbiAgb25DdXJyZW5jeVNlbGVjdCAoZSkge1xyXG4gICAgdGhpcy5zZXRDdXJyZW5jeShlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmhpc3RvcmljYWxEYXRhKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cImNocm9tZT0xXCIgLz5cclxuXHJcbiAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJ1bmdlZVwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gIFxyXG4gICAgICAgICAgPHRpdGxlPuu5hO2KuOy9lOyduCDsgqzsnbTtirgg7YWM7Iqk7Yq4PC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJiaXRjb2luXCIgLz5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCLthYzsiqTtirgg7Jqp64+E66GcIOyCrOyaqe2VmOq4sCDsnITtlZwg7IKs7J207Yq4IOyeheuLiOuLpC5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgICAgIDxIZWFkZXIgdGl0bGU9XCLruYTtirjsvZTsnbgg7IKs7J207Yq4IO2FjOyKpO2KuFwiIC8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6IDE4LCBmb250RmFtaWx5OiAnQnVuZ2VlJ319PiBTZWxlY3QgeW91ciBjdXJyZW5jeTogPC9zcGFuPlxyXG4gICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbmN5fSBvbkNoYW5nZT17dGhpcy5vbkN1cnJlbmN5U2VsZWN0fT5cclxuICAgICAgICAgICAgICB7Y3VycmVuY2llcy5tYXAoKG9iaiwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YCR7aW5kZXh9LSR7b2JqLmNvdW50cnl9YH0gdmFsdWU9e29iai5jdXJyZW5jeX0+IHtvYmouY291bnRyeX0gPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbmN5ICE9PSAnUEhQJyAmJiAoPGRpdj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibGlua1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0Q3VycmVuY3koJ1BIUCcpfSBzdHlsZT17e2NvbG9yOiBcImJsYWNrXCIsIGZvbnRTaXplOiAxNiwgZm9udEZhbWlseTogJ0J1bmdlZSd9fT4gW0NMSUNLIEhFUkUgVE8gUkVTRVRdIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IDEwfX0+XHJcbiAgICAgICAgICAgIDxMaW5lIGRhdGE9e3RoaXMuZm9ybWF0Q2hhcnREYXRhKCl9IGhlaWdodD17MjUwfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9