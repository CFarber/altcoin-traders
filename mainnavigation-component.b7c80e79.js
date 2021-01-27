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
})({"cpRJ":[function(require,module,exports) {
module.exports = "x.09048a5f.svg";
},{}],"KsIM":[function(require,module,exports) {
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var e = React.createElement;

var MenuItem = function MenuItem(props) {
  var name = props.name,
      label = props.label,
      url = props.url,
      active = props.active;
  if (active === name) return /*#__PURE__*/React.createElement("a", {
    href: url,
    className: "link-active"
  }, /*#__PURE__*/React.createElement("li", null, label));
  return /*#__PURE__*/React.createElement("a", {
    href: url
  }, /*#__PURE__*/React.createElement("li", null, label));
};

var MainNavigation = /*#__PURE__*/function (_React$Component) {
  _inherits(MainNavigation, _React$Component);

  var _super = _createSuper(MainNavigation);

  function MainNavigation(props) {
    var _this;

    _classCallCheck(this, MainNavigation);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleClass", function () {
      _this.setState({
        active: !_this.state.active
      });
    });

    _this.state = {
      active: false,
      pages: [{
        id: 0,
        name: "education-visitor",
        label: "Education",
        url: "./education-visitor.html",
        show: true
      }, {
        id: 1,
        name: "trading-visitor",
        label: "Trading",
        url: "./trading-visitor.html",
        show: true
      }, {
        id: 2,
        name: "free-content",
        label: "Free content",
        url: "./free-content.html",
        show: true
      }, {
        id: 3,
        name: "about-us",
        label: "About us",
        url: "./about-us.html",
        show: true
      }, {
        id: 4,
        name: "pricing",
        label: "Pricing",
        url: "./pricing.html",
        show: true
      }, {
        id: 5,
        name: "support",
        label: "Support",
        url: "./support.html",
        show: true
      }]
    };
    return _this;
  }

  _createClass(MainNavigation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", {
        className: "main-navigation-bar"
      }, /*#__PURE__*/React.createElement("div", {
        className: "main-navigation-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "main-navigation-online"
      }, /*#__PURE__*/React.createElement("div", {
        className: "main-navigation-online__container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ac-membersonline"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ac-membersonline__indicator"
      }, " "), /*#__PURE__*/React.createElement("span", null, this.props.members, " Members online")))), /*#__PURE__*/React.createElement("div", {
        className: "main-navigation-menu"
      }, /*#__PURE__*/React.createElement("div", {
        className: "main-navigation-menu__container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "main-navigation-menu__logo"
      }, /*#__PURE__*/React.createElement("a", {
        href: "/"
      }, /*#__PURE__*/React.createElement("span", {
        className: "font-bold color-lightgrey"
      }, "Altcoin Traders"))), /*#__PURE__*/React.createElement("div", {
        className: "main-navigation-menu__items"
      }, /*#__PURE__*/React.createElement("nav", {
        className: "menu-horizontal hide-on-tablet"
      }, /*#__PURE__*/React.createElement("ul", null, this.state.pages.map(function (item) {
        return /*#__PURE__*/React.createElement(MenuItem, {
          key: item.id,
          name: item.name,
          label: item.label,
          url: item.url,
          active: _this2.props.active
        });
      })))), /*#__PURE__*/React.createElement("div", {
        className: "hide-on-desktop"
      }, /*#__PURE__*/React.createElement("div", {
        className: "button button--color-dark mobile-shrink",
        onClick: this.toggleClass
      }, "Menu")), /*#__PURE__*/React.createElement("div", {
        className: "hide-on-tablet"
      }, /*#__PURE__*/React.createElement("a", {
        href: "./login.html"
      }, /*#__PURE__*/React.createElement("div", {
        className: "button button__small button--color-dark"
      }, "Sign in"))))), /*#__PURE__*/React.createElement("div", {
        className: this.state.active ? "main-navigation-mobile" : "main-navigation-mobile--close"
      }, /*#__PURE__*/React.createElement("div", {
        className: "main-navigation-mobile__container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "main-navigation-mobile__close"
      }, /*#__PURE__*/React.createElement("div", {
        className: "button button--color-primary button__small mobile-shrink",
        onClick: this.toggleClass
      }, /*#__PURE__*/React.createElement("figure", {
        className: "color-invert margin-right-8"
      }, /*#__PURE__*/React.createElement("img", {
        src: require('/assets/icons/x.svg')
      })), "Close")), /*#__PURE__*/React.createElement("nav", {
        className: "menu-verticle"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("a", {
        href: "/"
      }, /*#__PURE__*/React.createElement("li", null, "Home")), this.state.pages.map(function (item) {
        return /*#__PURE__*/React.createElement(MenuItem, {
          key: item.id,
          name: item.name,
          label: item.label,
          url: item.url,
          active: _this2.props.active
        });
      })))))));
    }
  }]);

  return MainNavigation;
}(React.Component);

document.querySelectorAll('#mainNavigation').forEach(function (domContainer) {
  var activeProp = domContainer.dataset.active;
  var membersProp = domContainer.dataset.members;
  var modeProp = domContainer.dataset.mode;
  ReactDOM.render(e(MainNavigation, {
    active: activeProp,
    members: membersProp,
    mode: modeProp
  }), domContainer);
});
},{"/assets/icons/x.svg":"cpRJ"}]},{},["KsIM"], null)
//# sourceMappingURL=mainnavigation-component.b7c80e79.js.map