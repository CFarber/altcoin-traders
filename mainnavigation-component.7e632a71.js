parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cpRJ":[function(require,module,exports) {
module.exports="x.09048a5f.svg";
},{}],"KsIM":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=s();return function(){var a,n=m(e);if(t){var r=m(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return l(this,a)}}function l(t,a){return!a||"object"!==e(a)&&"function"!=typeof a?o(t):a}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(f){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=React.createElement,v=function(e){var t=e.name,a=e.label,n=e.url;return e.active===t?React.createElement("a",{href:n,className:"link-active"},React.createElement("li",null,a)):React.createElement("a",{href:n},React.createElement("li",null,a))},b=function(e){r(c,React.Component);var a=i(c);function c(e){var n;return t(this,c),u(o(n=a.call(this,e)),"toggleClass",function(){n.setState({active:!n.state.active})}),n.state={active:!1,pages:[{id:0,name:"education-visitor",label:"Education",url:"./education-visitor.html",show:!0},{id:1,name:"trading-visitor",label:"Trading",url:"./trading-visitor.html",show:!0},{id:2,name:"free-content",label:"Free content",url:"./free-content.html",show:!0},{id:3,name:"about-us",label:"About us",url:"./about-us.html",show:!0},{id:4,name:"pricing",label:"Pricing",url:"./pricing.html",show:!0},{id:5,name:"support",label:"Support",url:"./support.html",show:!0}]},n}return n(c,[{key:"render",value:function(){var e=this;return React.createElement("div",{className:"main-navigation-bar"},React.createElement("div",{className:"main-navigation-container"},React.createElement("div",{className:"main-navigation-online"},React.createElement("div",{className:"main-navigation-online__container"},React.createElement("div",{className:"ac-membersonline"},React.createElement("div",{className:"ac-membersonline__indicator"}," "),React.createElement("span",null,this.props.members," Members online")))),React.createElement("div",{className:"main-navigation-menu"},React.createElement("div",{className:"main-navigation-menu__container"},React.createElement("div",{className:"main-navigation-menu__logo"},React.createElement("a",{href:"/"},React.createElement("span",{className:"font-bold color-lightgrey"},"Altcoin Traders"))),React.createElement("div",{className:"main-navigation-menu__items"},React.createElement("nav",{className:"menu-horizontal hide-on-tablet"},React.createElement("ul",null,this.state.pages.map(function(t){return React.createElement(v,{key:t.id,name:t.name,label:t.label,url:t.url,active:e.props.active})})))),React.createElement("div",{className:"hide-on-desktop"},React.createElement("div",{className:"button button--color-dark mobile-shrink",onClick:this.toggleClass},"Menu")),React.createElement("div",{className:"hide-on-tablet"},React.createElement("a",{href:"./login.html"},React.createElement("div",{className:"button button__small button--color-dark"},"Sign in"))))),React.createElement("div",{className:this.state.active?"main-navigation-mobile":"main-navigation-mobile--close"},React.createElement("div",{className:"main-navigation-mobile__container"},React.createElement("div",{className:"main-navigation-mobile__close"},React.createElement("div",{className:"button button--color-primary button__small mobile-shrink",onClick:this.toggleClass},React.createElement("figure",{className:"color-invert margin-right-8"},React.createElement("img",{src:require("/assets/icons/x.svg")})),"Close")),React.createElement("nav",{className:"menu-verticle"},React.createElement("ul",null,React.createElement("a",{href:"/"},React.createElement("li",null,"Home")),this.state.pages.map(function(t){return React.createElement(v,{key:t.id,name:t.name,label:t.label,url:t.url,active:e.props.active})})))))))}}]),c}();document.querySelectorAll("#mainNavigation").forEach(function(e){var t=e.dataset.active,a=e.dataset.members,n=e.dataset.mode;ReactDOM.render(f(b,{active:t,members:a,mode:n}),e)});
},{"/assets/icons/x.svg":"cpRJ"}]},{},["KsIM"], null)
//# sourceMappingURL=mainnavigation-component.7e632a71.js.map