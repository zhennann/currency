/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Currency)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function Currency(options) {
  if (!options || _typeof(options) !== "object") {
    options = {};
  }

  var fixed = options.fixed !== undefined ? options.fixed : 2;
  var exp = options.exp !== undefined ? options.exp : fixed;
  var zero = options.zero !== undefined ? options.zero : fixed;
  return {
    format: function format(value) {
      if (isNaN(value)) return value;
      var str = (Number(value) / Math.pow(10, exp)).toFixed(fixed);
      return this._trimZero(str, zero);
    },
    update: function update(value) {
      if (isNaN(value)) return value;
      return Number((Number(value) * Math.pow(10, exp)).toFixed(0));
    },
    _trimZero: function _trimZero(str, zero) {
      var indexZero = str.indexOf(".");
      if (indexZero === -1) return str;

      for (var index = str.length - 1; index > indexZero; index--) {
        if (str[index] === "0" && index - indexZero > zero) {
          str = str.substring(0, str.length - 1);
        } else {
          break;
        }
      }

      if (indexZero === str.length - 1) {
        str = str.substring(0, str.length - 1);
      }

      return str;
    }
  };
}
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map