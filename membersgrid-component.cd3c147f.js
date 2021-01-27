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
})({"OzYG":[function(require,module,exports) {
module.exports = "nietzsche.a204a051.jpg";
},{}],"PVD5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.membersData = void 0;
var membersData = [{
  id: 0,
  name: "BillGK",
  description: "Founder and trader",
  img: require('/assets/images/members/nietzsche.jpg'),
  discordUrl: "/",
  twitterUrl: "/"
}, {
  id: 1,
  name: "CryptoAmsterdam",
  description: "Founder and trader",
  img: require('/assets/images/members/nietzsche.jpg'),
  discordUrl: "/",
  twitterUrl: "/"
}, {
  id: 2,
  name: "€ｕｒｏＳｎｉｐｅｒ",
  img: require('/assets/images/members/nietzsche.jpg'),
  description: "Founder and trader",
  discordUrl: "/",
  twitterUrl: "/"
}, {
  id: 3,
  name: "Foz",
  img: require('/assets/images/members/nietzsche.jpg'),
  description: "Team member",
  discordUrl: "/",
  twitterUrl: "/"
}, {
  id: 4,
  name: "Dentoshi",
  img: require('/assets/images/members/nietzsche.jpg'),
  description: "Team member",
  discordUrl: "/",
  twitterUrl: "/"
}, {
  id: 5,
  name: "TraderArjun",
  img: require('/assets/images/members/nietzsche.jpg'),
  description: "Team member",
  discordUrl: "/",
  twitterUrl: "/"
}, {
  id: 6,
  name: "Chase",
  img: require('/assets/images/members/nietzsche.jpg'),
  description: "Founder and trader",
  discordUrl: "/",
  twitterUrl: "/"
}, {
  id: 7,
  name: "Crypto_MCP",
  img: require('/assets/images/members/nietzsche.jpg'),
  description: "Founder and trader",
  discordUrl: "/",
  twitterUrl: "/"
}, {
  id: 8,
  name: "Grills",
  img: require('/assets/images/members/nietzsche.jpg'),
  description: "Founder and trader",
  discordUrl: "/",
  twitterUrl: "/"
}];
exports.membersData = membersData;
},{"/assets/images/members/nietzsche.jpg":"OzYG"}],"AnzQ":[function(require,module,exports) {
module.exports = "discord.3764431c.svg";
},{}],"mrut":[function(require,module,exports) {
module.exports = "twitter.2a254543.svg";
},{}],"YcGg":[function(require,module,exports) {
'use strict';

var _members = require("/data/members.js");

var e = React.createElement;

var MembersGrid = function MembersGrid() {
  var RenderMembers = function RenderMembers() {
    return _members.membersData.map(function (item) {
      return /*#__PURE__*/React.createElement("div", {
        key: item.id,
        class: "grid-item grid grid-item--no-padding"
      }, /*#__PURE__*/React.createElement("div", {
        class: "member-card"
      }, /*#__PURE__*/React.createElement("figure", {
        class: "profile-picture"
      }, /*#__PURE__*/React.createElement("img", {
        src: item.img
      })), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h5", {
        class: "color-lightgrey"
      }, item.name)), /*#__PURE__*/React.createElement("p", {
        class: "paragraph color-lightgrey"
      }, item.description), /*#__PURE__*/React.createElement("footer", {
        class: "bg-color-primary"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("a", {
        href: item.discordUrl
      }, /*#__PURE__*/React.createElement("li", {
        class: "icon icon__small icon--invert"
      }, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
        src: require('/assets/icons/discord.svg')
      })))), /*#__PURE__*/React.createElement("a", {
        href: item.twitterUrl
      }, /*#__PURE__*/React.createElement("li", {
        class: "icon icon__small icon--invert"
      }, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
        src: require('/assets/icons/twitter.svg')
      })))))))));
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "members-grid"
  }, /*#__PURE__*/React.createElement(RenderMembers, null));
};

var domContainer = document.querySelector('#MembersGridComponent');
ReactDOM.render(e(MembersGrid), domContainer);
},{"/data/members.js":"PVD5","/assets/icons/discord.svg":"AnzQ","/assets/icons/twitter.svg":"mrut"}]},{},["YcGg"], null)
//# sourceMappingURL=membersgrid-component.cd3c147f.js.map