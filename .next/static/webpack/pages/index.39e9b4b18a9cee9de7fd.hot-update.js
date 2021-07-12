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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQXBwLmNzcz85Y2ExIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9BcHAuY3NzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJjdXJyZW5jaWVzIiwiQXBwIiwicHJvcHMiLCJDaGFydCIsInN0YXRlIiwiaGlzdG9yaWNhbERhdGEiLCJjdXJyZW5jeSIsImJhc2VVcmwiLCJvbkN1cnJlbmN5U2VsZWN0IiwiYmluZCIsImdldEJpdGNvaW5EYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0U3RhdGUiLCJlIiwiYnBpIiwibGFiZWxzIiwiXyIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJkYXRhc2V0cyIsImxhYmVsIiwiZmlsbCIsImxpbmVUZW5zaW9uIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJDYXBTdHlsZSIsImJvcmRlckRhc2giLCJib3JkZXJEYXNoT2Zmc2V0IiwiYm9yZGVySm9pblN0eWxlIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50QmFja2dyb3VuZENvbG9yIiwicG9pbnRCb3JkZXJXaWR0aCIsInBvaW50SG92ZXJSYWRpdXMiLCJwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yIiwicG9pbnRIb3ZlckJvcmRlckNvbG9yIiwicG9pbnRIb3ZlckJvcmRlcldpZHRoIiwicG9pbnRSYWRpdXMiLCJwb2ludEhpdFJhZGl1cyIsImRhdGEiLCJzZXRDdXJyZW5jeSIsInRhcmdldCIsInZhbHVlIiwiZm9udFNpemUiLCJmb250RmFtaWx5Iiwib2JqIiwiaW5kZXgiLCJjb3VudHJ5IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJmb3JtYXRDaGFydERhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7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QUF1QixxQkFBcUIseUJBQXlCLEtBQUssaUJBQWlCLGlCQUFpQixnQ0FBZ0MsRUFBRSxnQkFBZ0IsaUJBQWlCLGdDQUFnQyxFQUFFLGdCQUFnQiw0QkFBNEIscUJBQXFCLEtBQUssc0JBQXNCLDRCQUE0QixvQ0FBb0MsS0FBSyxrQ0FBa0Msb0JBQW9CLG1CQUFtQiwrQkFBK0IsK0JBQStCLDhCQUE4Qiw2QkFBNkIsK0JBQStCLHFDQUFxQyxzQkFBc0IscUJBQXFCLHNCQUFzQix1QkFBdUIseUJBQXlCLDZCQUE2QixLQUFLLHdDQUF3QyxvQkFBb0IsS0FBSyxPQUFPLDhFQUE4RSxZQUFZLE9BQU8sdUJBQXVCLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxnQ0FBZ0Msa0NBQWtDLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxpREFBaUQscUNBQXFDLEtBQUsscUJBQXFCLGdDQUFnQyxFQUFFLGNBQWMsdUJBQXVCLHFCQUFxQix5QkFBeUIsS0FBSyxpQkFBaUIsaUJBQWlCLGdDQUFnQyxFQUFFLGdCQUFnQixpQkFBaUIsZ0NBQWdDLEVBQUUsZ0JBQWdCLDRCQUE0QixxQkFBcUIsS0FBSyxzQkFBc0IsNEJBQTRCLG9DQUFvQyxLQUFLLGtDQUFrQyxvQkFBb0IsbUJBQW1CLHVCQUF1Qiw4QkFBOEIsNkJBQTZCLCtCQUErQixxQ0FBcUMsc0JBQXNCLHFCQUFxQixzQkFBc0IsdUJBQXVCLHlCQUF5Qiw2QkFBNkIsS0FBSyx3Q0FBd0Msb0JBQW9CLEtBQUssbUJBQW1CO0FBQ2g5RTtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM5ZTliNGIxOGE5Y2VlOWRlN2ZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBMaW5lLCBDaGFydCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IGN1cnJlbmNpZXMgZnJvbSAnLi9zdXBwb3J0ZWQtY3VycmVuY2llcy5qc29uJztcclxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCAnLi9BcHAuY3NzJ1xyXG5cclxuY29uc29sZS5sb2coY3VycmVuY2llcylcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAvLyBjaGFydC5qcyBkZWZhdWx0c1xyXG4gICAgQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250Q29sb3IgPSAnIzAwMCc7XHJcbiAgICBDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRTaXplID0gMTY7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaGlzdG9yaWNhbERhdGE6IG51bGwsIFxyXG4gICAgICBjdXJyZW5jeTogXCJQSFBcIixcclxuICAgICAgYmFzZVVybDogJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS8nXHJcbiAgICB9XHJcbiAgICB0aGlzLm9uQ3VycmVuY3lTZWxlY3QgPSB0aGlzLm9uQ3VycmVuY3lTZWxlY3QuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgdGhpcy5nZXRCaXRjb2luRGF0YSgpXHJcbiAgfVxyXG5cclxuICBnZXRCaXRjb2luRGF0YSAoKSB7XHJcblxyXG4gICAgY29uc3Qge2Jhc2VVcmwsIGN1cnJlbmN5fSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICBmZXRjaChgJHtiYXNlVXJsfXYxL2JwaS9oaXN0b3JpY2FsL2Nsb3NlLmpzb24/Y3VycmVuY3k9JHtjdXJyZW5jeX1gKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGhpc3RvcmljYWxEYXRhID0+IHRoaXMuc2V0U3RhdGUoe2hpc3RvcmljYWxEYXRhfSkpXHJcbiAgICAgIC5jYXRjaChlID0+IGUpXHJcbiAgfVxyXG5cclxuICBmb3JtYXRDaGFydERhdGEgKCkge1xyXG4gICAgY29uc3Qge2JwaX0gPSB0aGlzLnN0YXRlLmhpc3RvcmljYWxEYXRhXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGFiZWxzOiBfLm1hcChfLmtleXMoYnBpKSwgZGF0ZSA9PiBtb21lbnQoZGF0ZSkuZm9ybWF0KFwibGxcIikpLFxyXG4gICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkJpdGNvaW5cIixcclxuICAgICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDAuNCknLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxyXG4gICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcclxuICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxyXG4gICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXHJcbiAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcclxuICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXHJcbiAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXHJcbiAgICAgICAgICBkYXRhOiBfLnZhbHVlcyhicGkpXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDdXJyZW5jeSAoY3VycmVuY3kpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbmN5fSwgdGhpcy5nZXRCaXRjb2luRGF0YSlcclxuICB9XHJcblxyXG4gIG9uQ3VycmVuY3lTZWxlY3QgKGUpIHtcclxuICAgIHRoaXMuc2V0Q3VycmVuY3koZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5oaXN0b3JpY2FsRGF0YSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwMDAwXCIgLz5cclxuICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJjaHJvbWU9MVwiIC8+XHJcblxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiJVBVQkxJQ19VUkwlL21hbmlmZXN0Lmpzb25cIiAvPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIlUFVCTElDX1VSTCUvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CdW5nZWVcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICBcclxuICAgICAgICAgIDx0aXRsZT7ruYTtirjsvZTsnbgg7IKs7J207Yq4IO2FjOyKpO2KuDwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiYml0Y29pblwiIC8+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBjb250ZW50PVwi7YWM7Iqk7Yq4IOyaqeuPhOuhnCDsgqzsmqntlZjquLAg7JyE7ZWcIOyCrOydtO2KuCDsnoXri4jri6QuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgICAgICA8SGVhZGVyIHRpdGxlPVwiQklUQ09JTiBQUklDRSBJTkRFWFwiIC8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6IDE4LCBmb250RmFtaWx5OiAnQnVuZ2VlJ319PiBTZWxlY3QgeW91ciBjdXJyZW5jeTogPC9zcGFuPlxyXG4gICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbmN5fSBvbkNoYW5nZT17dGhpcy5vbkN1cnJlbmN5U2VsZWN0fT5cclxuICAgICAgICAgICAgICB7Y3VycmVuY2llcy5tYXAoKG9iaiwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YCR7aW5kZXh9LSR7b2JqLmNvdW50cnl9YH0gdmFsdWU9e29iai5jdXJyZW5jeX0+IHtvYmouY291bnRyeX0gPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbmN5ICE9PSAnUEhQJyAmJiAoPGRpdj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibGlua1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0Q3VycmVuY3koJ1BIUCcpfSBzdHlsZT17e2NvbG9yOiBcImJsYWNrXCIsIGZvbnRTaXplOiAxNiwgZm9udEZhbWlseTogJ0J1bmdlZSd9fT4gW0NMSUNLIEhFUkUgVE8gUkVTRVRdIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IDEwfX0+XHJcbiAgICAgICAgICAgIDxMaW5lIGRhdGE9e3RoaXMuZm9ybWF0Q2hhcnREYXRhKCl9IGhlaWdodD17MjUwfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vQXBwLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9BcHAuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9BcHAuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcclxcbiAgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBjdXJzaXZlO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLmJ1bmdlZSB7IGZvbnQtZmFtaWx5OiAnQnVuZ2VlJywgY3Vyc2l2ZTsgfVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgbWF4LXdpZHRoOiA3MjBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHsgZm9udC1zaXplOiA2MHB4OyBmb250LWZhbWlseTogJ0J1bmdlZScsIGN1cnNpdmU7IH1cXHJcXG4uc3ViaGVhZGVyIHsgZm9udC1zaXplOiAyMHB4OyBmb250LWZhbWlseTogJ0J1bmdlZScsIGN1cnNpdmU7IH1cXHJcXG5cXHJcXG5hLmxpbmsge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmZjE3Njk7XFxyXFxufVxcclxcblxcclxcbmEubGluazpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jb250YWluZXIgc2VsZWN0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ0J1bmdlZScsIGN1cnNpdmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmMTc2OTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1heC13aWR0aDogMjEwcHg7XFxyXFxuICB3aGl0ZS1zcGFjZTpub3dyYXA7XFxyXFxuICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Q6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3BhZ2VzL0FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsY0FBYyw4QkFBOEIsRUFBRTs7QUFFOUM7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQSxVQUFVLGVBQWUsRUFBRSw4QkFBOEIsRUFBRTtBQUMzRCxhQUFhLGVBQWUsRUFBRSw4QkFBOEIsRUFBRTs7QUFFOUQ7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHdCQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcclxcbiAgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBjdXJzaXZlO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLmJ1bmdlZSB7IGZvbnQtZmFtaWx5OiAnQnVuZ2VlJywgY3Vyc2l2ZTsgfVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgbWF4LXdpZHRoOiA3MjBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHsgZm9udC1zaXplOiA2MHB4OyBmb250LWZhbWlseTogJ0J1bmdlZScsIGN1cnNpdmU7IH1cXHJcXG4uc3ViaGVhZGVyIHsgZm9udC1zaXplOiAyMHB4OyBmb250LWZhbWlseTogJ0J1bmdlZScsIGN1cnNpdmU7IH1cXHJcXG5cXHJcXG5hLmxpbmsge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmZjE3Njk7XFxyXFxufVxcclxcblxcclxcbmEubGluazpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jb250YWluZXIgc2VsZWN0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBjdXJzaXZlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6ICNmZjE3Njk7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXgtd2lkdGg6IDIxMHB4O1xcclxcbiAgd2hpdGUtc3BhY2U6bm93cmFwO1xcclxcbiAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jb250YWluZXIgc2VsZWN0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9