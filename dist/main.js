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
         * ->  replace the node and let the child pointed to its parent'parent
         * case 3: del node with two child
         * -> finding the nearest bigger than the node ( move down on the right)
         *   -> recursively call deleteItem(that node.value)
         *
         * we need to travel as in insert() method.
         */
        var current = this.root;
        while (true) {
            if (
            // leaf node
            current.value === value &&
                current.left === null &&
                current.right === null) {
                current = null; // delete the leaf
                console.log(current); // current is null here
                console.log('why is it not deleted');
                break;
            }
            else if (current.value === value && (current.left || current.right)) {
                if (current.left !== null) {
                    current = current.left;
                    break;
                }
                else {
                    current = current.right;
                    break;
                }
            }
            else if (current.value === value && current.left && current.right) {
                var subCurrent = current.right;
                while (subCurrent.left !== null) {
                    subCurrent = subCurrent.left;
                }
                this.deleteItem(subCurrent.value);
                current = subCurrent;
            }
            else if (value > current.value) {
                // move
                current = current.right;
            }
            else if (value < current.value) {
                // move
                current = current.left;
            }
            else {
                console.log('calm down after writing this function. Okay?');
                break;
            }
        }
    };
    Tree.prototype.deleteItemz = function (value) {
        var _a, _b;
        var parent = null;
        var current = this.root;
        while (current !== null) {
            if (value > current.value) {
                parent = current;
                current = current.right;
            }
            else if (value < current.value) {
                parent = current;
                current = current.left;
            }
            else {
                if (current.left !== null && current.right !== null) {
                    var subCurrent = current.right;
                    while (subCurrent.left !== null) {
                        subCurrent = subCurrent.left;
                    }
                    current.value = subCurrent.value;
                    this.deleteItem(subCurrent.value);
                    break;
                }
                else {
                    if (parent === null) {
                        if (current.left !== null) {
                            current.value = current.left.value;
                            current.right = current.left.right;
                            current.left = current.left.left;
                        }
                        else if (current.right !== null) {
                            current.value = current.right.value;
                            current.left = current.right.left;
                            current.right = current.right.right;
                        }
                        else {
                            throw new Error('Cannot delete root element.');
                        }
                    }
                    else if (parent.left === current) {
                        parent.left = (_a = current.left) !== null && _a !== void 0 ? _a : current.right;
                    }
                    else if (parent.right === current) {
                        parent.right = (_b = current.left) !== null && _b !== void 0 ? _b : current.right;
                    }
                    break;
                }
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
tree.deleteItemz(5);
console.log(tree.root);
prettyPrint(tree.root);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixDQUFDO0lBQ0QsdUJBQVEsR0FBUixVQUFTLFFBQVk7UUFDbkIsRUFBRTtJQUNKLENBQUM7SUFDRCx3QkFBUyxHQUFULFVBQVUsUUFBWTtRQUNwQixFQUFFO0lBQ0osQ0FBQztJQUNELHFCQUFNLEdBQU4sVUFBTyxJQUFVO1FBQ2YscUVBQXFFO1FBQ3JFLGlHQUFpRztJQUNuRyxDQUFDO0lBQ0Qsb0JBQUssR0FBTCxVQUFNLElBQVU7UUFDZCxtRUFBbUU7UUFDbkUsZ0dBQWdHO0lBQ2xHLENBQUM7SUFDRCx5QkFBVSxHQUFWO1FBQ0UsbUVBQW1FO1FBQ25FLGtGQUFrRjtRQUNsRiwwREFBMEQ7SUFDNUQsQ0FBQztJQUNELHdCQUFTLEdBQVQ7UUFDRSxnRUFBZ0U7UUFDaEUsK0ZBQStGO0lBQ2pHLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO0FBQ2pGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUU3RSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXZCLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL21lcmdlU29ydC50cyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQHRhaWx3aW5kIGJhc2U7XG5AdGFpbHdpbmQgY29tcG9uZW50cztcbkB0YWlsd2luZCB1dGlsaXRpZXM7XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBLGNBQVM7QUFDVCxvQkFBUztBQUNULG1CQUFTXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vKiBtYWluIHNjc3Mgc3R5bGUgc2hlZXRcXG5AdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYXJyMSA9IFszLCAyLCAyLCAxMywgOCwgNSwgMCwgMV07IC8vIHJldHVybiBbMCwgMSwgMSwgMiwgMywgNSwgOCwgMTNdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlU29ydChhcnJheTogbnVtYmVyW10pIHtcbiAgLy8gY2hhbmdlIHRvIGxlZnQsIHJpZ2h0LCBhbmQgbWlkZGxlIGluZGV4IGluc3RlYWRcblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMSkge1xuICAgIGxldCBtaWQgPSBhcnJheS5sZW5ndGggLyAyO1xuICAgIGlmIChtaWQgJSAyICE9PSAwKSBtaWQgPSBNYXRoLnJvdW5kKG1pZCk7XG4gICAgY29uc3QgbGVmdFBhcnQgPSBhcnJheS5zbGljZSgwLCBtaWQpO1xuICAgIGNvbnN0IHJpZ2h0UGFydCA9IGFycmF5LnNsaWNlKG1pZCwgYXJyYXkubGVuZ3RoKTtcblxuICAgIG1lcmdlU29ydChsZWZ0UGFydCk7XG4gICAgbWVyZ2VTb3J0KHJpZ2h0UGFydCk7XG5cbiAgICBtZXJnZShhcnJheSwgbGVmdFBhcnQsIHJpZ2h0UGFydCk7XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5tZXJnZVNvcnQoYXJyMSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShwYXJlbnQ6IG51bWJlcltdLCBzdWIxOiBudW1iZXJbXSwgc3ViMjogbnVtYmVyW10pIHtcbiAgLy8gc2hvdWxkIHVzaW5nIGxlZnQscmlnaHQsIGFuZCBtaWRkbGUgaW5kZXggaW5zdGVhZFxuICBsZXQgaSA9IDAsXG4gICAgaiA9IDAsXG4gICAgayA9IDA7XG4gIHdoaWxlIChpIDwgc3ViMS5sZW5ndGggJiYgaiA8IHN1YjIubGVuZ3RoKSB7XG4gICAgaWYgKHN1YjFbaV0gPCBzdWIyW2pdKSB7XG4gICAgICBwYXJlbnRba10gPSBzdWIxW2ldO1xuICAgICAgaSsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnRba10gPSBzdWIyW2pdO1xuICAgICAgaisrO1xuICAgIH1cbiAgICBrKys7XG4gIH1cblxuICAvLyBjb3B5IHRoZSByZW1haW5pbmcgZWxlbWVudHNcbiAgd2hpbGUgKGkgPCBzdWIxLmxlbmd0aCkge1xuICAgIHBhcmVudFtrXSA9IHN1YjFbaV07XG4gICAgaSsrO1xuICAgIGsrKztcbiAgfVxuICAvLyBjb3B5IHRoZSByZW1haW5pbmcgZWxlbWVudHNcbiAgd2hpbGUgKGogPCBzdWIyLmxlbmd0aCkge1xuICAgIHBhcmVudFtrXSA9IHN1YjJbal07XG4gICAgaisrO1xuICAgIGsrKztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgbWVyZ2VTb3J0IGZyb20gJy4vbWVyZ2VTb3J0Jztcbi8qKlxuXG5CdWlsZCBhIE5vZGUgY2xhc3MvZmFjdG9yeS4gSXQgc2hvdWxkIGhhdmUgYW4gYXR0cmlidXRlIGZvciB0aGUgZGF0YSBpdCBzdG9yZXMgYXMgd2VsbCBhcyBpdHMgbGVmdCBhbmQgcmlnaHQgY2hpbGRyZW4uXG5cbkJ1aWxkIGEgVHJlZSBjbGFzcy9mYWN0b3J5IHdoaWNoIGFjY2VwdHMgYW4gYXJyYXkgd2hlbiBpbml0aWFsaXplZC4gVGhlIFRyZWUgY2xhc3Mgc2hvdWxkIGhhdmUgYSByb290IGF0dHJpYnV0ZSwgd2hpY2ggdXNlcyB0aGUgcmV0dXJuIHZhbHVlIG9mIGJ1aWxkVHJlZSB3aGljaCB5b3XigJlsbCB3cml0ZSBuZXh0LlxuXG5UaXA6IElmIHlvdSB3b3VsZCBsaWtlIHRvIHZpc3VhbGl6ZSB5b3VyIGJpbmFyeSBzZWFyY2ggdHJlZSwgaGVyZSBpcyBhIHByZXR0eVByaW50KCkgZnVuY3Rpb24gdGhhdCB3aWxsIGNvbnNvbGUubG9nIHlvdXIgdHJlZSBpbiBhIHN0cnVjdHVyZWQgZm9ybWF0LlxuVGhpcyBmdW5jdGlvbiB3aWxsIGV4cGVjdCB0byByZWNlaXZlIHRoZSByb290IG9mIHlvdXIgdHJlZSBhcyB0aGUgdmFsdWUgZm9yIHRoZSBub2RlIHBhcmFtZXRlci5cbiovXG5cbmNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9ICcnLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4gIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUgiAgICcgOiAnICAgICd9YCwgZmFsc2UpO1xuICB9XG4gIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilJTilIDilIAgJyA6ICfilIzilIDilIAgJ30ke25vZGUudmFsdWV9YCk7XG4gIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICcgICAgJyA6ICfilIIgICAnfWAsIHRydWUpO1xuICB9XG59O1xudHlwZSBjYiA9ICgpID0+IHZvaWQ7XG5jbGFzcyBOb2RlIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgcmlnaHQ6IE5vZGUgfCBudWxsOyAvLyBnaXZlIGl0IHR5cGUgY2xhc3MgTm9kZVxuICBsZWZ0OiBOb2RlIHwgbnVsbDsgLy8gZ2l2ZSBpdCB0eXBlIGNsYXNzIE5vZGVcbiAgY29uc3RydWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICB9XG59XG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzKGFycjogbnVtYmVyW10pIHtcbiAgcmV0dXJuIGFyci5maWx0ZXIoXG4gICAgKGl0ZW06IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4gYXJyLmluZGV4T2YoaXRlbSkgPT09IGluZGV4XG4gICk7XG59XG5cbmNsYXNzIFRyZWUge1xuICBhcnJheTogbnVtYmVyW107XG4gIHNvcnRlZEFycmF5OiBudW1iZXJbXSB8IG51bGw7XG4gIHJvb3Q6IE5vZGUgfCBudWxsO1xuICBzb3J0ZWRBcnJheUJ1dE5vdFJlbW92ZUR1cGxpY2F0ZXM6IG51bWJlcltdO1xuICBjb25zdHJ1Y3RvcihhcnJheTogbnVtYmVyW10pIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgdGhpcy5zb3J0ZWRBcnJheUJ1dE5vdFJlbW92ZUR1cGxpY2F0ZXMgPSBtZXJnZVNvcnQoYXJyYXkpO1xuICAgIHRoaXMuc29ydGVkQXJyYXkgPSByZW1vdmVEdXBsaWNhdGVzKG1lcmdlU29ydChhcnJheSkpO1xuICAgIHRoaXMucm9vdCA9IG51bGw7XG4gIH1cblxuICBidWlsZFRyZWUoYXJyYXk6IG51bWJlcltdLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IE5vZGUge1xuICAgIC8vKiBjaGVjayBlbXB0eSBhcnJheVxuXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgLy8qIGNoZWNrIGlmIGl0IGlzIHRoZSBmaXJzdCAgY2FsbCAtPiBwdXNoIG5vZGUgdG8gdGhpcy5yb290PyBjdXJyZW50bHkgZG9uJ3Qga25vdyBob3cgdG8gZG9cbiAgICAvL2Jhc2UgY2FzZVxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIG51bGw7XG4gICAgLy8gcmVjdXJzaXZlIGNhc2VcblxuICAgIGNvbnN0IG1pZEluZGV4ID0gTWF0aC5jZWlsKChzdGFydCArIGVuZCkgLyAyKTtcblxuICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZShhcnJheVttaWRJbmRleF0pO1xuXG4gICAgbm9kZS5sZWZ0ID0gdGhpcy5idWlsZFRyZWUoYXJyYXksIHN0YXJ0LCBtaWRJbmRleCAtIDEpO1xuXG4gICAgbm9kZS5yaWdodCA9IHRoaXMuYnVpbGRUcmVlKGFycmF5LCBtaWRJbmRleCArIDEsIGVuZCk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgLyoqICogWW91IG1heSBiZSB0ZW1wdGVkIHRvIFxuICAgKiBpbXBsZW1lbnQgdGhlc2UgbWV0aG9kcyB1c2luZyB0aGUgb3JpZ2luYWwgaW5wdXQgYXJyYXkgdXNlZCB0byBidWlsZCB0aGUgdHJlZSxcbiAgICAgYnV0IGl04oCZcyBpbXBvcnRhbnQgZm9yIHRoZSBlZmZpY2llbmN5IG9mIHRoZXNlIG9wZXJhdGlvbnMgdGhhdCB5b3UgZG9u4oCZdCBkbyB0aGlzLiBJZiB3ZSByZWZlciBiYWNrIHRvIHRoZSBCaWcgTyBDaGVhdHNoZWV0LFxuICAgICB3ZeKAmWxsIHNlZSB0aGF0IGJpbmFyeSBzZWFyY2ggdHJlZXMgY2FuIGluc2VydC9kZWxldGUgaW4gTyhsb2cgbikgdGltZSwgXG4gICAgIHdoaWNoIGlzIGEgc2lnbmlmaWNhbnQgcGVyZm9ybWFuY2UgYm9vc3Qgb3ZlciBhcnJheXMgZm9yIHRoZSBzYW1lIG9wZXJhdGlvbnMuXG4gICAgIFRvIGdldCB0aGlzIGFkZGVkIGVmZmljaWVuY3ksIHlvdXIgaW1wbGVtZW50YXRpb24gb2YgdGhlc2UgbWV0aG9kc1xuICAgICAgc2hvdWxkIHRyYXZlcnNlIHRoZSB0cmVlIGFuZCBtYW5pcHVsYXRlIHRoZSBub2RlcyBhbmQgdGhlaXIgY29ubmVjdGlvbnMuXG4gICAgICogKi9cbiAgaW5zZXJ0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAvKiBmdW5jdGlvbnMgdGhhdCBpbnNlcnQgdGhlIGdpdmVuIHZhbHVlLlxuICAgIHRoZSBpZGVhIGlzIHRvIGNvbXBhcmUgdmFsdWUgd2l0aCBjdXJyZW50IG5vZGUudmFsdWVcbiAgICBcbiAgICBpZih2YWx1ZSA9PT0gY3VycmVudCBub2RlIC52YWx1ZSkgcmV0dXJuIGN1cnJlbnQgbm9kZS52YWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYodmFsdWUgPiBjdXJyZW50IG5vZGUudmFsdWUpIG1vdmUgZG93biB0byB0aGUgbmV4dCByaWdodCBub2RlXG4gICAgaWYodmFsdWUgPCBjdXJyZW50IG5vZGUuIHZhbHVlKSBtb3ZlIGRvd24gdG8gdGhlIG5leHQgbGVmdCBub2RlXG4gICAgIGlmKGN1cnJlbnQgbm9kZS52YWx1ZSA9PT0gbnVsbCkgcmV0dXJuIGN1cnJlbnQgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgIFxuICAgICovXG4gICAgLy8gY2FuJ3QgdXNlIHJlY3Vyc2l2ZSAtPiB1c2luZyB3aGlsZVxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5yb290O1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMucm9vdCA9PT0gbnVsbCkgcmV0dXJuICh0aGlzLnJvb3QgPSBub2RlKTtcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoY3VycmVudC52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgPiBjdXJyZW50LnZhbHVlICYmIGN1cnJlbnQucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudC5yaWdodCA9IG5vZGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IGN1cnJlbnQudmFsdWUgJiYgY3VycmVudC5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgIGN1cnJlbnQubGVmdCA9IG5vZGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IGN1cnJlbnQudmFsdWUpIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucmlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBkZWxldGVJdGVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICAvKipcbiAgICAgKiBhbGdvcml0aG06XG4gICAgICogY2FzZSAxOiBkZWwgbGVhZiggYSBub2RlIHdpdGhvdXQgY2hpbGQpXG4gICAgICogLT5cbiAgICAgKmNhc2UgMjogZGVsIG5vZGUgd2l0aCBvbmx5IG9uZSBjaGlsZFxuICAgICAqIC0+ICByZXBsYWNlIHRoZSBub2RlIGFuZCBsZXQgdGhlIGNoaWxkIHBvaW50ZWQgdG8gaXRzIHBhcmVudCdwYXJlbnRcbiAgICAgKiBjYXNlIDM6IGRlbCBub2RlIHdpdGggdHdvIGNoaWxkXG4gICAgICogLT4gZmluZGluZyB0aGUgbmVhcmVzdCBiaWdnZXIgdGhhbiB0aGUgbm9kZSAoIG1vdmUgZG93biBvbiB0aGUgcmlnaHQpXG4gICAgICogICAtPiByZWN1cnNpdmVseSBjYWxsIGRlbGV0ZUl0ZW0odGhhdCBub2RlLnZhbHVlKVxuICAgICAqXG4gICAgICogd2UgbmVlZCB0byB0cmF2ZWwgYXMgaW4gaW5zZXJ0KCkgbWV0aG9kLlxuICAgICAqL1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5yb290O1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gbGVhZiBub2RlXG4gICAgICAgIGN1cnJlbnQudmFsdWUgPT09IHZhbHVlICYmXG4gICAgICAgIGN1cnJlbnQubGVmdCA9PT0gbnVsbCAmJlxuICAgICAgICBjdXJyZW50LnJpZ2h0ID09PSBudWxsXG4gICAgICApIHtcbiAgICAgICAgY3VycmVudCA9IG51bGw7IC8vIGRlbGV0ZSB0aGUgbGVhZlxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KTsgLy8gY3VycmVudCBpcyBudWxsIGhlcmVcblxuICAgICAgICBjb25zb2xlLmxvZygnd2h5IGlzIGl0IG5vdCBkZWxldGVkJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50LnZhbHVlID09PSB2YWx1ZSAmJiAoY3VycmVudC5sZWZ0IHx8IGN1cnJlbnQucmlnaHQpKSB7XG4gICAgICAgIGlmIChjdXJyZW50LmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucmlnaHQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudC52YWx1ZSA9PT0gdmFsdWUgJiYgY3VycmVudC5sZWZ0ICYmIGN1cnJlbnQucmlnaHQpIHtcbiAgICAgICAgbGV0IHN1YkN1cnJlbnQgPSBjdXJyZW50LnJpZ2h0O1xuICAgICAgICB3aGlsZSAoc3ViQ3VycmVudC5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgc3ViQ3VycmVudCA9IHN1YkN1cnJlbnQubGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVsZXRlSXRlbShzdWJDdXJyZW50LnZhbHVlKTtcbiAgICAgICAgY3VycmVudCA9IHN1YkN1cnJlbnQ7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID4gY3VycmVudC52YWx1ZSkge1xuICAgICAgICAvLyBtb3ZlXG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnJpZ2h0O1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IGN1cnJlbnQudmFsdWUpIHtcbiAgICAgICAgLy8gbW92ZVxuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NhbG0gZG93biBhZnRlciB3cml0aW5nIHRoaXMgZnVuY3Rpb24uIE9rYXk/Jyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlSXRlbXoodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBwYXJlbnQ6IE5vZGUgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgY3VycmVudDogTm9kZSB8IG51bGwgPSB0aGlzLnJvb3Q7XG5cbiAgICB3aGlsZSAoY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHZhbHVlID4gY3VycmVudC52YWx1ZSkge1xuICAgICAgICBwYXJlbnQgPSBjdXJyZW50O1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5yaWdodDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCBjdXJyZW50LnZhbHVlKSB7XG4gICAgICAgIHBhcmVudCA9IGN1cnJlbnQ7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmxlZnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY3VycmVudC5sZWZ0ICE9PSBudWxsICYmIGN1cnJlbnQucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICBsZXQgc3ViQ3VycmVudCA9IGN1cnJlbnQucmlnaHQ7XG4gICAgICAgICAgd2hpbGUgKHN1YkN1cnJlbnQubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3ViQ3VycmVudCA9IHN1YkN1cnJlbnQubGVmdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdXJyZW50LnZhbHVlID0gc3ViQ3VycmVudC52YWx1ZTtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUl0ZW0oc3ViQ3VycmVudC52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjdXJyZW50LnZhbHVlID0gY3VycmVudC5sZWZ0LnZhbHVlO1xuICAgICAgICAgICAgICBjdXJyZW50LnJpZ2h0ID0gY3VycmVudC5sZWZ0LnJpZ2h0O1xuICAgICAgICAgICAgICBjdXJyZW50LmxlZnQgPSBjdXJyZW50LmxlZnQubGVmdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjdXJyZW50LnZhbHVlID0gY3VycmVudC5yaWdodC52YWx1ZTtcbiAgICAgICAgICAgICAgY3VycmVudC5sZWZ0ID0gY3VycmVudC5yaWdodC5sZWZ0O1xuICAgICAgICAgICAgICBjdXJyZW50LnJpZ2h0ID0gY3VycmVudC5yaWdodC5yaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZSByb290IGVsZW1lbnQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJlbnQubGVmdCA9PT0gY3VycmVudCkge1xuICAgICAgICAgICAgcGFyZW50LmxlZnQgPSBjdXJyZW50LmxlZnQgPz8gY3VycmVudC5yaWdodDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcmVudC5yaWdodCA9PT0gY3VycmVudCkge1xuICAgICAgICAgICAgcGFyZW50LnJpZ2h0ID0gY3VycmVudC5sZWZ0ID8/IGN1cnJlbnQucmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZmluZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgLyoqXG4gICAgICogV3JpdGUgYSBmaW5kKHZhbHVlKSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5vZGUgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVcbiAgICAgKi9cbiAgfVxuICBsZXZlbE9yZGVyKGNhbGxiYWNrOiBjYikge1xuICAgIC8qKlxuICAgICAqIFdyaXRlIGEgbGV2ZWxPcmRlcihjYWxsYmFjaykgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIGFzIGl0cyBwYXJhbWV0ZXIuXG4gICAgICogbGV2ZWxPcmRlciBzaG91bGQgdHJhdmVyc2UgdGhlIHRyZWUgaW4gYnJlYWR0aC1maXJzdCBsZXZlbCBvcmRlciBhbmQgcHJvdmlkZSBlYWNoIG5vZGUgYXMgYW4gYXJndW1lbnQgdG8gdGhlIGNhbGxiYWNrLlxuICAgICAqICBBcyBhIHJlc3VsdCwgdGhlIGNhbGxiYWNrIHdpbGwgcGVyZm9ybSBhbiBvcGVyYXRpb24gb24gZWFjaCBub2RlIGZvbGxvd2luZyB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSBhcmUgdHJhdmVyc2VkLlxuICAgICAqIGxldmVsT3JkZXIgbWF5IGJlIGltcGxlbWVudGVkIHVzaW5nIGVpdGhlciBpdGVyYXRpb24gb3IgcmVjdXJzaW9uICh0cnkgaW1wbGVtZW50aW5nIGJvdGghKS5cbiAgICAgKiBUaGUgbWV0aG9kIHNob3VsZCByZXR1cm4gYW4gYXJyYXkgb2YgdmFsdWVzIGlmIG5vIGNhbGxiYWNrIGlzIGdpdmVuIGFzIGFuIGFyZ3VtZW50LlxuICAgICAqICBUaXA6IFlvdSB3aWxsIHdhbnQgdG8gdXNlIGFuIGFycmF5IGFjdGluZyBhcyBhIHF1ZXVlIHRvIGtlZXAgdHJhY2sgb2YgYWxsIHRoZSBjaGlsZCBub2RlcyB0aGF0IHlvdSBoYXZlIHlldCB0byB0cmF2ZXJzZSBhbmQgdG8gYWRkIG5ldyBvbmVzIHRvIHRoZSBsaXN0IChhcyB5b3Ugc2F3IGluIHRoZSB2aWRlbykuXG4gICAgICovXG4gIH1cblxuICAvKipXcml0ZSBpbk9yZGVyKGNhbGxiYWNrKSwgcHJlT3JkZXIoY2FsbGJhY2spLCBhbmQgcG9zdE9yZGVyKGNhbGxiYWNrKSBmdW5jdGlvbnMgdGhhdCBhbHNvIGFjY2VwdCBhbiBvcHRpb25hbCBjYWxsYmFjayBhcyBhIHBhcmFtZXRlci5cbiAgICogRWFjaCBvZiB0aGVzZSBmdW5jdGlvbnMgc2hvdWxkIHRyYXZlcnNlIHRoZSB0cmVlIGluIHRoZWlyIHJlc3BlY3RpdmUgZGVwdGgtZmlyc3Qgb3JkZXIgYW5kIHlpZWxkIGVhY2ggbm9kZSB0byB0aGUgcHJvdmlkZWQgY2FsbGJhY2suXG4gICAqIFRoZSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhbiBhcnJheSBvZiB2YWx1ZXMgaWYgbm8gY2FsbGJhY2sgaXMgZ2l2ZW4gYXMgYW4gYXJndW1lbnQuICovXG4gIGluT3JkZXIoY2FsbGJhY2s6IGNiKSB7XG4gICAgLy9cbiAgfVxuICBwcmVPcmRlcihjYWxsYmFjazogY2IpIHtcbiAgICAvL1xuICB9XG4gIHBvc3RPcmRlcihjYWxsYmFjazogY2IpIHtcbiAgICAvL1xuICB9XG4gIGhlaWdodChub2RlOiBOb2RlKSB7XG4gICAgLy9Xcml0ZSBhIGhlaWdodChub2RlKSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGdpdmVuIG5vZGXigJlzIGhlaWdodC5cbiAgICAvLyBIZWlnaHQgaXMgZGVmaW5lZCBhcyB0aGUgbnVtYmVyIG9mIGVkZ2VzIGluIHRoZSBsb25nZXN0IHBhdGggZnJvbSBhIGdpdmVuIG5vZGUgdG8gYSBsZWFmIG5vZGUuXG4gIH1cbiAgZGVwdGgobm9kZTogTm9kZSkge1xuICAgIC8vV3JpdGUgYSBkZXB0aChub2RlKSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGdpdmVuIG5vZGXigJlzIGRlcHRoLlxuICAgIC8vRGVwdGggaXMgZGVmaW5lZCBhcyB0aGUgbnVtYmVyIG9mIGVkZ2VzIGluIHRoZSBwYXRoIGZyb20gYSBnaXZlbiBub2RlIHRvIHRoZSB0cmVl4oCZcyByb290IG5vZGUuXG4gIH1cbiAgaXNCYWxhbmNlZCgpIHtcbiAgICAvL1dyaXRlIGFuIGlzQmFsYW5jZWQgZnVuY3Rpb24gdGhhdCBjaGVja3MgaWYgdGhlIHRyZWUgaXMgYmFsYW5jZWQuXG4gICAgLy8gQSBiYWxhbmNlZCB0cmVlIGlzIG9uZSB3aGVyZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGhlaWdodHMgb2YgdGhlIGxlZnQgc3VidHJlZVxuICAgIC8vIGFuZCB0aGUgcmlnaHQgc3VidHJlZSBvZiBldmVyeSBub2RlIGlzIG5vdCBtb3JlIHRoYW4gMS5cbiAgfVxuICByZWJhbGFuY2UoKSB7XG4gICAgLy9Xcml0ZSBhIHJlYmFsYW5jZSBmdW5jdGlvbiB0aGF0IHJlYmFsYW5jZXMgYW4gdW5iYWxhbmNlZCB0cmVlLlxuICAgIC8vIFRpcDogWW914oCZbGwgd2FudCB0byB1c2UgYSB0cmF2ZXJzYWwgbWV0aG9kIHRvIHByb3ZpZGUgYSBuZXcgYXJyYXkgdG8gdGhlIGJ1aWxkVHJlZSBmdW5jdGlvbi5cbiAgfVxufVxuXG5jb25zdCB0cmVlID0gbmV3IFRyZWUoWzUsIDEsIDUsIDIsIDIsIDIsIDksIDcsIDMsIDQsIDgsIDZdKTsgLy8gMSwyLDMsNCw1LDYsNyw4LDlcbnRyZWUucm9vdCA9IHRyZWUuYnVpbGRUcmVlKHRyZWUuc29ydGVkQXJyYXksIDAsIHRyZWUuc29ydGVkQXJyYXkubGVuZ3RoIC0gMSk7XG5cbnRyZWUuZGVsZXRlSXRlbXooNSk7XG5jb25zb2xlLmxvZyh0cmVlLnJvb3QpO1xuXG5wcmV0dHlQcmludCh0cmVlLnJvb3QpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9