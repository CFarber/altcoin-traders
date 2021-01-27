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
})({"SQbq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pricingData = void 0;
var pricingData = [{
  id: 0,
  name: "Trades only",
  time: "30 days",
  price: "0.015",
  accessSetups: true,
  accessPicks: true,
  videoLibary: false,
  livestreams: false,
  dailyUpdates: false,
  accessToTeam: false,
  popular: false
}, {
  id: 1,
  name: "Membership",
  time: "30 days",
  price: "0.022",
  accessSetups: true,
  accessPicks: true,
  videoLibary: true,
  livestreams: true,
  dailyUpdates: true,
  accessToTeam: true,
  popular: false
}, {
  id: 2,
  name: "Membership",
  time: "60 days",
  price: "0.056",
  accessSetups: true,
  accessPicks: true,
  videoLibary: true,
  livestreams: true,
  dailyUpdates: true,
  accessToTeam: true,
  popular: true
}, {
  id: 3,
  name: "Membership",
  time: "100 days",
  price: "0.0975",
  accessSetups: true,
  accessPicks: true,
  videoLibary: true,
  livestreams: true,
  dailyUpdates: true,
  accessToTeam: true,
  popular: false
}, {
  id: 4,
  name: "Membership",
  time: "1 year",
  price: "0.165",
  accessSetups: true,
  accessPicks: true,
  videoLibary: true,
  livestreams: true,
  dailyUpdates: true,
  accessToTeam: true,
  popular: false
}];
exports.pricingData = pricingData;
},{}],"fEsL":[function(require,module,exports) {
module.exports = "check.daddb446.svg";
},{}],"cpRJ":[function(require,module,exports) {
module.exports = "x.09048a5f.svg";
},{}],"pyE2":[function(require,module,exports) {
module.exports = "bitcoin--blue.6efeffde.svg";
},{}],"tJKo":[function(require,module,exports) {
'use strict';

var _pricing = require("./data/pricing");

var BenefitInclude = function BenefitInclude() {
  return /*#__PURE__*/React.createElement("div", {
    className: "icon icon icon__pricing-include"
  }, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
    src: require('/assets/icons/check.svg'),
    className: "icon--invert",
    alt: "Exclude"
  })));
};

var BenefitExclude = function BenefitExclude() {
  return /*#__PURE__*/React.createElement("div", {
    className: "icon icon__pricing-exclude"
  }, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
    src: require('/assets/icons/x.svg'),
    className: "icon--invert",
    alt: "Exclude"
  })));
};

var ConditionedIcon = function ConditionedIcon(props) {
  var state = props.state;
  if (state === true) return /*#__PURE__*/React.createElement(BenefitInclude, null);
  return /*#__PURE__*/React.createElement(BenefitExclude, null);
};

var RenderButtonType = function RenderButtonType(props) {
  var label = props.label,
      popular = props.popular;
  return popular ? /*#__PURE__*/React.createElement("div", {
    className: "button button__full button--color-secondary button--center"
  }, " ", label, " ") : /*#__PURE__*/React.createElement("div", {
    className: "button button__full button--color-primary button--center"
  }, " ", label, " ");
};

var PricingGridComponent = function PricingGridComponent(_ref) {
  var data = _ref.data;

  var PriceCard = function PriceCard(_ref2) {
    var name = _ref2.name,
        time = _ref2.time,
        price = _ref2.price,
        popular = _ref2.popular,
        accessSetups = _ref2.accessSetups,
        accessPicks = _ref2.accessPicks,
        videoLibary = _ref2.videoLibary,
        livestreams = _ref2.livestreams,
        dailyUpdates = _ref2.dailyUpdates,
        accessToTeam = _ref2.accessToTeam;
    return /*#__PURE__*/React.createElement("div", {
      className: popular ? 'price-card price-card--populaire' : 'price-card'
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
      className: "description"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "color-lightgrey font-regular"
    }, name), /*#__PURE__*/React.createElement("h5", {
      className: "color-lightgrey"
    }, time)), /*#__PURE__*/React.createElement("div", {
      className: "price-bitcoin"
    }, /*#__PURE__*/React.createElement("div", {
      className: "icon icon__small"
    }, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
      src: require('/assets/icons/bitcoin--blue.svg'),
      alt: "Bitcoin"
    }))), /*#__PURE__*/React.createElement("span", {
      className: "color-lightgrey"
    }, price))), /*#__PURE__*/React.createElement("div", {
      className: "price-card__benefits"
    }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ConditionedIcon, {
      state: accessSetups
    }), /*#__PURE__*/React.createElement("span", {
      className: "color-lightgrey"
    }, "Access to trade setups")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ConditionedIcon, {
      state: accessPicks
    }), /*#__PURE__*/React.createElement("span", {
      className: "color-lightgrey"
    }, "Access to investment picks")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ConditionedIcon, {
      state: videoLibary
    }), /*#__PURE__*/React.createElement("span", {
      className: "color-lightgrey"
    }, "Trading course and extensive video libary")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ConditionedIcon, {
      state: livestreams
    }), /*#__PURE__*/React.createElement("span", {
      className: "color-lightgrey"
    }, "Interactive livestreams")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ConditionedIcon, {
      state: dailyUpdates
    }), /*#__PURE__*/React.createElement("span", {
      className: "color-lightgrey"
    }, "Daily market updates")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ConditionedIcon, {
      state: accessToTeam
    }), /*#__PURE__*/React.createElement("span", {
      className: "color-lightgrey"
    }, "24/7 access to a team of professional traders analysts")))), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement(RenderButtonType, {
      label: "Pay safely",
      popular: popular
    })));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "price-card-grid"
  }, data.map(function (item) {
    return /*#__PURE__*/React.createElement(PriceCard, {
      key: item.id,
      name: item.name,
      time: item.time,
      price: item.price,
      popular: item.popular,
      accessSetups: item.accessSetups,
      accessPicks: item.accessPicks,
      videoLibary: item.videoLibary,
      livestreams: item.livestreams,
      dailyUpdates: item.dailyUpdates,
      accessToTeam: item.accessToTeam
    });
  }));
};

var domContainer = document.querySelector('#PricingGridComponent');
ReactDOM.render( /*#__PURE__*/React.createElement(PricingGridComponent, {
  data: _pricing.pricingData
}), domContainer);
},{"./data/pricing":"SQbq","/assets/icons/check.svg":"fEsL","/assets/icons/x.svg":"cpRJ","/assets/icons/bitcoin--blue.svg":"pyE2"}]},{},["tJKo"], null)
//# sourceMappingURL=pricinggrid-component.08da2c2b.js.map