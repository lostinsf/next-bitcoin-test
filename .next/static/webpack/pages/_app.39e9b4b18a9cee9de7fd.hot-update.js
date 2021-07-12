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
          href: "%PUBLIC_URL%/manifest.json",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 11
          }
        }), __jsx("link", {
          rel: "shortcut icon",
          href: "%PUBLIC_URL%/favicon.ico",
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


/***/ }),

/***/ "./pages/App.css":
/*!***********************!*\
  !*** ./pages/App.css ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./App.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./App.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/App.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./App.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/App.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/App.css":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/App.css ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1, h2, h3, h4, h5, h6 {\r\n  font-family: 'Bungee', cursive;\r\n}\r\n\r\nspan.bungee { font-family: 'Bungee', cursive; }\r\n\r\n.app {\r\n  max-width: 720px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.header { font-size: 60px; font-family: 'Bungee', cursive; }\r\n.subheader { font-size: 20px; font-family: 'Bungee', cursive; }\r\n\r\na.link {\r\n  text-decoration: none;\r\n  color: #ff1769;\r\n}\r\n\r\na.link:hover {\r\n  text-decoration: none;\r\n  border-bottom: 2px solid #000;\r\n}\r\n\r\n.select-container select {\r\n  padding: 10px;\r\n  border: none;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  background: transparent;\r\n  background-image: none;\r\n  -webkit-appearance: none;\r\n  font-family: 'Bungee', cursive;\r\n  cursor: pointer;\r\n  color: #ff1769;\r\n  font-size: 18px;\r\n  max-width: 210px;\r\n  white-space:nowrap;\r\n  text-overflow:ellipsis;\r\n}\r\n\r\n.select-container select:focus {\r\n  outline: none;\r\n}", "",{"version":3,"sources":["webpack://pages/App.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;AAChC;;AAEA,cAAc,8BAA8B,EAAE;;AAE9C;EACE,gBAAgB;EAChB,cAAc;EACd,kBAAkB;AACpB;;AAEA,UAAU,eAAe,EAAE,8BAA8B,EAAE;AAC3D,aAAa,eAAe,EAAE,8BAA8B,EAAE;;AAE9D;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,wBAAgB;UAAhB,gBAAgB;EAChB,uBAAuB;EACvB,sBAAsB;EACtB,wBAAwB;EACxB,8BAA8B;EAC9B,eAAe;EACf,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf","sourcesContent":["h1, h2, h3, h4, h5, h6 {\r\n  font-family: 'Bungee', cursive;\r\n}\r\n\r\nspan.bungee { font-family: 'Bungee', cursive; }\r\n\r\n.app {\r\n  max-width: 720px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.header { font-size: 60px; font-family: 'Bungee', cursive; }\r\n.subheader { font-size: 20px; font-family: 'Bungee', cursive; }\r\n\r\na.link {\r\n  text-decoration: none;\r\n  color: #ff1769;\r\n}\r\n\r\na.link:hover {\r\n  text-decoration: none;\r\n  border-bottom: 2px solid #000;\r\n}\r\n\r\n.select-container select {\r\n  padding: 10px;\r\n  border: none;\r\n  box-shadow: none;\r\n  background: transparent;\r\n  background-image: none;\r\n  -webkit-appearance: none;\r\n  font-family: 'Bungee', cursive;\r\n  cursor: pointer;\r\n  color: #ff1769;\r\n  font-size: 18px;\r\n  max-width: 210px;\r\n  white-space:nowrap;\r\n  text-overflow:ellipsis;\r\n}\r\n\r\n.select-container select:focus {\r\n  outline: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQXBwLmNzcz85Y2ExIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9BcHAuY3NzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJjdXJyZW5jaWVzIiwiQXBwIiwicHJvcHMiLCJDaGFydCIsInN0YXRlIiwiaGlzdG9yaWNhbERhdGEiLCJjdXJyZW5jeSIsImJhc2VVcmwiLCJvbkN1cnJlbmN5U2VsZWN0IiwiYmluZCIsImdldEJpdGNvaW5EYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0U3RhdGUiLCJlIiwiYnBpIiwibGFiZWxzIiwiXyIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJkYXRhc2V0cyIsImxhYmVsIiwiZmlsbCIsImxpbmVUZW5zaW9uIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJDYXBTdHlsZSIsImJvcmRlckRhc2giLCJib3JkZXJEYXNoT2Zmc2V0IiwiYm9yZGVySm9pblN0eWxlIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50QmFja2dyb3VuZENvbG9yIiwicG9pbnRCb3JkZXJXaWR0aCIsInBvaW50SG92ZXJSYWRpdXMiLCJwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yIiwicG9pbnRIb3ZlckJvcmRlckNvbG9yIiwicG9pbnRIb3ZlckJvcmRlcldpZHRoIiwicG9pbnRSYWRpdXMiLCJwb2ludEhpdFJhZGl1cyIsImRhdGEiLCJzZXRDdXJyZW5jeSIsInRhcmdldCIsInZhbHVlIiwiZm9udFNpemUiLCJmb250RmFtaWx5Iiwib2JqIiwiaW5kZXgiLCJjb3VudHJ5IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJmb3JtYXRDaGFydERhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7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QUF1QixxQkFBcUIseUJBQXlCLEtBQUssaUJBQWlCLGlCQUFpQixnQ0FBZ0MsRUFBRSxnQkFBZ0IsaUJBQWlCLGdDQUFnQyxFQUFFLGdCQUFnQiw0QkFBNEIscUJBQXFCLEtBQUssc0JBQXNCLDRCQUE0QixvQ0FBb0MsS0FBSyxrQ0FBa0Msb0JBQW9CLG1CQUFtQiwrQkFBK0IsK0JBQStCLDhCQUE4Qiw2QkFBNkIsK0JBQStCLHFDQUFxQyxzQkFBc0IscUJBQXFCLHNCQUFzQix1QkFBdUIseUJBQXlCLDZCQUE2QixLQUFLLHdDQUF3QyxvQkFBb0IsS0FBSyxPQUFPLDhFQUE4RSxZQUFZLE9BQU8sdUJBQXVCLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxnQ0FBZ0Msa0NBQWtDLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxpREFBaUQscUNBQXFDLEtBQUsscUJBQXFCLGdDQUFnQyxFQUFFLGNBQWMsdUJBQXVCLHFCQUFxQix5QkFBeUIsS0FBSyxpQkFBaUIsaUJBQWlCLGdDQUFnQyxFQUFFLGdCQUFnQixpQkFBaUIsZ0NBQWdDLEVBQUUsZ0JBQWdCLDRCQUE0QixxQkFBcUIsS0FBSyxzQkFBc0IsNEJBQTRCLG9DQUFvQyxLQUFLLGtDQUFrQyxvQkFBb0IsbUJBQW1CLHVCQUF1Qiw4QkFBOEIsNkJBQTZCLCtCQUErQixxQ0FBcUMsc0JBQXNCLHFCQUFxQixzQkFBc0IsdUJBQXVCLHlCQUF5Qiw2QkFBNkIsS0FBSyx3Q0FBd0Msb0JBQW9CLEtBQUssbUJBQW1CO0FBQ2g5RTtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzllOWI0YjE4YTljZWU5ZGU3ZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IExpbmUsIENoYXJ0IH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgY3VycmVuY2llcyBmcm9tICcuL3N1cHBvcnRlZC1jdXJyZW5jaWVzLmpzb24nO1xyXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcclxuaW1wb3J0ICcuL0FwcC5jc3MnXHJcblxyXG5jb25zb2xlLmxvZyhjdXJyZW5jaWVzKVxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgIC8vIGNoYXJ0LmpzIGRlZmF1bHRzXHJcbiAgICBDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRDb2xvciA9ICcjMDAwJztcclxuICAgIENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udFNpemUgPSAxNjtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBoaXN0b3JpY2FsRGF0YTogbnVsbCwgXHJcbiAgICAgIGN1cnJlbmN5OiBcIlBIUFwiLFxyXG4gICAgICBiYXNlVXJsOiAnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tLydcclxuICAgIH1cclxuICAgIHRoaXMub25DdXJyZW5jeVNlbGVjdCA9IHRoaXMub25DdXJyZW5jeVNlbGVjdC5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICB0aGlzLmdldEJpdGNvaW5EYXRhKClcclxuICB9XHJcblxyXG4gIGdldEJpdGNvaW5EYXRhICgpIHtcclxuXHJcbiAgICBjb25zdCB7YmFzZVVybCwgY3VycmVuY3l9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIGZldGNoKGAke2Jhc2VVcmx9djEvYnBpL2hpc3RvcmljYWwvY2xvc2UuanNvbj9jdXJyZW5jeT0ke2N1cnJlbmN5fWApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oaGlzdG9yaWNhbERhdGEgPT4gdGhpcy5zZXRTdGF0ZSh7aGlzdG9yaWNhbERhdGF9KSlcclxuICAgICAgLmNhdGNoKGUgPT4gZSlcclxuICB9XHJcblxyXG4gIGZvcm1hdENoYXJ0RGF0YSAoKSB7XHJcbiAgICBjb25zdCB7YnBpfSA9IHRoaXMuc3RhdGUuaGlzdG9yaWNhbERhdGFcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYWJlbHM6IF8ubWFwKF8ua2V5cyhicGkpLCBkYXRlID0+IG1vbWVudChkYXRlKS5mb3JtYXQoXCJsbFwiKSksXHJcbiAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQml0Y29pblwiLFxyXG4gICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMC40KScsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXHJcbiAgICAgICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxyXG4gICAgICAgICAgYm9yZGVyRGFzaDogW10sXHJcbiAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXHJcbiAgICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXHJcbiAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcclxuICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcclxuICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgyMjAsMjIwLDIyMCwxKScsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcclxuICAgICAgICAgIGRhdGE6IF8udmFsdWVzKGJwaSlcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEN1cnJlbmN5IChjdXJyZW5jeSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVuY3l9LCB0aGlzLmdldEJpdGNvaW5EYXRhKVxyXG4gIH1cclxuXHJcbiAgb25DdXJyZW5jeVNlbGVjdCAoZSkge1xyXG4gICAgdGhpcy5zZXRDdXJyZW5jeShlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmhpc3RvcmljYWxEYXRhKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cImNocm9tZT0xXCIgLz5cclxuXHJcbiAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIlUFVCTElDX1VSTCUvbWFuaWZlc3QuanNvblwiIC8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIiVQVUJMSUNfVVJMJS9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJ1bmdlZVwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gIFxyXG4gICAgICAgICAgPHRpdGxlPuu5hO2KuOy9lOyduCDsgqzsnbTtirgg7YWM7Iqk7Yq4PC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJiaXRjb2luXCIgLz5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCLthYzsiqTtirgg7Jqp64+E66GcIOyCrOyaqe2VmOq4sCDsnITtlZwg7IKs7J207Yq4IOyeheuLiOuLpC5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgICAgIDxIZWFkZXIgdGl0bGU9XCJCSVRDT0lOIFBSSUNFIElOREVYXCIgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogMTgsIGZvbnRGYW1pbHk6ICdCdW5nZWUnfX0+IFNlbGVjdCB5b3VyIGN1cnJlbmN5OiA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUuY3VycmVuY3l9IG9uQ2hhbmdlPXt0aGlzLm9uQ3VycmVuY3lTZWxlY3R9PlxyXG4gICAgICAgICAgICAgIHtjdXJyZW5jaWVzLm1hcCgob2JqLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtgJHtpbmRleH0tJHtvYmouY291bnRyeX1gfSB2YWx1ZT17b2JqLmN1cnJlbmN5fT4ge29iai5jb3VudHJ5fSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVuY3kgIT09ICdQSFAnICYmICg8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaW5rXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRDdXJyZW5jeSgnUEhQJyl9IHN0eWxlPXt7Y29sb3I6IFwiYmxhY2tcIiwgZm9udFNpemU6IDE2LCBmb250RmFtaWx5OiAnQnVuZ2VlJ319PiBbQ0xJQ0sgSEVSRSBUTyBSRVNFVF0gPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogMTB9fT5cclxuICAgICAgICAgICAgPExpbmUgZGF0YT17dGhpcy5mb3JtYXRDaGFydERhdGEoKX0gaGVpZ2h0PXsyNTB9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9BcHAuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL0FwcC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL0FwcC5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxyXFxuICBmb250LWZhbWlseTogJ0J1bmdlZScsIGN1cnNpdmU7XFxyXFxufVxcclxcblxcclxcbnNwYW4uYnVuZ2VlIHsgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBjdXJzaXZlOyB9XFxyXFxuXFxyXFxuLmFwcCB7XFxyXFxuICBtYXgtd2lkdGg6IDcyMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgeyBmb250LXNpemU6IDYwcHg7IGZvbnQtZmFtaWx5OiAnQnVuZ2VlJywgY3Vyc2l2ZTsgfVxcclxcbi5zdWJoZWFkZXIgeyBmb250LXNpemU6IDIwcHg7IGZvbnQtZmFtaWx5OiAnQnVuZ2VlJywgY3Vyc2l2ZTsgfVxcclxcblxcclxcbmEubGluayB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogI2ZmMTc2OTtcXHJcXG59XFxyXFxuXFxyXFxuYS5saW5rOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQnVuZ2VlJywgY3Vyc2l2ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmYxNzY5O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWF4LXdpZHRoOiAyMTBweDtcXHJcXG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtY29udGFpbmVyIHNlbGVjdDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcGFnZXMvQXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxjQUFjLDhCQUE4QixFQUFFOztBQUU5QztFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBLFVBQVUsZUFBZSxFQUFFLDhCQUE4QixFQUFFO0FBQzNELGFBQWEsZUFBZSxFQUFFLDhCQUE4QixFQUFFOztBQUU5RDtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osd0JBQWdCO1VBQWhCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxyXFxuICBmb250LWZhbWlseTogJ0J1bmdlZScsIGN1cnNpdmU7XFxyXFxufVxcclxcblxcclxcbnNwYW4uYnVuZ2VlIHsgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBjdXJzaXZlOyB9XFxyXFxuXFxyXFxuLmFwcCB7XFxyXFxuICBtYXgtd2lkdGg6IDcyMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgeyBmb250LXNpemU6IDYwcHg7IGZvbnQtZmFtaWx5OiAnQnVuZ2VlJywgY3Vyc2l2ZTsgfVxcclxcbi5zdWJoZWFkZXIgeyBmb250LXNpemU6IDIwcHg7IGZvbnQtZmFtaWx5OiAnQnVuZ2VlJywgY3Vyc2l2ZTsgfVxcclxcblxcclxcbmEubGluayB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogI2ZmMTc2OTtcXHJcXG59XFxyXFxuXFxyXFxuYS5saW5rOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ0J1bmdlZScsIGN1cnNpdmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmMTc2OTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1heC13aWR0aDogMjEwcHg7XFxyXFxuICB3aGl0ZS1zcGFjZTpub3dyYXA7XFxyXFxuICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Q6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=