parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wZLb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.educationModuleData=void 0;var e=[{id:0,subtitle:"4 Week introductory course",title:"Module 1 - Support and resistance",content:"In module one you will learn how to identify and draw support and resistance levels on any chart.",url:"/",download:"/"},{id:1,subtitle:"4 Week introductory course",title:"Module 2",content:"In module one you will learn how to identify and draw support and resistance levels on any chart.",url:"/",download:"/"},{id:2,subtitle:"4 Week introductory course",title:"Module 3",content:"In module one you will learn how to identify and draw support and resistance levels on any chart.",url:"/",download:"/"},{id:3,subtitle:"4 Week introductory course",title:"Module 4",content:"In module one you will learn how to identify and draw support and resistance levels on any chart.",url:"/",download:"/"}];exports.educationModuleData=e;
},{}],"h9jQ":[function(require,module,exports) {
module.exports="MacBook_Pro.a57bf9de.svg";
},{}],"EYiO":[function(require,module,exports) {
"use strict";var e=require("/data/education-module.js"),t=React.createElement,a=function(){var t=function(){return e.educationModuleData.map(function(e){return React.createElement("div",{key:e.id,className:"education-module-slide"},React.createElement("div",{className:"grid-columns grid-2-columns container-center "},React.createElement("div",{className:"grid-item"},React.createElement("span",{className:"color-lightgrey"},e.subtitle),React.createElement("h2",{className:"color-lightgrey"},e.title),React.createElement("p",{className:"paragraph color-lightgrey"},e.content),React.createElement("div",{className:"grid-button grid-button--sm-2"},React.createElement("a",{href:e.url},React.createElement("div",{className:"button button__large button--color-primary",role:"button"},"Watch this course")),React.createElement("a",{href:e.download},React.createElement("div",{className:"button button__large button--border-white",role:"button"},"Download pdf")))),React.createElement("div",{className:"grid-item"},React.createElement("div",{className:""},React.createElement("figure",{className:"img img--shrink-95"},React.createElement("img",{src:require("/assets/mockups/devices/MacBook_Pro.svg"),alt:""}))))))})};return React.createElement("div",{className:"education-module-sliders"},React.createElement(t,null))},c=document.querySelector("#EducationModulesComponent");ReactDOM.render(t(a),c);
},{"/data/education-module.js":"wZLb","/assets/mockups/devices/MacBook_Pro.svg":"h9jQ"}]},{},["EYiO"], null)
//# sourceMappingURL=educationmodules-component.9cbc0a97.js.map