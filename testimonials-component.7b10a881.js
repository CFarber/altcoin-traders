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
})({"fHKj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testimonialData = void 0;
var testimonialData = [{
  id: 0,
  name: "Danny",
  stars: 4,
  review: "For anybody who is ready to learn how to manage their money properly. Over the last few months this little side hustle has become my main source of income. As well as taking substantial USD profits, my trading stack has doubled over the last 3 months. Incredible 🙂 Thanks guys!"
}, {
  id: 1,
  name: "Christiaan",
  stars: 5,
  review: "For anybody who is ready to learn how to manage their money properly. Over the last few months this little side hustle has become my main source of income. As well as taking substantial USD profits, my trading stack has doubled over the last 3 months. Incredible 🙂 Thanks guys!"
}, {
  id: 2,
  name: "Nick",
  stars: 5,
  review: "For anybody who is ready to learn how to manage their money properly. Over the last few months this little side hustle has become my main source of income. As well as taking substantial USD profits, my trading stack has doubled over the last 3 months. Incredible 🙂 Thanks guys!"
}];
exports.testimonialData = testimonialData;
},{}],"MHxj":[function(require,module,exports) {
module.exports = "star.3f45cf72.svg";
},{}],"Ij65":[function(require,module,exports) {
'use strict';

var _testimonials = require("/data/testimonials.js");

var e = React.createElement;

var Testimonials = function Testimonials() {
  var RenderSliders = function RenderSliders() {
    return _testimonials.testimonialData.map(function (item) {
      return /*#__PURE__*/React.createElement("div", {
        key: item.id,
        className: "testimonials-slide"
      }, /*#__PURE__*/React.createElement("div", {
        className: "testimonials-slide__slide bottom-curves bottom-curves--white-black"
      }, /*#__PURE__*/React.createElement("div", {
        className: "testimonials-slide__rating"
      }, /*#__PURE__*/React.createElement("ul", null, Array.from(Array(item.stars).keys()).map(function (index) {
        return /*#__PURE__*/React.createElement("li", {
          key: index
        }, " ", /*#__PURE__*/React.createElement("figure", null, " ", /*#__PURE__*/React.createElement("img", {
          src: require('/assets/icons/star.svg'),
          alt: "star"
        })), " ");
      }))), /*#__PURE__*/React.createElement("span", {
        className: "font-xsmall"
      }, item.name), /*#__PURE__*/React.createElement("p", {
        className: "paragraph"
      }, item.review)));
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "testimonials-slider"
  }, /*#__PURE__*/React.createElement(RenderSliders, null));
};

var domContainer = document.querySelector('#testimonialsComponent');
ReactDOM.render(e(Testimonials), domContainer);
},{"/data/testimonials.js":"fHKj","/assets/icons/star.svg":"MHxj"}]},{},["Ij65"], null)
//# sourceMappingURL=testimonials-component.7b10a881.js.map