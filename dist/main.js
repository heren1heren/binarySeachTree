/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@tailwind base;
@tailwind components;
@tailwind utilities;
`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AACA,cAAS;AACT,oBAAS;AACT,mBAAS","sourcesContent":["//* main scss style sheet\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/mergeSort.ts":
/*!**************************!*\
  !*** ./src/mergeSort.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeSort),
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
var arr1 = [3, 2, 2, 13, 8, 5, 0, 1]; // return [0, 1, 1, 2, 3, 5, 8, 13]
function mergeSort(array) {
    // change to left, right, and middle index instead
    if (array.length > 1) {
        var mid = array.length / 2;
        if (mid % 2 !== 0)
            mid = Math.round(mid);
        var leftPart = array.slice(0, mid);
        var rightPart = array.slice(mid, array.length);
        mergeSort(leftPart);
        mergeSort(rightPart);
        merge(array, leftPart, rightPart);
    }
    return array;
}
mergeSort(arr1);
function merge(parent, sub1, sub2) {
    // should using left,right, and middle index instead
    var i = 0, j = 0, k = 0;
    while (i < sub1.length && j < sub2.length) {
        if (sub1[i] < sub2[j]) {
            parent[k] = sub1[i];
            i++;
        }
        else {
            parent[k] = sub2[j];
            j++;
        }
        k++;
    }
    // copy the remaining elements
    while (i < sub1.length) {
        parent[k] = sub1[i];
        i++;
        k++;
    }
    // copy the remaining elements
    while (j < sub2.length) {
        parent[k] = sub2[j];
        j++;
        k++;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _mergeSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeSort */ "./src/mergeSort.ts");
// import './style.css';


/**

Build a Node class/factory. It should have an attribute for the data it stores as well as its left and right children.

Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree which you’ll write next.

Tip: If you would like to visualize your binary search tree, here is a prettyPrint() function that will console.log your tree in a structured format.
This function will expect to receive the root of your tree as the value for the node parameter.
*/
var prettyPrint = function (node, prefix, isLeft) {
    if (prefix === void 0) { prefix = ''; }
    if (isLeft === void 0) { isLeft = true; }
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, "".concat(prefix).concat(isLeft ? '│   ' : '    '), false);
    }
    console.log("".concat(prefix).concat(isLeft ? '└── ' : '┌── ').concat(node.value));
    if (node.left !== null) {
        prettyPrint(node.left, "".concat(prefix).concat(isLeft ? '    ' : '│   '), true);
    }
};
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return Node;
}());
function removeDuplicates(arr) {
    return arr.filter(function (item, index) { return arr.indexOf(item) === index; });
}
var Tree = /** @class */ (function () {
    function Tree(array) {
        this.array = array;
        this.sortedArrayButNotRemoveDuplicates = (0,_mergeSort__WEBPACK_IMPORTED_MODULE_1__["default"])(array);
        this.sortedArray = removeDuplicates((0,_mergeSort__WEBPACK_IMPORTED_MODULE_1__["default"])(array));
        this.root = null;
    }
    Tree.prototype.buildTree = function (array, start, end) {
        //* check empty array
        if (array.length === 0)
            return null;
        //* check if it is the first  call -> push node to this.root? currently don't know how to do
        //base case
        if (start > end)
            return null;
        // recursive case
        var midIndex = Math.ceil((start + end) / 2);
        var node = new Node(array[midIndex]);
        node.left = this.buildTree(array, start, midIndex - 1);
        node.right = this.buildTree(array, midIndex + 1, end);
        return node;
    };
    /** * You may be tempted to
     * implement these methods using the original input array used to build the tree,
       but it’s important for the efficiency of these operations that you don’t do this. If we refer back to the Big O Cheatsheet,
       we’ll see that binary search trees can insert/delete in O(log n) time,
       which is a significant performance boost over arrays for the same operations.
       To get this added efficiency, your implementation of these methods
        should traverse the tree and manipulate the nodes and their connections.
       * */
    Tree.prototype.insert = function (value) {
        /* functions that insert the given value.
        the idea is to compare value with current node.value
        
        if(value === current node .value) return current node.value = value;
    
        if(value > current node.value) move down to the next right node
        if(value < current node. value) move down to the next left node
         if(current node.value === null) return current node.value = value;
        
        */
        // can't use recursive -> using while
        var current = this.root;
        var node = new Node(value);
        if (this.root === null)
            return (this.root = node);
        while (true) {
            if (current.value === value) {
                break;
            }
            if (value > current.value && current.right === null) {
                current.right = node;
                break;
            }
            else if (value < current.value && current.left === null) {
                current.left = node;
                break;
            }
            else if (value > current.value) {
                current = current.right;
            }
            else {
                current = current.left;
            }
        }
    };
    Tree.prototype.deleteItem = function (value) {
        /**
         * algorithm:
         * case 1: del leaf( a node without child)
         * ->
         *case 2: del node with only one child
         * ->  replace the node by parent.correspondingDirection = current.child
         * case 3: del node with two child
         * -> finding the nearest bigger than the node ( move down on the right)
         *   -> recursively call deleteItem(that node.value)
         
         * we need to travel as in insert() method.
         */
        var current = this.root;
        var parent = null;
        while (true) {
            // need to implement a parent
            // current = null won't work because  directly modifying is not accepted but reassigning is still fine
            // for example, parent.left (current) = null is accepted
            if (value > current.value && current.right) {
                parent = current;
                current = current.right;
            }
            else if (value < current.value && current.left) {
                parent = current;
                current = current.left;
            }
            else if (value === current.value && !current.left && !current.right) {
                //* leaf node
                // check if current is on right or left of parent
                console.log(parent);
                console.log(current);
                // update parent.correspondingDirection = null
                break;
            }
            else if (value === current.value && (current.left || current.right)) {
                //* one child case
                // check if current is on the right or left of parent
                console.log(parent);
                console.log(current);
                //  update parent.correspondingDirection = current.correspondingDirection
                break;
            }
            else if (value === current.value && current.left && current.right) {
                //* two childe case
                // check if current is on the right or left of parent
                // finding the nearest bigger than current (move right once, and move left untill null)
                // parent.correspondingDirection = that nearest
                // deleteItem(that nearest.value)
                console.log(parent);
                console.log(current);
                break;
            }
            else {
                break;
            }
        }
    };
    Tree.prototype.find = function (value) {
        /**
         * Write a find(value) function that returns the node with the given value
         */
    };
    Tree.prototype.levelOrder = function (callback) {
        /**
         * Write a levelOrder(callback) function that accepts an optional callback function as its parameter.
         * levelOrder should traverse the tree in breadth-first level order and provide each node as an argument to the callback.
         *  As a result, the callback will perform an operation on each node following the order in which they are traversed.
         * levelOrder may be implemented using either iteration or recursion (try implementing both!).
         * The method should return an array of values if no callback is given as an argument.
         *  Tip: You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list (as you saw in the video).
         */
    };
    /**Write inOrder(callback), preOrder(callback), and postOrder(callback) functions that also accept an optional callback as a parameter.
     * Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided callback.
     * The functions should return an array of values if no callback is given as an argument. */
    Tree.prototype.inOrder = function (callback) {
        //
    };
    Tree.prototype.preOrder = function (callback) {
        //
    };
    Tree.prototype.postOrder = function (callback) {
        //
    };
    Tree.prototype.height = function (node) {
        //Write a height(node) function that returns the given node’s height.
        // Height is defined as the number of edges in the longest path from a given node to a leaf node.
    };
    Tree.prototype.depth = function (node) {
        //Write a depth(node) function that returns the given node’s depth.
        //Depth is defined as the number of edges in the path from a given node to the tree’s root node.
    };
    Tree.prototype.isBalanced = function () {
        //Write an isBalanced function that checks if the tree is balanced.
        // A balanced tree is one where the difference between heights of the left subtree
        // and the right subtree of every node is not more than 1.
    };
    Tree.prototype.rebalance = function () {
        //Write a rebalance function that rebalances an unbalanced tree.
        // Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
    };
    return Tree;
}());
var tree = new Tree([5, 1, 5, 2, 2, 2, 9, 7, 3, 4, 8, 6]); // 1,2,3,4,5,6,7,8,9
tree.root = tree.buildTree(tree.sortedArray, 0, tree.sortedArray.length - 1);
console.log(tree.root);
var current = tree.root.left.left.left;
var parent = tree.root.left.left;
// current = current.left;
console.log(current);
console.log(parent);
prettyPrint(tree.root);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN2QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDakMsMEJBQTBCO0FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVwQixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9tZXJnZVNvcnQudHMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEB0YWlsd2luZCBiYXNlO1xuQHRhaWx3aW5kIGNvbXBvbmVudHM7XG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQSxjQUFTO0FBQ1Qsb0JBQVM7QUFDVCxtQkFBU1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyogbWFpbiBzY3NzIHN0eWxlIHNoZWV0XFxuQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFycjEgPSBbMywgMiwgMiwgMTMsIDgsIDUsIDAsIDFdOyAvLyByZXR1cm4gWzAsIDEsIDEsIDIsIDMsIDUsIDgsIDEzXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZVNvcnQoYXJyYXk6IG51bWJlcltdKSB7XG4gIC8vIGNoYW5nZSB0byBsZWZ0LCByaWdodCwgYW5kIG1pZGRsZSBpbmRleCBpbnN0ZWFkXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDEpIHtcbiAgICBsZXQgbWlkID0gYXJyYXkubGVuZ3RoIC8gMjtcbiAgICBpZiAobWlkICUgMiAhPT0gMCkgbWlkID0gTWF0aC5yb3VuZChtaWQpO1xuICAgIGNvbnN0IGxlZnRQYXJ0ID0gYXJyYXkuc2xpY2UoMCwgbWlkKTtcbiAgICBjb25zdCByaWdodFBhcnQgPSBhcnJheS5zbGljZShtaWQsIGFycmF5Lmxlbmd0aCk7XG5cbiAgICBtZXJnZVNvcnQobGVmdFBhcnQpO1xuICAgIG1lcmdlU29ydChyaWdodFBhcnQpO1xuXG4gICAgbWVyZ2UoYXJyYXksIGxlZnRQYXJ0LCByaWdodFBhcnQpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufVxubWVyZ2VTb3J0KGFycjEpO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UocGFyZW50OiBudW1iZXJbXSwgc3ViMTogbnVtYmVyW10sIHN1YjI6IG51bWJlcltdKSB7XG4gIC8vIHNob3VsZCB1c2luZyBsZWZ0LHJpZ2h0LCBhbmQgbWlkZGxlIGluZGV4IGluc3RlYWRcbiAgbGV0IGkgPSAwLFxuICAgIGogPSAwLFxuICAgIGsgPSAwO1xuICB3aGlsZSAoaSA8IHN1YjEubGVuZ3RoICYmIGogPCBzdWIyLmxlbmd0aCkge1xuICAgIGlmIChzdWIxW2ldIDwgc3ViMltqXSkge1xuICAgICAgcGFyZW50W2tdID0gc3ViMVtpXTtcbiAgICAgIGkrKztcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50W2tdID0gc3ViMltqXTtcbiAgICAgIGorKztcbiAgICB9XG4gICAgaysrO1xuICB9XG5cbiAgLy8gY29weSB0aGUgcmVtYWluaW5nIGVsZW1lbnRzXG4gIHdoaWxlIChpIDwgc3ViMS5sZW5ndGgpIHtcbiAgICBwYXJlbnRba10gPSBzdWIxW2ldO1xuICAgIGkrKztcbiAgICBrKys7XG4gIH1cbiAgLy8gY29weSB0aGUgcmVtYWluaW5nIGVsZW1lbnRzXG4gIHdoaWxlIChqIDwgc3ViMi5sZW5ndGgpIHtcbiAgICBwYXJlbnRba10gPSBzdWIyW2pdO1xuICAgIGorKztcbiAgICBrKys7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IG1lcmdlU29ydCBmcm9tICcuL21lcmdlU29ydCc7XG4vKipcblxuQnVpbGQgYSBOb2RlIGNsYXNzL2ZhY3RvcnkuIEl0IHNob3VsZCBoYXZlIGFuIGF0dHJpYnV0ZSBmb3IgdGhlIGRhdGEgaXQgc3RvcmVzIGFzIHdlbGwgYXMgaXRzIGxlZnQgYW5kIHJpZ2h0IGNoaWxkcmVuLlxuXG5CdWlsZCBhIFRyZWUgY2xhc3MvZmFjdG9yeSB3aGljaCBhY2NlcHRzIGFuIGFycmF5IHdoZW4gaW5pdGlhbGl6ZWQuIFRoZSBUcmVlIGNsYXNzIHNob3VsZCBoYXZlIGEgcm9vdCBhdHRyaWJ1dGUsIHdoaWNoIHVzZXMgdGhlIHJldHVybiB2YWx1ZSBvZiBidWlsZFRyZWUgd2hpY2ggeW914oCZbGwgd3JpdGUgbmV4dC5cblxuVGlwOiBJZiB5b3Ugd291bGQgbGlrZSB0byB2aXN1YWxpemUgeW91ciBiaW5hcnkgc2VhcmNoIHRyZWUsIGhlcmUgaXMgYSBwcmV0dHlQcmludCgpIGZ1bmN0aW9uIHRoYXQgd2lsbCBjb25zb2xlLmxvZyB5b3VyIHRyZWUgaW4gYSBzdHJ1Y3R1cmVkIGZvcm1hdC5cblRoaXMgZnVuY3Rpb24gd2lsbCBleHBlY3QgdG8gcmVjZWl2ZSB0aGUgcm9vdCBvZiB5b3VyIHRyZWUgYXMgdGhlIHZhbHVlIGZvciB0aGUgbm9kZSBwYXJhbWV0ZXIuXG4qL1xuXG5jb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSAnJywgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilIIgICAnIDogJyAgICAnfWAsIGZhbHNlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSU4pSA4pSAICcgOiAn4pSM4pSA4pSAICd9JHtub2RlLnZhbHVlfWApO1xuICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAnICAgICcgOiAn4pSCICAgJ31gLCB0cnVlKTtcbiAgfVxufTtcbnR5cGUgY2IgPSAoKSA9PiB2b2lkO1xuY2xhc3MgTm9kZSB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIHJpZ2h0OiBOb2RlIHwgbnVsbDsgLy8gZ2l2ZSBpdCB0eXBlIGNsYXNzIE5vZGVcbiAgbGVmdDogTm9kZSB8IG51bGw7IC8vIGdpdmUgaXQgdHlwZSBjbGFzcyBOb2RlXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgfVxufVxuZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlcyhhcnI6IG51bWJlcltdKSB7XG4gIHJldHVybiBhcnIuZmlsdGVyKFxuICAgIChpdGVtOiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IGFyci5pbmRleE9mKGl0ZW0pID09PSBpbmRleFxuICApO1xufVxuXG5jbGFzcyBUcmVlIHtcbiAgYXJyYXk6IG51bWJlcltdO1xuICBzb3J0ZWRBcnJheTogbnVtYmVyW10gfCBudWxsO1xuICByb290OiBOb2RlIHwgbnVsbDtcbiAgc29ydGVkQXJyYXlCdXROb3RSZW1vdmVEdXBsaWNhdGVzOiBudW1iZXJbXTtcbiAgY29uc3RydWN0b3IoYXJyYXk6IG51bWJlcltdKSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgIHRoaXMuc29ydGVkQXJyYXlCdXROb3RSZW1vdmVEdXBsaWNhdGVzID0gbWVyZ2VTb3J0KGFycmF5KTtcbiAgICB0aGlzLnNvcnRlZEFycmF5ID0gcmVtb3ZlRHVwbGljYXRlcyhtZXJnZVNvcnQoYXJyYXkpKTtcbiAgICB0aGlzLnJvb3QgPSBudWxsO1xuICB9XG5cbiAgYnVpbGRUcmVlKGFycmF5OiBudW1iZXJbXSwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBOb2RlIHtcbiAgICAvLyogY2hlY2sgZW1wdHkgYXJyYXlcblxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIC8vKiBjaGVjayBpZiBpdCBpcyB0aGUgZmlyc3QgIGNhbGwgLT4gcHVzaCBub2RlIHRvIHRoaXMucm9vdD8gY3VycmVudGx5IGRvbid0IGtub3cgaG93IHRvIGRvXG4gICAgLy9iYXNlIGNhc2VcbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBudWxsO1xuICAgIC8vIHJlY3Vyc2l2ZSBjYXNlXG5cbiAgICBjb25zdCBtaWRJbmRleCA9IE1hdGguY2VpbCgoc3RhcnQgKyBlbmQpIC8gMik7XG5cbiAgICBjb25zdCBub2RlID0gbmV3IE5vZGUoYXJyYXlbbWlkSW5kZXhdKTtcblxuICAgIG5vZGUubGVmdCA9IHRoaXMuYnVpbGRUcmVlKGFycmF5LCBzdGFydCwgbWlkSW5kZXggLSAxKTtcblxuICAgIG5vZGUucmlnaHQgPSB0aGlzLmJ1aWxkVHJlZShhcnJheSwgbWlkSW5kZXggKyAxLCBlbmQpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG4gIC8qKiAqIFlvdSBtYXkgYmUgdGVtcHRlZCB0byBcbiAgICogaW1wbGVtZW50IHRoZXNlIG1ldGhvZHMgdXNpbmcgdGhlIG9yaWdpbmFsIGlucHV0IGFycmF5IHVzZWQgdG8gYnVpbGQgdGhlIHRyZWUsXG4gICAgIGJ1dCBpdOKAmXMgaW1wb3J0YW50IGZvciB0aGUgZWZmaWNpZW5jeSBvZiB0aGVzZSBvcGVyYXRpb25zIHRoYXQgeW91IGRvbuKAmXQgZG8gdGhpcy4gSWYgd2UgcmVmZXIgYmFjayB0byB0aGUgQmlnIE8gQ2hlYXRzaGVldCxcbiAgICAgd2XigJlsbCBzZWUgdGhhdCBiaW5hcnkgc2VhcmNoIHRyZWVzIGNhbiBpbnNlcnQvZGVsZXRlIGluIE8obG9nIG4pIHRpbWUsIFxuICAgICB3aGljaCBpcyBhIHNpZ25pZmljYW50IHBlcmZvcm1hbmNlIGJvb3N0IG92ZXIgYXJyYXlzIGZvciB0aGUgc2FtZSBvcGVyYXRpb25zLlxuICAgICBUbyBnZXQgdGhpcyBhZGRlZCBlZmZpY2llbmN5LCB5b3VyIGltcGxlbWVudGF0aW9uIG9mIHRoZXNlIG1ldGhvZHNcbiAgICAgIHNob3VsZCB0cmF2ZXJzZSB0aGUgdHJlZSBhbmQgbWFuaXB1bGF0ZSB0aGUgbm9kZXMgYW5kIHRoZWlyIGNvbm5lY3Rpb25zLlxuICAgICAqICovXG4gIGluc2VydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgLyogZnVuY3Rpb25zIHRoYXQgaW5zZXJ0IHRoZSBnaXZlbiB2YWx1ZS5cbiAgICB0aGUgaWRlYSBpcyB0byBjb21wYXJlIHZhbHVlIHdpdGggY3VycmVudCBub2RlLnZhbHVlXG4gICAgXG4gICAgaWYodmFsdWUgPT09IGN1cnJlbnQgbm9kZSAudmFsdWUpIHJldHVybiBjdXJyZW50IG5vZGUudmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmKHZhbHVlID4gY3VycmVudCBub2RlLnZhbHVlKSBtb3ZlIGRvd24gdG8gdGhlIG5leHQgcmlnaHQgbm9kZVxuICAgIGlmKHZhbHVlIDwgY3VycmVudCBub2RlLiB2YWx1ZSkgbW92ZSBkb3duIHRvIHRoZSBuZXh0IGxlZnQgbm9kZVxuICAgICBpZihjdXJyZW50IG5vZGUudmFsdWUgPT09IG51bGwpIHJldHVybiBjdXJyZW50IG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICBcbiAgICAqL1xuICAgIC8vIGNhbid0IHVzZSByZWN1cnNpdmUgLT4gdXNpbmcgd2hpbGVcbiAgICBsZXQgY3VycmVudCA9IHRoaXMucm9vdDtcbiAgICBjb25zdCBub2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIGlmICh0aGlzLnJvb3QgPT09IG51bGwpIHJldHVybiAodGhpcy5yb290ID0gbm9kZSk7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGN1cnJlbnQudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlID4gY3VycmVudC52YWx1ZSAmJiBjdXJyZW50LnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgIGN1cnJlbnQucmlnaHQgPSBub2RlO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCBjdXJyZW50LnZhbHVlICYmIGN1cnJlbnQubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICBjdXJyZW50LmxlZnQgPSBub2RlO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBjdXJyZW50LnZhbHVlKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnJpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubGVmdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZGVsZXRlSXRlbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgLyoqXG4gICAgICogYWxnb3JpdGhtOlxuICAgICAqIGNhc2UgMTogZGVsIGxlYWYoIGEgbm9kZSB3aXRob3V0IGNoaWxkKVxuICAgICAqIC0+XG4gICAgICpjYXNlIDI6IGRlbCBub2RlIHdpdGggb25seSBvbmUgY2hpbGRcbiAgICAgKiAtPiAgcmVwbGFjZSB0aGUgbm9kZSBieSBwYXJlbnQuY29ycmVzcG9uZGluZ0RpcmVjdGlvbiA9IGN1cnJlbnQuY2hpbGRcbiAgICAgKiBjYXNlIDM6IGRlbCBub2RlIHdpdGggdHdvIGNoaWxkXG4gICAgICogLT4gZmluZGluZyB0aGUgbmVhcmVzdCBiaWdnZXIgdGhhbiB0aGUgbm9kZSAoIG1vdmUgZG93biBvbiB0aGUgcmlnaHQpXG4gICAgICogICAtPiByZWN1cnNpdmVseSBjYWxsIGRlbGV0ZUl0ZW0odGhhdCBub2RlLnZhbHVlKVxuICAgICBcbiAgICAgKiB3ZSBuZWVkIHRvIHRyYXZlbCBhcyBpbiBpbnNlcnQoKSBtZXRob2QuXG4gICAgICovXG4gICAgbGV0IGN1cnJlbnQ6IE5vZGUgfCBudWxsID0gdGhpcy5yb290O1xuICAgIGxldCBwYXJlbnQ6IE5vZGUgfCBudWxsID0gbnVsbDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgLy8gbmVlZCB0byBpbXBsZW1lbnQgYSBwYXJlbnRcbiAgICAgIC8vIGN1cnJlbnQgPSBudWxsIHdvbid0IHdvcmsgYmVjYXVzZSAgZGlyZWN0bHkgbW9kaWZ5aW5nIGlzIG5vdCBhY2NlcHRlZCBidXQgcmVhc3NpZ25pbmcgaXMgc3RpbGwgZmluZVxuICAgICAgLy8gZm9yIGV4YW1wbGUsIHBhcmVudC5sZWZ0IChjdXJyZW50KSA9IG51bGwgaXMgYWNjZXB0ZWRcbiAgICAgIGlmICh2YWx1ZSA+IGN1cnJlbnQudmFsdWUgJiYgY3VycmVudC5yaWdodCkge1xuICAgICAgICBwYXJlbnQgPSBjdXJyZW50O1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5yaWdodDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCBjdXJyZW50LnZhbHVlICYmIGN1cnJlbnQubGVmdCkge1xuICAgICAgICBwYXJlbnQgPSBjdXJyZW50O1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gY3VycmVudC52YWx1ZSAmJiAhY3VycmVudC5sZWZ0ICYmICFjdXJyZW50LnJpZ2h0KSB7XG4gICAgICAgIC8vKiBsZWFmIG5vZGVcbiAgICAgICAgLy8gY2hlY2sgaWYgY3VycmVudCBpcyBvbiByaWdodCBvciBsZWZ0IG9mIHBhcmVudFxuICAgICAgICBjb25zb2xlLmxvZyhwYXJlbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KTtcblxuICAgICAgICAvLyB1cGRhdGUgcGFyZW50LmNvcnJlc3BvbmRpbmdEaXJlY3Rpb24gPSBudWxsXG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gY3VycmVudC52YWx1ZSAmJiAoY3VycmVudC5sZWZ0IHx8IGN1cnJlbnQucmlnaHQpKSB7XG4gICAgICAgIC8vKiBvbmUgY2hpbGQgY2FzZVxuICAgICAgICAvLyBjaGVjayBpZiBjdXJyZW50IGlzIG9uIHRoZSByaWdodCBvciBsZWZ0IG9mIHBhcmVudFxuICAgICAgICBjb25zb2xlLmxvZyhwYXJlbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KTtcblxuICAgICAgICAvLyAgdXBkYXRlIHBhcmVudC5jb3JyZXNwb25kaW5nRGlyZWN0aW9uID0gY3VycmVudC5jb3JyZXNwb25kaW5nRGlyZWN0aW9uXG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gY3VycmVudC52YWx1ZSAmJiBjdXJyZW50LmxlZnQgJiYgY3VycmVudC5yaWdodCkge1xuICAgICAgICAvLyogdHdvIGNoaWxkZSBjYXNlXG4gICAgICAgIC8vIGNoZWNrIGlmIGN1cnJlbnQgaXMgb24gdGhlIHJpZ2h0IG9yIGxlZnQgb2YgcGFyZW50XG4gICAgICAgIC8vIGZpbmRpbmcgdGhlIG5lYXJlc3QgYmlnZ2VyIHRoYW4gY3VycmVudCAobW92ZSByaWdodCBvbmNlLCBhbmQgbW92ZSBsZWZ0IHVudGlsbCBudWxsKVxuICAgICAgICAvLyBwYXJlbnQuY29ycmVzcG9uZGluZ0RpcmVjdGlvbiA9IHRoYXQgbmVhcmVzdFxuICAgICAgICAvLyBkZWxldGVJdGVtKHRoYXQgbmVhcmVzdC52YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2cocGFyZW50KTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmaW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICAvKipcbiAgICAgKiBXcml0ZSBhIGZpbmQodmFsdWUpIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbm9kZSB3aXRoIHRoZSBnaXZlbiB2YWx1ZVxuICAgICAqL1xuICB9XG4gIGxldmVsT3JkZXIoY2FsbGJhY2s6IGNiKSB7XG4gICAgLyoqXG4gICAgICogV3JpdGUgYSBsZXZlbE9yZGVyKGNhbGxiYWNrKSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gYXMgaXRzIHBhcmFtZXRlci5cbiAgICAgKiBsZXZlbE9yZGVyIHNob3VsZCB0cmF2ZXJzZSB0aGUgdHJlZSBpbiBicmVhZHRoLWZpcnN0IGxldmVsIG9yZGVyIGFuZCBwcm92aWRlIGVhY2ggbm9kZSBhcyBhbiBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2suXG4gICAgICogIEFzIGEgcmVzdWx0LCB0aGUgY2FsbGJhY2sgd2lsbCBwZXJmb3JtIGFuIG9wZXJhdGlvbiBvbiBlYWNoIG5vZGUgZm9sbG93aW5nIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IGFyZSB0cmF2ZXJzZWQuXG4gICAgICogbGV2ZWxPcmRlciBtYXkgYmUgaW1wbGVtZW50ZWQgdXNpbmcgZWl0aGVyIGl0ZXJhdGlvbiBvciByZWN1cnNpb24gKHRyeSBpbXBsZW1lbnRpbmcgYm90aCEpLlxuICAgICAqIFRoZSBtZXRob2Qgc2hvdWxkIHJldHVybiBhbiBhcnJheSBvZiB2YWx1ZXMgaWYgbm8gY2FsbGJhY2sgaXMgZ2l2ZW4gYXMgYW4gYXJndW1lbnQuXG4gICAgICogIFRpcDogWW91IHdpbGwgd2FudCB0byB1c2UgYW4gYXJyYXkgYWN0aW5nIGFzIGEgcXVldWUgdG8ga2VlcCB0cmFjayBvZiBhbGwgdGhlIGNoaWxkIG5vZGVzIHRoYXQgeW91IGhhdmUgeWV0IHRvIHRyYXZlcnNlIGFuZCB0byBhZGQgbmV3IG9uZXMgdG8gdGhlIGxpc3QgKGFzIHlvdSBzYXcgaW4gdGhlIHZpZGVvKS5cbiAgICAgKi9cbiAgfVxuXG4gIC8qKldyaXRlIGluT3JkZXIoY2FsbGJhY2spLCBwcmVPcmRlcihjYWxsYmFjayksIGFuZCBwb3N0T3JkZXIoY2FsbGJhY2spIGZ1bmN0aW9ucyB0aGF0IGFsc28gYWNjZXB0IGFuIG9wdGlvbmFsIGNhbGxiYWNrIGFzIGEgcGFyYW1ldGVyLlxuICAgKiBFYWNoIG9mIHRoZXNlIGZ1bmN0aW9ucyBzaG91bGQgdHJhdmVyc2UgdGhlIHRyZWUgaW4gdGhlaXIgcmVzcGVjdGl2ZSBkZXB0aC1maXJzdCBvcmRlciBhbmQgeWllbGQgZWFjaCBub2RlIHRvIHRoZSBwcm92aWRlZCBjYWxsYmFjay5cbiAgICogVGhlIGZ1bmN0aW9ucyBzaG91bGQgcmV0dXJuIGFuIGFycmF5IG9mIHZhbHVlcyBpZiBubyBjYWxsYmFjayBpcyBnaXZlbiBhcyBhbiBhcmd1bWVudC4gKi9cbiAgaW5PcmRlcihjYWxsYmFjazogY2IpIHtcbiAgICAvL1xuICB9XG4gIHByZU9yZGVyKGNhbGxiYWNrOiBjYikge1xuICAgIC8vXG4gIH1cbiAgcG9zdE9yZGVyKGNhbGxiYWNrOiBjYikge1xuICAgIC8vXG4gIH1cbiAgaGVpZ2h0KG5vZGU6IE5vZGUpIHtcbiAgICAvL1dyaXRlIGEgaGVpZ2h0KG5vZGUpIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZ2l2ZW4gbm9kZeKAmXMgaGVpZ2h0LlxuICAgIC8vIEhlaWdodCBpcyBkZWZpbmVkIGFzIHRoZSBudW1iZXIgb2YgZWRnZXMgaW4gdGhlIGxvbmdlc3QgcGF0aCBmcm9tIGEgZ2l2ZW4gbm9kZSB0byBhIGxlYWYgbm9kZS5cbiAgfVxuICBkZXB0aChub2RlOiBOb2RlKSB7XG4gICAgLy9Xcml0ZSBhIGRlcHRoKG5vZGUpIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZ2l2ZW4gbm9kZeKAmXMgZGVwdGguXG4gICAgLy9EZXB0aCBpcyBkZWZpbmVkIGFzIHRoZSBudW1iZXIgb2YgZWRnZXMgaW4gdGhlIHBhdGggZnJvbSBhIGdpdmVuIG5vZGUgdG8gdGhlIHRyZWXigJlzIHJvb3Qgbm9kZS5cbiAgfVxuICBpc0JhbGFuY2VkKCkge1xuICAgIC8vV3JpdGUgYW4gaXNCYWxhbmNlZCBmdW5jdGlvbiB0aGF0IGNoZWNrcyBpZiB0aGUgdHJlZSBpcyBiYWxhbmNlZC5cbiAgICAvLyBBIGJhbGFuY2VkIHRyZWUgaXMgb25lIHdoZXJlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gaGVpZ2h0cyBvZiB0aGUgbGVmdCBzdWJ0cmVlXG4gICAgLy8gYW5kIHRoZSByaWdodCBzdWJ0cmVlIG9mIGV2ZXJ5IG5vZGUgaXMgbm90IG1vcmUgdGhhbiAxLlxuICB9XG4gIHJlYmFsYW5jZSgpIHtcbiAgICAvL1dyaXRlIGEgcmViYWxhbmNlIGZ1bmN0aW9uIHRoYXQgcmViYWxhbmNlcyBhbiB1bmJhbGFuY2VkIHRyZWUuXG4gICAgLy8gVGlwOiBZb3XigJlsbCB3YW50IHRvIHVzZSBhIHRyYXZlcnNhbCBtZXRob2QgdG8gcHJvdmlkZSBhIG5ldyBhcnJheSB0byB0aGUgYnVpbGRUcmVlIGZ1bmN0aW9uLlxuICB9XG59XG5cbmNvbnN0IHRyZWUgPSBuZXcgVHJlZShbNSwgMSwgNSwgMiwgMiwgMiwgOSwgNywgMywgNCwgOCwgNl0pOyAvLyAxLDIsMyw0LDUsNiw3LDgsOVxudHJlZS5yb290ID0gdHJlZS5idWlsZFRyZWUodHJlZS5zb3J0ZWRBcnJheSwgMCwgdHJlZS5zb3J0ZWRBcnJheS5sZW5ndGggLSAxKTtcblxuY29uc29sZS5sb2codHJlZS5yb290KTtcbmxldCBjdXJyZW50ID0gdHJlZS5yb290LmxlZnQubGVmdC5sZWZ0O1xubGV0IHBhcmVudCA9IHRyZWUucm9vdC5sZWZ0LmxlZnQ7XG4vLyBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xuY29uc29sZS5sb2coY3VycmVudCk7XG5cbmNvbnNvbGUubG9nKHBhcmVudCk7XG5cbnByZXR0eVByaW50KHRyZWUucm9vdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=