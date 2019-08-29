/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);

const playVedio = () => {
  const vid = document.getElementById('video')
  document.getElementById('play').addEventListener('click', (e) => {
    vid.play()
    e.target.style.display = 'none'
  })
}
playVedio()


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Imports
var urlEscape = __webpack_require__(4);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(5));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(6));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(7));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(8));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(9));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(10));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(11));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(12));
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(13));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(14));

// Module
exports.push([module.i, "html {\n  font-size: 12px;\n  height: 100%; }\n\n@font-face {\n  font-family: 'effraRegular';\n  src: url(" + ___CSS_LOADER_URL___0___ + "), url(" + ___CSS_LOADER_URL___1___ + "); }\n\n@font-face {\n  font-family: 'effraBold';\n  src: url(" + ___CSS_LOADER_URL___2___ + "), url(" + ___CSS_LOADER_URL___3___ + "); }\n\nbody {\n  background: #fff;\n  margin: 0;\n  font-family: 'effraRegular';\n  height: 100%; }\n\n* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n\n.container {\n  max-width: 1280px;\n  margin: auto;\n  padding: 0 5%;\n  box-sizing: border-box; }\n\nh1, h2, h3, h4 {\n  font-weight: normal;\n  font-family: 'effraBold'; }\n\nheader {\n  background: #081e3f; }\n  header .header--block {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  header .logo {\n    background: url(" + ___CSS_LOADER_URL___4___ + ");\n    width: 12rem;\n    padding-bottom: 4rem;\n    display: inline-block;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center; }\n  header span {\n    font-size: 16px;\n    color: #fff; }\n\n.btn {\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 0.5rem 1rem;\n  display: inline-block;\n  text-align: center; }\n\n.banner--block {\n  background: url(" + ___CSS_LOADER_URL___5___ + ");\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40%;\n  background-position: left top; }\n  .banner--block .banner--block-text {\n    padding: 1rem 1rem;\n    background: rgba(102, 212, 255, 0.62);\n    text-align: center; }\n    .banner--block .banner--block-text h2 {\n      font-size: 2rem;\n      color: #fff;\n      font-family: 'effraBold';\n      text-transform: uppercase; }\n    .banner--block .banner--block-text p {\n      color: #fff;\n      text-transform: capitalize; }\n    .banner--block .banner--block-text .btn {\n      color: #fff;\n      background: #081e3f;\n      margin: 0.5rem auto;\n      border: 1px solid #fff; }\n\n.about--block {\n  margin: 1rem auto;\n  text-align: center; }\n  .about--block video {\n    width: 100%;\n    height: 14rem;\n    object-fit: cover; }\n  .about--block .video--des {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #ccc;\n    padding-bottom: 1rem;\n    text-align: justify; }\n    @media (max-width: 760px) {\n      .about--block .video--des {\n        flex-direction: column; } }\n    .about--block .video--des .btn {\n      color: #fff;\n      background: #081e3f;\n      margin: 0.5rem auto;\n      border: 1px solid #081e3f;\n      margin: 0.5rem;\n      width: 10rem; }\n    .about--block .video--des .btn-white {\n      background: #fff;\n      color: #081e3f; }\n    .about--block .video--des p {\n      font-size: 0.8rem; }\n    .about--block .video--des strong {\n      font-size: 0.8rem;\n      margin: 0.5rem 0; }\n  .about--block .video--des-block {\n    position: relative;\n    margin-right: 1rem;\n    flex-basis: 100%; }\n  .about--block #play {\n    background: url(" + ___CSS_LOADER_URL___6___ + ");\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 3rem;\n    height: 3rem;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    margin: -1.5rem;\n    cursor: pointer; }\n  .about--block h1 {\n    color: #000;\n    font-size: 2.5rem;\n    text-align: center;\n    margin-bottom: 1rem; }\n  .about--block h2 {\n    color: #000;\n    font-size: 1.8rem;\n    text-align: center;\n    margin: 1rem auto;\n    text-transform: uppercase; }\n  .about--block .more {\n    color: #081e3f;\n    font-size: 1rem;\n    text-align: center;\n    position: relative; }\n    .about--block .more:after {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      height: 1px;\n      background: #081e3f;\n      width: 100%;\n      left: 0; }\n\n.jouney--block {\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n  .jouney--block li {\n    min-width: 30%;\n    flex-basis: 100%;\n    margin: 1rem; }\n    @media (min-width: 480px) {\n      .jouney--block li {\n        flex-basis: 44%; } }\n    @media (min-width: 1025px) {\n      .jouney--block li {\n        flex-basis: 30%; } }\n    .jouney--block li h4 {\n      font-size: 1.2rem;\n      color: #081e3f; }\n    .jouney--block li p {\n      color: #081e3f;\n      font-weight: 700; }\n  .jouney--block figure span {\n    background-size: cover;\n    padding-bottom: 10rem;\n    display: block; }\n  .jouney--block figure figcaption {\n    text-align: center; }\n  .jouney--block .btn {\n    color: #081e3f;\n    font-size: 0.9rem;\n    margin: 0.5rem auto;\n    border: 1px solid #081e3f; }\n\n.offer--block {\n  padding: 1.5rem 0;\n  background: #081e3f;\n  color: #fff;\n  text-align: center; }\n  .offer--block h4 {\n    font-size: 1.4rem;\n    color: #a4cfed; }\n  .offer--block h1 {\n    font-size: 2.5rem; }\n  .offer--block strong {\n    font-weight: normal;\n    font-family: 'effraBold'; }\n  .offer--block .line {\n    height: 1px;\n    background: #fff;\n    display: block;\n    max-width: 550px;\n    margin: 1rem auto; }\n\n.tripDetails--block {\n  margin: 1rem auto;\n  max-width: 69rem;\n  margin: auto; }\n  .tripDetails--block ul {\n    list-style-type: none;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    border-bottom: 1px solid #ccc;\n    padding-bottom: 1rem;\n    padding-top: 1rem; }\n  .tripDetails--block li {\n    text-align: center;\n    background: #081e3f;\n    text-align: center;\n    background: #081e3f;\n    margin: 1rem;\n    padding: 1rem 4rem;\n    min-width: 240px; }\n    @media (max-width: 480px) {\n      .tripDetails--block li {\n        flex-basis: 100%; } }\n  .tripDetails--block h4 {\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 1.5rem;\n    color: #fff; }\n  .tripDetails--block .btn {\n    color: #fff;\n    font-size: 0.9rem;\n    margin: 0.5rem auto;\n    border: 1px solid #fff;\n    padding: 0.5rem; }\n  .tripDetails--block i {\n    font-style: normal;\n    color: #9b9696;\n    font-size: 0.8rem;\n    line-height: 0.9rem;\n    padding: 1rem 0;\n    display: inline-block; }\n\nfooter {\n  text-align: center;\n  background: #081e3f;\n  color: #fff;\n  padding: 1.5rem 0 0.5rem; }\n  footer .partnerList {\n    display: flex;\n    justify-content: center; }\n    footer .partnerList a {\n      display: inline-block;\n      margin: 1rem;\n      background-size: contain;\n      background-repeat: no-repeat; }\n      footer .partnerList a:nth-of-type(1) {\n        background-image: url(" + ___CSS_LOADER_URL___7___ + ");\n        width: 4rem;\n        padding-bottom: 2rem; }\n      footer .partnerList a:nth-of-type(2) {\n        background-image: url(" + ___CSS_LOADER_URL___8___ + ");\n        width: 4rem;\n        padding-bottom: 4rem;\n        background-position: center; }\n      footer .partnerList a:nth-of-type(3) {\n        background-image: url(" + ___CSS_LOADER_URL___9___ + ");\n        width: 6rem;\n        padding-bottom: 2rem; }\n  footer p {\n    font-size: 0.8rem; }\n\n@media (min-width: 640px) {\n  html {\n    font-size: 15px; } }\n\n@media (min-width: 990px) {\n  html {\n    font-size: 16px; }\n  .banner--block {\n    height: 60%; }\n    .banner--block .banner--block-text {\n      padding: 1rem 3rem; }\n      .banner--block .banner--block-text h2 {\n        font-size: 2.8rem; }\n      .banner--block .banner--block-text p {\n        font-size: 1.2rem; }\n      .banner--block .banner--block-text .btn {\n        font-size: 0.9rem; } }\n\n@media (min-width: 1060px) {\n  .btn {\n    transition: 0.3s all; }\n    .btn:hover {\n      color: #fff !important;\n      background: #d40504 !important;\n      border: 1px solid #fff !important; }\n  .more {\n    cursor: pointer; }\n    .more:after {\n      transition: 0.25s linear;\n      transform: scaleX(1); }\n    .more:hover:after {\n      transform: scaleX(0); }\n  #play {\n    transition: 0.25s linear; }\n    #play:hover {\n      transform: scale(1.3); } }\n", ""]);



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "09bdedde7d856ad119587ac1c2c6e0ce.woff";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "31b3f5962201d45db2d8d024db80513e.woff2";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f0e0c6e161c7bbd869be9b03437fc0d4.woff";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6dcb2c8d0ee9e8359cfcd5d077a1159b.woff2";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ae2c1d9f66c424c2c9cdceb92d263d99.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a2ed3ecf6f23cc7d4305acba3abb568e.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e59a3cad98c31e29e72262dac994d512.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "55c12d79794fe4236f36d7a5c922f9dd.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fe8439452b21a20ed9dafc95269de014.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "18d2263fed6378f1441c2f6b95e833a4.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(16);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);