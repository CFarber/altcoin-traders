// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"EjUD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FAQSLimitedData = exports.FAQSData = void 0;
var FAQSData = [{
  id: 0,
  question: "Hoe werkt het?",
  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius lorem lacus, vel sodales lectus tempor in. Nulla et urna quis nisi congue rhoncus. Etiam id posuere lectus. Ut rhoncus ut libero non ultrices. Quisque malesuada dolor eget posuere convallis. Pellentesque vitae massa fermentum nunc porttitor tempor vitae gravida mi. Nullam leo lectus, pellentesque eu pretium a, interdum porta dui. Ut auctor dapibus rhoncus. Pellentesque vel metus non ante molestie lacinia sed vel sem."
}, {
  id: 1,
  question: "Vraag 2",
  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius lorem lacus, vel sodales lectus tempor in. Nulla et urna quis nisi congue rhoncus. Etiam id posuere lectus. Ut rhoncus ut libero non ultrices. Quisque malesuada dolor eget posuere convallis. Pellentesque vitae massa fermentum nunc porttitor tempor vitae gravida mi. Nullam leo lectus, pellentesque eu pretium a, interdum porta dui. Ut auctor dapibus rhoncus. Pellentesque vel metus non ante molestie lacinia sed vel sem."
}, {
  id: 2,
  question: "Vraag 3",
  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius lorem lacus, vel sodales lectus tempor in. Nulla et urna quis nisi congue rhoncus. Etiam id posuere lectus. Ut rhoncus ut libero non ultrices. Quisque malesuada dolor eget posuere convallis. Pellentesque vitae massa fermentum nunc porttitor tempor vitae gravida mi. Nullam leo lectus, pellentesque eu pretium a, interdum porta dui. Ut auctor dapibus rhoncus. Pellentesque vel metus non ante molestie lacinia sed vel sem."
}, {
  id: 3,
  question: "Vraag 4",
  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius lorem lacus, vel sodales lectus tempor in. Nulla et urna quis nisi congue rhoncus. Etiam id posuere lectus. Ut rhoncus ut libero non ultrices. Quisque malesuada dolor eget posuere convallis. Pellentesque vitae massa fermentum nunc porttitor tempor vitae gravida mi. Nullam leo lectus, pellentesque eu pretium a, interdum porta dui. Ut auctor dapibus rhoncus. Pellentesque vel metus non ante molestie lacinia sed vel sem."
}, {
  id: 4,
  question: "Vraag 5",
  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius lorem lacus, vel sodales lectus tempor in. Nulla et urna quis nisi congue rhoncus. Etiam id posuere lectus. Ut rhoncus ut libero non ultrices. Quisque malesuada dolor eget posuere convallis. Pellentesque vitae massa fermentum nunc porttitor tempor vitae gravida mi. Nullam leo lectus, pellentesque eu pretium a, interdum porta dui. Ut auctor dapibus rhoncus. Pellentesque vel metus non ante molestie lacinia sed vel sem."
}, {
  id: 5,
  question: "Vraag 6",
  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius lorem lacus, vel sodales lectus tempor in. Nulla et urna quis nisi congue rhoncus. Etiam id posuere lectus. Ut rhoncus ut libero non ultrices. Quisque malesuada dolor eget posuere convallis. Pellentesque vitae massa fermentum nunc porttitor tempor vitae gravida mi. Nullam leo lectus, pellentesque eu pretium a, interdum porta dui. Ut auctor dapibus rhoncus. Pellentesque vel metus non ante molestie lacinia sed vel sem."
}, {
  id: 6,
  question: "Vraag 7",
  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius lorem lacus, vel sodales lectus tempor in. Nulla et urna quis nisi congue rhoncus. Etiam id posuere lectus. Ut rhoncus ut libero non ultrices. Quisque malesuada dolor eget posuere convallis. Pellentesque vitae massa fermentum nunc porttitor tempor vitae gravida mi. Nullam leo lectus, pellentesque eu pretium a, interdum porta dui. Ut auctor dapibus rhoncus. Pellentesque vel metus non ante molestie lacinia sed vel sem."
}];
exports.FAQSData = FAQSData;
var FAQSLimitedData = [{
  id: 0,
  question: "Hoe werkt het?",
  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius lorem lacus, vel sodales lectus tempor in. Nulla et urna quis nisi congue rhoncus. Etiam id posuere lectus. Ut rhoncus ut libero non ultrices. Quisque malesuada dolor eget posuere convallis. Pellentesque vitae massa fermentum nunc porttitor tempor vitae gravida mi. Nullam leo lectus, pellentesque eu pretium a, interdum porta dui. Ut auctor dapibus rhoncus. Pellentesque vel metus non ante molestie lacinia sed vel sem."
}, {
  id: 1,
  question: "Vraag 2",
  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius lorem lacus, vel sodales lectus tempor in. Nulla et urna quis nisi congue rhoncus. Etiam id posuere lectus. Ut rhoncus ut libero non ultrices. Quisque malesuada dolor eget posuere convallis. Pellentesque vitae massa fermentum nunc porttitor tempor vitae gravida mi. Nullam leo lectus, pellentesque eu pretium a, interdum porta dui. Ut auctor dapibus rhoncus. Pellentesque vel metus non ante molestie lacinia sed vel sem."
}, {
  id: 2,
  question: "Vraag 3",
  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius lorem lacus, vel sodales lectus tempor in. Nulla et urna quis nisi congue rhoncus. Etiam id posuere lectus. Ut rhoncus ut libero non ultrices. Quisque malesuada dolor eget posuere convallis. Pellentesque vitae massa fermentum nunc porttitor tempor vitae gravida mi. Nullam leo lectus, pellentesque eu pretium a, interdum porta dui. Ut auctor dapibus rhoncus. Pellentesque vel metus non ante molestie lacinia sed vel sem."
}];
exports.FAQSLimitedData = FAQSLimitedData;
},{}],"E4wQ":[function(require,module,exports) {
module.exports = "plus.1fc9111b.svg";
},{}],"tyAN":[function(require,module,exports) {
"use strict";

var _faqs = require("/data/faqs.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _React = React,
    useState = _React.useState,
    Fragment = _React.Fragment;

var FAQS = function FAQS(_ref) {
  var fullData = _ref.fullData,
      limitedData = _ref.limitedData;
  var limited = document.querySelector("#FAQS").getAttribute("limited");

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var toggleFAQ = function toggleFAQ(id) {
    setOpen(function (prevopen) {
      return _objectSpread(_objectSpread({}, prevopen), {}, _defineProperty({}, id, !prevopen[id]));
    });
  };

  var data = limited ? limitedData : fullData;

  var FAQ = function FAQ(_ref2) {
    var id = _ref2.id,
        question = _ref2.question,
        answer = _ref2.answer;
    return /*#__PURE__*/React.createElement("div", {
      className: "faq-bar",
      onClick: function onClick() {
        return toggleFAQ(id);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "faq-bar faq-bar__heading"
    }, /*#__PURE__*/React.createElement("strong", null, question), /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
      src: require('/assets/icons/plus.svg'),
      alt: "plus"
    }))), open[id] ? /*#__PURE__*/React.createElement("p", null, answer) : null);
  };

  return /*#__PURE__*/React.createElement(Fragment, null, data.map(function (item) {
    return /*#__PURE__*/React.createElement(FAQ, {
      key: item.id,
      id: item.id,
      question: item.question,
      answer: item.answer
    });
  }));
};

var domContainer = document.querySelector('#FAQS');
ReactDOM.render( /*#__PURE__*/React.createElement(FAQS, {
  fullData: _faqs.FAQSData,
  limitedData: _faqs.FAQSLimitedData
}), domContainer);
},{"/data/faqs.js":"EjUD","/assets/icons/plus.svg":"E4wQ"}]},{},["tyAN"], null)
//# sourceMappingURL=faq-component.8bfd78f8.js.map