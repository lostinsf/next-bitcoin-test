self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiY3VycmVuY2llcyIsIkFwcCIsInByb3BzIiwiQ2hhcnQiLCJzdGF0ZSIsImhpc3RvcmljYWxEYXRhIiwiY3VycmVuY3kiLCJiYXNlVXJsIiwib25DdXJyZW5jeVNlbGVjdCIsImJpbmQiLCJnZXRCaXRjb2luRGF0YSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInNldFN0YXRlIiwiZSIsImJwaSIsImxhYmVscyIsIl8iLCJkYXRlIiwibW9tZW50IiwiZm9ybWF0IiwiZGF0YXNldHMiLCJsYWJlbCIsImZpbGwiLCJsaW5lVGVuc2lvbiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyQ2FwU3R5bGUiLCJib3JkZXJEYXNoIiwiYm9yZGVyRGFzaE9mZnNldCIsImJvcmRlckpvaW5TdHlsZSIsInBvaW50Qm9yZGVyQ29sb3IiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInBvaW50Qm9yZGVyV2lkdGgiLCJwb2ludEhvdmVyUmFkaXVzIiwicG9pbnRIb3ZlckJhY2tncm91bmRDb2xvciIsInBvaW50SG92ZXJCb3JkZXJDb2xvciIsInBvaW50SG92ZXJCb3JkZXJXaWR0aCIsInBvaW50UmFkaXVzIiwicG9pbnRIaXRSYWRpdXMiLCJkYXRhIiwic2V0Q3VycmVuY3kiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsIm9iaiIsImluZGV4IiwiY291bnRyeSIsImNvbG9yIiwibWFyZ2luVG9wIiwiZm9ybWF0Q2hhcnREYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHdEQUFaOztJ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LEVBQUUsS0FBS0MsZUFBTCxFQUFaO0FBQW9DLGdCQUFNLEVBQUUsR0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBakJGLENBbEJBLENBREY7QUEwQ0Q7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFwSGVDLDRDOztBQXVIbEIsK0RBQWVyRCxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRhNTdjZDk3ZTQ4NzY1ZDMyZjIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBMaW5lLCBDaGFydCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IGN1cnJlbmNpZXMgZnJvbSAnLi9zdXBwb3J0ZWQtY3VycmVuY2llcy5qc29uJztcclxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCAnLi9BcHAuY3NzJ1xyXG5cclxuY29uc29sZS5sb2coY3VycmVuY2llcylcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAvLyBjaGFydC5qcyBkZWZhdWx0c1xyXG4gICAgQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250Q29sb3IgPSAnIzAwMCc7XHJcbiAgICBDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRTaXplID0gMTY7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaGlzdG9yaWNhbERhdGE6IG51bGwsIFxyXG4gICAgICBjdXJyZW5jeTogXCJQSFBcIixcclxuICAgICAgYmFzZVVybDogJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS8nXHJcbiAgICB9XHJcbiAgICB0aGlzLm9uQ3VycmVuY3lTZWxlY3QgPSB0aGlzLm9uQ3VycmVuY3lTZWxlY3QuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgdGhpcy5nZXRCaXRjb2luRGF0YSgpXHJcbiAgfVxyXG5cclxuICBnZXRCaXRjb2luRGF0YSAoKSB7XHJcblxyXG4gICAgY29uc3Qge2Jhc2VVcmwsIGN1cnJlbmN5fSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICBmZXRjaChgJHtiYXNlVXJsfXYxL2JwaS9oaXN0b3JpY2FsL2Nsb3NlLmpzb24/Y3VycmVuY3k9JHtjdXJyZW5jeX1gKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGhpc3RvcmljYWxEYXRhID0+IHRoaXMuc2V0U3RhdGUoe2hpc3RvcmljYWxEYXRhfSkpXHJcbiAgICAgIC5jYXRjaChlID0+IGUpXHJcbiAgfVxyXG5cclxuICBmb3JtYXRDaGFydERhdGEgKCkge1xyXG4gICAgY29uc3Qge2JwaX0gPSB0aGlzLnN0YXRlLmhpc3RvcmljYWxEYXRhXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGFiZWxzOiBfLm1hcChfLmtleXMoYnBpKSwgZGF0ZSA9PiBtb21lbnQoZGF0ZSkuZm9ybWF0KFwibGxcIikpLFxyXG4gICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkJpdGNvaW5cIixcclxuICAgICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDAuNCknLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxyXG4gICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcclxuICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxyXG4gICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXHJcbiAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcclxuICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXHJcbiAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXHJcbiAgICAgICAgICBkYXRhOiBfLnZhbHVlcyhicGkpXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDdXJyZW5jeSAoY3VycmVuY3kpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbmN5fSwgdGhpcy5nZXRCaXRjb2luRGF0YSlcclxuICB9XHJcblxyXG4gIG9uQ3VycmVuY3lTZWxlY3QgKGUpIHtcclxuICAgIHRoaXMuc2V0Q3VycmVuY3koZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5oaXN0b3JpY2FsRGF0YSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwMDAwXCIgLz5cclxuICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJjaHJvbWU9MVwiIC8+XHJcblxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CdW5nZWVcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICBcclxuICAgICAgICAgIDx0aXRsZT7ruYTtirjsvZTsnbgg7IKs7J207Yq4IO2FjOyKpO2KuDwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiYml0Y29pblwiIC8+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBjb250ZW50PVwi7YWM7Iqk7Yq4IOyaqeuPhOuhnCDsgqzsmqntlZjquLAg7JyE7ZWcIOyCrOydtO2KuCDsnoXri4jri6QuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgICAgICA8SGVhZGVyIHRpdGxlPVwi67mE7Yq47L2U7J24IOyCrOydtO2KuCDthYzsiqTtirhcIiAvPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxOCwgZm9udEZhbWlseTogJ0J1bmdlZSd9fT4gU2VsZWN0IHlvdXIgY3VycmVuY3k6IDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS5jdXJyZW5jeX0gb25DaGFuZ2U9e3RoaXMub25DdXJyZW5jeVNlbGVjdH0+XHJcbiAgICAgICAgICAgICAge2N1cnJlbmNpZXMubWFwKChvYmosIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2Ake2luZGV4fS0ke29iai5jb3VudHJ5fWB9IHZhbHVlPXtvYmouY3VycmVuY3l9PiB7b2JqLmNvdW50cnl9IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW5jeSAhPT0gJ1BIUCcgJiYgKDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpbmtcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldEN1cnJlbmN5KCdQSFAnKX0gc3R5bGU9e3tjb2xvcjogXCJibGFja1wiLCBmb250U2l6ZTogMTYsIGZvbnRGYW1pbHk6ICdCdW5nZWUnfX0+IFtDTElDSyBIRVJFIFRPIFJFU0VUXSA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAxMH19PlxyXG4gICAgICAgICAgICA8TGluZSBkYXRhPXt0aGlzLmZvcm1hdENoYXJ0RGF0YSgpfSBoZWlnaHQ9ezI1MH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==