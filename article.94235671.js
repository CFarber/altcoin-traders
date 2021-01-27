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
})({"YvtQ":[function(require,module,exports) {

},{"./../assets/fonts/montserrat-v15-latin-200.eot":[["montserrat-v15-latin-200.3bca7997.eot","dr3P"],"dr3P"],"./../assets/fonts/montserrat-v15-latin-200.woff2":[["montserrat-v15-latin-200.ef9fd390.woff2","Nd0z"],"Nd0z"],"./../assets/fonts/montserrat-v15-latin-200.woff":[["montserrat-v15-latin-200.30041308.woff","hCkA"],"hCkA"],"./../assets/fonts/montserrat-v15-latin-200.ttf":[["montserrat-v15-latin-200.7ec35167.ttf","kENL"],"kENL"],"./../assets/fonts/montserrat-v15-latin-200.svg":[["montserrat-v15-latin-200.c44639b6.svg","ebTz"],"ebTz"],"./../assets/fonts/montserrat-v15-latin-200italic.eot":[["montserrat-v15-latin-200italic.6afb9e3c.eot","tGpv"],"tGpv"],"./../assets/fonts/montserrat-v15-latin-200italic.woff2":[["montserrat-v15-latin-200italic.c62c6e97.woff2","bToJ"],"bToJ"],"./../assets/fonts/montserrat-v15-latin-200italic.woff":[["montserrat-v15-latin-200italic.1575f70d.woff","fnF8"],"fnF8"],"./../assets/fonts/montserrat-v15-latin-200italic.ttf":[["montserrat-v15-latin-200italic.2c040a18.ttf","mPL6"],"mPL6"],"./../assets/fonts/montserrat-v15-latin-200italic.svg":[["montserrat-v15-latin-200italic.e19a8d25.svg","q4GH"],"q4GH"],"./../assets/fonts/montserrat-v15-latin-regular.eot":[["montserrat-v15-latin-regular.d6560801.eot","XhnA"],"XhnA"],"./../assets/fonts/montserrat-v15-latin-regular.woff2":[["montserrat-v15-latin-regular.2c9a9f66.woff2","eHHU"],"eHHU"],"./../assets/fonts/montserrat-v15-latin-regular.woff":[["montserrat-v15-latin-regular.e709e0a7.woff","L8zm"],"L8zm"],"./../assets/fonts/montserrat-v15-latin-regular.ttf":[["montserrat-v15-latin-regular.74aa654b.ttf","d5Ge"],"d5Ge"],"./../assets/fonts/montserrat-v15-latin-regular.svg":[["montserrat-v15-latin-regular.be13e628.svg","RL7O"],"RL7O"],"./../assets/fonts/montserrat-v15-latin-italic.eot":[["montserrat-v15-latin-italic.22f993db.eot","K8gp"],"K8gp"],"./../assets/fonts/montserrat-v15-latin-italic.woff2":[["montserrat-v15-latin-italic.b7c126d5.woff2","gvVW"],"gvVW"],"./../assets/fonts/montserrat-v15-latin-italic.woff":[["montserrat-v15-latin-italic.5381f18d.woff","Qma8"],"Qma8"],"./../assets/fonts/montserrat-v15-latin-italic.ttf":[["montserrat-v15-latin-italic.54ed55e0.ttf","w4bY"],"w4bY"],"./../assets/fonts/montserrat-v15-latin-italic.svg":[["montserrat-v15-latin-italic.7ea93305.svg","L1b3"],"L1b3"],"./../assets/fonts/montserrat-v15-latin-500.eot":[["montserrat-v15-latin-500.d062e8e4.eot","dTiO"],"dTiO"],"./../assets/fonts/montserrat-v15-latin-500.woff2":[["montserrat-v15-latin-500.d62ee36a.woff2","tkLW"],"tkLW"],"./../assets/fonts/montserrat-v15-latin-500.woff":[["montserrat-v15-latin-500.8d467d72.woff","FaPZ"],"FaPZ"],"./../assets/fonts/montserrat-v15-latin-500.ttf":[["montserrat-v15-latin-500.bfefcd3b.ttf","yLBQ"],"yLBQ"],"./../assets/fonts/montserrat-v15-latin-500.svg":[["montserrat-v15-latin-500.0b20f664.svg","HOx2"],"HOx2"],"./../assets/fonts/montserrat-v15-latin-600italic.eot":[["montserrat-v15-latin-600italic.f06762f6.eot","GMy5"],"GMy5"],"./../assets/fonts/montserrat-v15-latin-600italic.woff2":[["montserrat-v15-latin-600italic.46030802.woff2","rjkh"],"rjkh"],"./../assets/fonts/montserrat-v15-latin-600italic.woff":[["montserrat-v15-latin-600italic.97f8f000.woff","WzHc"],"WzHc"],"./../assets/fonts/montserrat-v15-latin-600italic.ttf":[["montserrat-v15-latin-600italic.70ef30c9.ttf","JsOC"],"JsOC"],"./../assets/fonts/montserrat-v15-latin-600italic.svg":[["montserrat-v15-latin-600italic.bc77c0f2.svg","jbD9"],"jbD9"],"./../assets/fonts/montserrat-v15-latin-700.eot":[["montserrat-v15-latin-700.e1916d4d.eot","niHd"],"niHd"],"./../assets/fonts/montserrat-v15-latin-700.woff2":[["montserrat-v15-latin-700.a6bbfdeb.woff2","BCvl"],"BCvl"],"./../assets/fonts/montserrat-v15-latin-700.woff":[["montserrat-v15-latin-700.d6e3618a.woff","XbXG"],"XbXG"],"./../assets/fonts/montserrat-v15-latin-700.ttf":[["montserrat-v15-latin-700.c4cc0675.ttf","heCt"],"heCt"],"./../assets/fonts/montserrat-v15-latin-700.svg":[["montserrat-v15-latin-700.85f5148d.svg","h1Aq"],"h1Aq"],"./../assets/fonts/montserrat-v15-latin-800.eot":[["montserrat-v15-latin-800.48fe8989.eot","DsOv"],"DsOv"],"./../assets/fonts/montserrat-v15-latin-800.woff2":[["montserrat-v15-latin-800.b7164f05.woff2","sWfo"],"sWfo"],"./../assets/fonts/montserrat-v15-latin-800.woff":[["montserrat-v15-latin-800.49293a86.woff","l98b"],"l98b"],"./../assets/fonts/montserrat-v15-latin-800.ttf":[["montserrat-v15-latin-800.06b37d43.ttf","l3Rj"],"l3Rj"],"./../assets/fonts/montserrat-v15-latin-800.svg":[["montserrat-v15-latin-800.80122611.svg","UEgj"],"UEgj"],"./../assets/icons/x--lightgrey.svg":[["x--lightgrey.09048a5f.svg","yXEY"],"yXEY"],"./../assets/icons/chevron-down--lightgrey.svg":[["chevron-down--lightgrey.b312c361.svg","NaNs"],"NaNs"]}],"qKJ4":[function(require,module,exports) {
"use strict";

require("./scss/index.scss");
},{"./scss/index.scss":"YvtQ"}]},{},["qKJ4"], null)
//# sourceMappingURL=article.94235671.js.map