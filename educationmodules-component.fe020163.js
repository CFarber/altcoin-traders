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
})({"wZLb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.educationModuleData = void 0;
var educationModuleData = [{
  id: 0,
  subtitle: "4 Week introductory course",
  title: "Module 1 - Support and resistance",
  content: "In module one you will learn how to identify and draw support and resistance levels on any chart.",
  url: "/",
  download: "/"
}, {
  id: 1,
  subtitle: "4 Week introductory course",
  title: "Module 2",
  content: "In module one you will learn how to identify and draw support and resistance levels on any chart.",
  url: "/",
  download: "/"
}, {
  id: 2,
  subtitle: "4 Week introductory course",
  title: "Module 3",
  content: "In module one you will learn how to identify and draw support and resistance levels on any chart.",
  url: "/",
  download: "/"
}, {
  id: 3,
  subtitle: "4 Week introductory course",
  title: "Module 4",
  content: "In module one you will learn how to identify and draw support and resistance levels on any chart.",
  url: "/",
  download: "/"
}];
exports.educationModuleData = educationModuleData;
},{}],"h9jQ":[function(require,module,exports) {
module.exports = "MacBook_Pro.a57bf9de.svg";
},{}],"EYiO":[function(require,module,exports) {
'use strict';

var _educationModule = require("/data/education-module.js");

var e = React.createElement;

var EducationModules = function EducationModules() {
  var RenderSliders = function RenderSliders() {
    return _educationModule.educationModuleData.map(function (item) {
      return /*#__PURE__*/React.createElement("div", {
        key: item.id,
        className: "education-module-slide"
      }, /*#__PURE__*/React.createElement("div", {
        className: "grid-columns grid-2-columns container-center "
      }, /*#__PURE__*/React.createElement("div", {
        className: "grid-item"
      }, /*#__PURE__*/React.createElement("span", {
        className: "color-lightgrey"
      }, item.subtitle), /*#__PURE__*/React.createElement("h2", {
        className: "color-lightgrey"
      }, item.title), /*#__PURE__*/React.createElement("p", {
        className: "paragraph color-lightgrey"
      }, item.content), /*#__PURE__*/React.createElement("div", {
        className: "grid-button grid-button--sm-2"
      }, /*#__PURE__*/React.createElement("a", {
        href: item.url
      }, /*#__PURE__*/React.createElement("div", {
        className: "button button__large button--color-primary",
        role: "button"
      }, "Watch this course")), /*#__PURE__*/React.createElement("a", {
        href: item.download
      }, /*#__PURE__*/React.createElement("div", {
        className: "button button__large button--border-white",
        role: "button"
      }, "Download pdf")))), /*#__PURE__*/React.createElement("div", {
        className: "grid-item"
      }, /*#__PURE__*/React.createElement("div", {
        className: ""
      }, /*#__PURE__*/React.createElement("figure", {
        className: "img img--shrink-95"
      }, /*#__PURE__*/React.createElement("img", {
        src: require('/assets/mockups/devices/MacBook_Pro.svg'),
        alt: ""
      }))))));
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "education-module-sliders"
  }, /*#__PURE__*/React.createElement(RenderSliders, null));
};

var domContainer = document.querySelector('#EducationModulesComponent');
ReactDOM.render(e(EducationModules), domContainer);
},{"/data/education-module.js":"wZLb","/assets/mockups/devices/MacBook_Pro.svg":"h9jQ"}]},{},["EYiO"], null)
//# sourceMappingURL=educationmodules-component.fe020163.js.map