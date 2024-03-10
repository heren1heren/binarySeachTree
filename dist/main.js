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
    Tree.prototype.insert = function (value) {
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
        var current = this.root;
        var parent = null;
        var isCurrentOnTheLeft = false; // refactor the code
        while (true) {
            if (value > current.value && current.right) {
                parent = current;
                current = current.right;
                isCurrentOnTheLeft = false;
            }
            else if (value < current.value && current.left) {
                parent = current;
                current = current.left;
                isCurrentOnTheLeft = true;
            }
            else if (value === current.value && !current.left && !current.right) {
                //* leaf node
                if (value === this.root.value) {
                    this.root = null;
                    break;
                }
                if (isCurrentOnTheLeft) {
                    parent.left = null;
                }
                else {
                    parent.right = null;
                }
                break;
            }
            else if (value === current.value &&
                ((current.left && !current.right) || (current.right && !current.left))) {
                //* one child case
                if (value === this.root.value) {
                    if (isCurrentOnTheLeft) {
                        this.root = current.left;
                    }
                    else {
                        this.root = current.right;
                    }
                    break;
                }
                if (isCurrentOnTheLeft) {
                    parent.left = current.left;
                }
                else {
                    parent.right = current.right;
                }
                break;
            }
            else if (value === current.value && current.left && current.right) {
                //* two childe case
                var successor = this.getSuccessor(current);
                // check if current is on the right or left of parent
                if (value === this.root.value) {
                    this.root = successor;
                    break;
                }
                if (isCurrentOnTheLeft) {
                    parent.left = successor;
                }
                else {
                    parent.right = successor;
                }
                break;
            }
            else {
                break;
            }
        }
    };
    Tree.prototype.getSuccessor = function (delNode) {
        var parentSuccessor = delNode;
        var successor = delNode.right;
        var rightSuccessor = successor.right;
        var leftDelNode = delNode.left;
        var rightDelNode = delNode.right;
        while (successor.left) {
            // move left
            parentSuccessor = successor;
            rightSuccessor = successor.right;
            successor = successor.left; // move down left find closest element;
        }
        // update parentNode
        if (successor.right) {
            parentSuccessor.left = successor.right;
        }
        else {
            parentSuccessor.left = null;
        }
        //copy delNode.right and left to successor (after deleting successor)
        successor.right = rightDelNode;
        successor.left = leftDelNode;
        return successor;
    };
    Tree.prototype.find = function (value) {
        /**
         * Write a find(value) function that returns the node with the given value
         */
        var c = this.root;
        while (true) {
            if (value === this.root.value) {
                return this.root;
            }
            if (value > c.value && c.right) {
                //
                c = c.right;
            }
            else if (value < c.value && c.left) {
                //
                c = c.left;
            }
            else if (value === c.value) {
                return c;
            }
            else {
                return null;
            }
        }
    };
    Tree.prototype.levelOrder = function (callback) {
        var queue = [this.root];
        var string = '';
        var array = [];
        while (queue.length > 0) {
            var node_1 = queue.shift(); //
            array.push(node_1.value);
            string = callback(string, node_1.value);
            if (node_1.left) {
                queue.push(node_1.left);
            }
            if (node_1.right) {
                queue.push(node_1.right);
            }
        }
        return string ? string : array;
    };
    /**Write inOrder(callback), preOrder(callback), and postOrder(callback) functions that also accept an optional callback as a parameter.
     * Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided callback.
     * The functions should return an array of values if no callback is given as an argument. */
    Tree.prototype.inOrder = function (callback) {
        // recursive function
        var array = [];
        function transverse(node) {
            if (node !== null) {
                if (callback) {
                    callback(node.value);
                }
                else {
                    array.push(node.value);
                }
                transverse(node.left);
                transverse(node.right);
            }
        }
        transverse(this.root);
        return array;
    };
    Tree.prototype.preOrder = function (callback) {
        //
        var array = [];
        function transverse(node) {
            if (node !== null) {
                transverse(node.left);
                if (callback) {
                    callback(node.value);
                }
                else {
                    array.push(node.value);
                }
                transverse(node.right);
            }
        }
        transverse(this.root);
        return array;
    };
    Tree.prototype.postOrder = function (callback) {
        var array = [];
        function transverse(node) {
            transverse(node.left);
            transverse(node.right);
            if (node !== null) {
                if (callback) {
                    callback(node.value);
                }
                else {
                    array.push(node.value);
                }
            }
        }
        transverse(this.root);
        return array;
    };
    Tree.prototype.height = function (node) {
        //Write a height(node) function that returns the given node’s height.
        // Height is defined as the number of edges in the longest path from a given node to a leaf node.
        // well how can i do it?
        //* ideas:
        if (!node) {
            return null;
        }
        if (!this.root) {
            return null;
        }
        var height = -1;
        var depth = -1;
        var queue = [this.root];
        var level = -1;
        while (queue.length > 0) {
            // transverse each level
            // after each level -> level++
            // if the node is inside the level -> height = level;
            var staticQueueLength = queue.length; // each level queue length
            for (var i = 0; i < staticQueueLength; i++) {
                var frontNode = queue.shift();
                if (node.value === frontNode.value) {
                    depth = level;
                }
                if (frontNode.left !== null) {
                    queue.push(frontNode.left);
                }
                if (frontNode.right !== null) {
                    queue.push(frontNode.right);
                }
            }
            level++;
        }
        height = level - depth - 1;
        return height;
    };
    Tree.prototype.depth = function (node) {
        if (!node) {
            return null;
        }
        if (!this.root) {
            return null;
        }
        var depth = -1;
        var queue = [this.root];
        var level = -1;
        while (queue.length > 0) {
            // transverse each level
            // after each level -> level++
            // if the node is inside the level -> height = level;
            var staticQueueLength = queue.length; // each level queue length
            for (var i = 0; i < staticQueueLength; i++) {
                var frontNode = queue.shift();
                if (node.value === frontNode.value) {
                    depth = level;
                }
                if (frontNode.left !== null) {
                    queue.push(frontNode.left);
                }
                if (frontNode.right !== null) {
                    queue.push(frontNode.right);
                }
            }
            level++;
        }
        return depth;
    };
    Tree.prototype.isBalanced = function () {
        //Write an isBalanced function that checks if the tree is balanced.
        // A balanced tree is one where the difference between heights of the left subtree
        // and the right subtree of every node is not more than 1.
        /**
         * *assumption:
         * checking height of each leaf.
         * need to transverse and find every single parent contain only one child.
         *
         * if there is a parent that have 2 nested leaf(2 depth level leaf) that return height > 1
         * return false
         *
         *
         *
         * return true
         */
        return true;
    };
    Tree.prototype.rebalance = function () {
        //Write a rebalance function that rebalances an unbalanced tree.
        // Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
        /**
         * *assumptions:
         * using traversal method like postorder,inorder, preorder ->return array
         * -> tree.buildTree(that array,0,array.length)
         */
    };
    return Tree;
}());
var tree = new Tree([5, 10, 15, 20, 25, 30, 400, 55, 75, 60, 45, 55]); // 1,2,3,4,5,6,7,8,9
tree.root = tree.buildTree(tree.sortedArray, 0, tree.sortedArray.length - 1);
// prettyPrint(tree.root);
function printTree(string, value) {
    return (string += "".concat(value, "  ")); // string is passed by value
    // it won't change
    // need to return it
}
var node = tree.find(5);
tree.depth(node);
tree.height(node);
prettyPrint(tree.root);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRTdFLDBCQUEwQjtBQUUxQixTQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSztJQUM5QixPQUFPLENBQUMsTUFBTSxJQUFJLFVBQUcsS0FBSyxPQUFJLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtJQUM3RCxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3RCLENBQUM7QUFFRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9tZXJnZVNvcnQudHMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEB0YWlsd2luZCBiYXNlO1xuQHRhaWx3aW5kIGNvbXBvbmVudHM7XG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQSxjQUFTO0FBQ1Qsb0JBQVM7QUFDVCxtQkFBU1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyogbWFpbiBzY3NzIHN0eWxlIHNoZWV0XFxuQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFycjEgPSBbMywgMiwgMiwgMTMsIDgsIDUsIDAsIDFdOyAvLyByZXR1cm4gWzAsIDEsIDEsIDIsIDMsIDUsIDgsIDEzXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZVNvcnQoYXJyYXk6IG51bWJlcltdKSB7XG4gIC8vIGNoYW5nZSB0byBsZWZ0LCByaWdodCwgYW5kIG1pZGRsZSBpbmRleCBpbnN0ZWFkXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDEpIHtcbiAgICBsZXQgbWlkID0gYXJyYXkubGVuZ3RoIC8gMjtcbiAgICBpZiAobWlkICUgMiAhPT0gMCkgbWlkID0gTWF0aC5yb3VuZChtaWQpO1xuICAgIGNvbnN0IGxlZnRQYXJ0ID0gYXJyYXkuc2xpY2UoMCwgbWlkKTtcbiAgICBjb25zdCByaWdodFBhcnQgPSBhcnJheS5zbGljZShtaWQsIGFycmF5Lmxlbmd0aCk7XG5cbiAgICBtZXJnZVNvcnQobGVmdFBhcnQpO1xuICAgIG1lcmdlU29ydChyaWdodFBhcnQpO1xuXG4gICAgbWVyZ2UoYXJyYXksIGxlZnRQYXJ0LCByaWdodFBhcnQpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufVxubWVyZ2VTb3J0KGFycjEpO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UocGFyZW50OiBudW1iZXJbXSwgc3ViMTogbnVtYmVyW10sIHN1YjI6IG51bWJlcltdKSB7XG4gIC8vIHNob3VsZCB1c2luZyBsZWZ0LHJpZ2h0LCBhbmQgbWlkZGxlIGluZGV4IGluc3RlYWRcbiAgbGV0IGkgPSAwLFxuICAgIGogPSAwLFxuICAgIGsgPSAwO1xuICB3aGlsZSAoaSA8IHN1YjEubGVuZ3RoICYmIGogPCBzdWIyLmxlbmd0aCkge1xuICAgIGlmIChzdWIxW2ldIDwgc3ViMltqXSkge1xuICAgICAgcGFyZW50W2tdID0gc3ViMVtpXTtcbiAgICAgIGkrKztcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50W2tdID0gc3ViMltqXTtcbiAgICAgIGorKztcbiAgICB9XG4gICAgaysrO1xuICB9XG5cbiAgLy8gY29weSB0aGUgcmVtYWluaW5nIGVsZW1lbnRzXG4gIHdoaWxlIChpIDwgc3ViMS5sZW5ndGgpIHtcbiAgICBwYXJlbnRba10gPSBzdWIxW2ldO1xuICAgIGkrKztcbiAgICBrKys7XG4gIH1cbiAgLy8gY29weSB0aGUgcmVtYWluaW5nIGVsZW1lbnRzXG4gIHdoaWxlIChqIDwgc3ViMi5sZW5ndGgpIHtcbiAgICBwYXJlbnRba10gPSBzdWIyW2pdO1xuICAgIGorKztcbiAgICBrKys7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IG1lcmdlU29ydCBmcm9tICcuL21lcmdlU29ydCc7XG4vKipcblxuQnVpbGQgYSBOb2RlIGNsYXNzL2ZhY3RvcnkuIEl0IHNob3VsZCBoYXZlIGFuIGF0dHJpYnV0ZSBmb3IgdGhlIGRhdGEgaXQgc3RvcmVzIGFzIHdlbGwgYXMgaXRzIGxlZnQgYW5kIHJpZ2h0IGNoaWxkcmVuLlxuXG5CdWlsZCBhIFRyZWUgY2xhc3MvZmFjdG9yeSB3aGljaCBhY2NlcHRzIGFuIGFycmF5IHdoZW4gaW5pdGlhbGl6ZWQuIFRoZSBUcmVlIGNsYXNzIHNob3VsZCBoYXZlIGEgcm9vdCBhdHRyaWJ1dGUsIHdoaWNoIHVzZXMgdGhlIHJldHVybiB2YWx1ZSBvZiBidWlsZFRyZWUgd2hpY2ggeW914oCZbGwgd3JpdGUgbmV4dC5cblxuVGlwOiBJZiB5b3Ugd291bGQgbGlrZSB0byB2aXN1YWxpemUgeW91ciBiaW5hcnkgc2VhcmNoIHRyZWUsIGhlcmUgaXMgYSBwcmV0dHlQcmludCgpIGZ1bmN0aW9uIHRoYXQgd2lsbCBjb25zb2xlLmxvZyB5b3VyIHRyZWUgaW4gYSBzdHJ1Y3R1cmVkIGZvcm1hdC5cblRoaXMgZnVuY3Rpb24gd2lsbCBleHBlY3QgdG8gcmVjZWl2ZSB0aGUgcm9vdCBvZiB5b3VyIHRyZWUgYXMgdGhlIHZhbHVlIGZvciB0aGUgbm9kZSBwYXJhbWV0ZXIuXG4qL1xuXG5jb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSAnJywgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilIIgICAnIDogJyAgICAnfWAsIGZhbHNlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSU4pSA4pSAICcgOiAn4pSM4pSA4pSAICd9JHtub2RlLnZhbHVlfWApO1xuICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAnICAgICcgOiAn4pSCICAgJ31gLCB0cnVlKTtcbiAgfVxufTtcbmNsYXNzIE5vZGUge1xuICB2YWx1ZTogbnVtYmVyO1xuICByaWdodDogTm9kZSB8IG51bGw7IC8vIGdpdmUgaXQgdHlwZSBjbGFzcyBOb2RlXG4gIGxlZnQ6IE5vZGUgfCBudWxsOyAvLyBnaXZlIGl0IHR5cGUgY2xhc3MgTm9kZVxuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgdGhpcy5yaWdodCA9IG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZXMoYXJyOiBudW1iZXJbXSkge1xuICByZXR1cm4gYXJyLmZpbHRlcihcbiAgICAoaXRlbTogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiBhcnIuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXhcbiAgKTtcbn1cblxuY2xhc3MgVHJlZSB7XG4gIGFycmF5OiBudW1iZXJbXTtcbiAgc29ydGVkQXJyYXk6IG51bWJlcltdIHwgbnVsbDtcbiAgcm9vdDogTm9kZSB8IG51bGw7XG4gIHNvcnRlZEFycmF5QnV0Tm90UmVtb3ZlRHVwbGljYXRlczogbnVtYmVyW107XG4gIGNvbnN0cnVjdG9yKGFycmF5OiBudW1iZXJbXSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB0aGlzLnNvcnRlZEFycmF5QnV0Tm90UmVtb3ZlRHVwbGljYXRlcyA9IG1lcmdlU29ydChhcnJheSk7XG4gICAgdGhpcy5zb3J0ZWRBcnJheSA9IHJlbW92ZUR1cGxpY2F0ZXMobWVyZ2VTb3J0KGFycmF5KSk7XG4gICAgdGhpcy5yb290ID0gbnVsbDtcbiAgfVxuXG4gIGJ1aWxkVHJlZShhcnJheTogbnVtYmVyW10sIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogTm9kZSB7XG4gICAgLy8qIGNoZWNrIGVtcHR5IGFycmF5XG5cbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICAvLyogY2hlY2sgaWYgaXQgaXMgdGhlIGZpcnN0ICBjYWxsIC0+IHB1c2ggbm9kZSB0byB0aGlzLnJvb3Q/IGN1cnJlbnRseSBkb24ndCBrbm93IGhvdyB0byBkb1xuICAgIC8vYmFzZSBjYXNlXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gbnVsbDtcbiAgICAvLyByZWN1cnNpdmUgY2FzZVxuXG4gICAgY29uc3QgbWlkSW5kZXggPSBNYXRoLmNlaWwoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuXG4gICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKGFycmF5W21pZEluZGV4XSk7XG5cbiAgICBub2RlLmxlZnQgPSB0aGlzLmJ1aWxkVHJlZShhcnJheSwgc3RhcnQsIG1pZEluZGV4IC0gMSk7XG5cbiAgICBub2RlLnJpZ2h0ID0gdGhpcy5idWlsZFRyZWUoYXJyYXksIG1pZEluZGV4ICsgMSwgZW5kKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICBpbnNlcnQodmFsdWU6IG51bWJlcikge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5yb290O1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMucm9vdCA9PT0gbnVsbCkgcmV0dXJuICh0aGlzLnJvb3QgPSBub2RlKTtcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoY3VycmVudC52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgPiBjdXJyZW50LnZhbHVlICYmIGN1cnJlbnQucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudC5yaWdodCA9IG5vZGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IGN1cnJlbnQudmFsdWUgJiYgY3VycmVudC5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgIGN1cnJlbnQubGVmdCA9IG5vZGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IGN1cnJlbnQudmFsdWUpIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucmlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBkZWxldGVJdGVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICBsZXQgY3VycmVudDogTm9kZSB8IG51bGwgPSB0aGlzLnJvb3Q7XG4gICAgbGV0IHBhcmVudDogTm9kZSB8IG51bGwgPSBudWxsO1xuICAgIGxldCBpc0N1cnJlbnRPblRoZUxlZnQ6IGJvb2xlYW4gPSBmYWxzZTsgLy8gcmVmYWN0b3IgdGhlIGNvZGVcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKHZhbHVlID4gY3VycmVudC52YWx1ZSAmJiBjdXJyZW50LnJpZ2h0KSB7XG4gICAgICAgIHBhcmVudCA9IGN1cnJlbnQ7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnJpZ2h0O1xuICAgICAgICBpc0N1cnJlbnRPblRoZUxlZnQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCBjdXJyZW50LnZhbHVlICYmIGN1cnJlbnQubGVmdCkge1xuICAgICAgICBwYXJlbnQgPSBjdXJyZW50O1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xuICAgICAgICBpc0N1cnJlbnRPblRoZUxlZnQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gY3VycmVudC52YWx1ZSAmJiAhY3VycmVudC5sZWZ0ICYmICFjdXJyZW50LnJpZ2h0KSB7XG4gICAgICAgIC8vKiBsZWFmIG5vZGVcbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnJvb3QudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnJvb3QgPSBudWxsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0N1cnJlbnRPblRoZUxlZnQpIHtcbiAgICAgICAgICBwYXJlbnQubGVmdCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdmFsdWUgPT09IGN1cnJlbnQudmFsdWUgJiZcbiAgICAgICAgKChjdXJyZW50LmxlZnQgJiYgIWN1cnJlbnQucmlnaHQpIHx8IChjdXJyZW50LnJpZ2h0ICYmICFjdXJyZW50LmxlZnQpKVxuICAgICAgKSB7XG4gICAgICAgIC8vKiBvbmUgY2hpbGQgY2FzZVxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMucm9vdC52YWx1ZSkge1xuICAgICAgICAgIGlmIChpc0N1cnJlbnRPblRoZUxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IGN1cnJlbnQubGVmdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb290ID0gY3VycmVudC5yaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNDdXJyZW50T25UaGVMZWZ0KSB7XG4gICAgICAgICAgcGFyZW50LmxlZnQgPSBjdXJyZW50LmxlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LnJpZ2h0ID0gY3VycmVudC5yaWdodDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGN1cnJlbnQudmFsdWUgJiYgY3VycmVudC5sZWZ0ICYmIGN1cnJlbnQucmlnaHQpIHtcbiAgICAgICAgLy8qIHR3byBjaGlsZGUgY2FzZVxuICAgICAgICBsZXQgc3VjY2Vzc29yID0gdGhpcy5nZXRTdWNjZXNzb3IoY3VycmVudCk7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgY3VycmVudCBpcyBvbiB0aGUgcmlnaHQgb3IgbGVmdCBvZiBwYXJlbnRcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMucm9vdC52YWx1ZSkge1xuICAgICAgICAgIHRoaXMucm9vdCA9IHN1Y2Nlc3NvcjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDdXJyZW50T25UaGVMZWZ0KSB7XG4gICAgICAgICAgcGFyZW50LmxlZnQgPSBzdWNjZXNzb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LnJpZ2h0ID0gc3VjY2Vzc29yO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldFN1Y2Nlc3NvcihkZWxOb2RlOiBOb2RlKTogTm9kZSB7XG4gICAgbGV0IHBhcmVudFN1Y2Nlc3NvciA9IGRlbE5vZGU7XG4gICAgbGV0IHN1Y2Nlc3NvciA9IGRlbE5vZGUucmlnaHQ7XG4gICAgbGV0IHJpZ2h0U3VjY2Vzc29yID0gc3VjY2Vzc29yLnJpZ2h0O1xuXG4gICAgY29uc3QgbGVmdERlbE5vZGUgPSBkZWxOb2RlLmxlZnQ7XG4gICAgY29uc3QgcmlnaHREZWxOb2RlID0gZGVsTm9kZS5yaWdodDtcblxuICAgIHdoaWxlIChzdWNjZXNzb3IubGVmdCkge1xuICAgICAgLy8gbW92ZSBsZWZ0XG4gICAgICBwYXJlbnRTdWNjZXNzb3IgPSBzdWNjZXNzb3I7XG4gICAgICByaWdodFN1Y2Nlc3NvciA9IHN1Y2Nlc3Nvci5yaWdodDtcbiAgICAgIHN1Y2Nlc3NvciA9IHN1Y2Nlc3Nvci5sZWZ0OyAvLyBtb3ZlIGRvd24gbGVmdCBmaW5kIGNsb3Nlc3QgZWxlbWVudDtcbiAgICB9XG4gICAgLy8gdXBkYXRlIHBhcmVudE5vZGVcbiAgICBpZiAoc3VjY2Vzc29yLnJpZ2h0KSB7XG4gICAgICBwYXJlbnRTdWNjZXNzb3IubGVmdCA9IHN1Y2Nlc3Nvci5yaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50U3VjY2Vzc29yLmxlZnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vY29weSBkZWxOb2RlLnJpZ2h0IGFuZCBsZWZ0IHRvIHN1Y2Nlc3NvciAoYWZ0ZXIgZGVsZXRpbmcgc3VjY2Vzc29yKVxuICAgIHN1Y2Nlc3Nvci5yaWdodCA9IHJpZ2h0RGVsTm9kZTtcblxuICAgIHN1Y2Nlc3Nvci5sZWZ0ID0gbGVmdERlbE5vZGU7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yO1xuICB9XG4gIGZpbmQodmFsdWU6IG51bWJlcikge1xuICAgIC8qKlxuICAgICAqIFdyaXRlIGEgZmluZCh2YWx1ZSkgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBub2RlIHdpdGggdGhlIGdpdmVuIHZhbHVlXG4gICAgICovXG5cbiAgICBsZXQgYyA9IHRoaXMucm9vdDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnJvb3QudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSA+IGMudmFsdWUgJiYgYy5yaWdodCkge1xuICAgICAgICAvL1xuICAgICAgICBjID0gYy5yaWdodDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCBjLnZhbHVlICYmIGMubGVmdCkge1xuICAgICAgICAvL1xuICAgICAgICBjID0gYy5sZWZ0O1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gYy52YWx1ZSkge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsZXZlbE9yZGVyKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcXVldWUgPSBbdGhpcy5yb290XTtcbiAgICBsZXQgc3RyaW5nID0gJyc7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHF1ZXVlLnNoaWZ0KCk7IC8vXG4gICAgICBhcnJheS5wdXNoKG5vZGUudmFsdWUpO1xuICAgICAgc3RyaW5nID0gY2FsbGJhY2soc3RyaW5nLCBub2RlLnZhbHVlKTtcbiAgICAgIGlmIChub2RlLmxlZnQpIHtcbiAgICAgICAgcXVldWUucHVzaChub2RlLmxlZnQpO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUucmlnaHQpIHtcbiAgICAgICAgcXVldWUucHVzaChub2RlLnJpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nID8gc3RyaW5nIDogYXJyYXk7XG4gIH1cblxuICAvKipXcml0ZSBpbk9yZGVyKGNhbGxiYWNrKSwgcHJlT3JkZXIoY2FsbGJhY2spLCBhbmQgcG9zdE9yZGVyKGNhbGxiYWNrKSBmdW5jdGlvbnMgdGhhdCBhbHNvIGFjY2VwdCBhbiBvcHRpb25hbCBjYWxsYmFjayBhcyBhIHBhcmFtZXRlci5cbiAgICogRWFjaCBvZiB0aGVzZSBmdW5jdGlvbnMgc2hvdWxkIHRyYXZlcnNlIHRoZSB0cmVlIGluIHRoZWlyIHJlc3BlY3RpdmUgZGVwdGgtZmlyc3Qgb3JkZXIgYW5kIHlpZWxkIGVhY2ggbm9kZSB0byB0aGUgcHJvdmlkZWQgY2FsbGJhY2suXG4gICAqIFRoZSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhbiBhcnJheSBvZiB2YWx1ZXMgaWYgbm8gY2FsbGJhY2sgaXMgZ2l2ZW4gYXMgYW4gYXJndW1lbnQuICovXG4gIGluT3JkZXIoY2FsbGJhY2spIHtcbiAgICAvLyByZWN1cnNpdmUgZnVuY3Rpb25cbiAgICBjb25zdCBhcnJheTogbnVtYmVyW10gPSBbXTtcblxuICAgIGZ1bmN0aW9uIHRyYW5zdmVyc2Uobm9kZTogTm9kZSkge1xuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobm9kZS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJyYXkucHVzaChub2RlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc3ZlcnNlKG5vZGUubGVmdCk7XG4gICAgICAgIHRyYW5zdmVyc2Uobm9kZS5yaWdodCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRyYW5zdmVyc2UodGhpcy5yb290KTtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBwcmVPcmRlcihjYWxsYmFjaykge1xuICAgIC8vXG4gICAgY29uc3QgYXJyYXk6IG51bWJlcltdID0gW107XG5cbiAgICBmdW5jdGlvbiB0cmFuc3ZlcnNlKG5vZGU6IE5vZGUpIHtcbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHRyYW5zdmVyc2Uobm9kZS5sZWZ0KTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobm9kZS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJyYXkucHVzaChub2RlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc3ZlcnNlKG5vZGUucmlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgICB0cmFuc3ZlcnNlKHRoaXMucm9vdCk7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG4gIHBvc3RPcmRlcihjYWxsYmFjaykge1xuICAgIGNvbnN0IGFycmF5OiBudW1iZXJbXSA9IFtdO1xuXG4gICAgZnVuY3Rpb24gdHJhbnN2ZXJzZShub2RlOiBOb2RlKSB7XG4gICAgICB0cmFuc3ZlcnNlKG5vZGUubGVmdCk7XG4gICAgICB0cmFuc3ZlcnNlKG5vZGUucmlnaHQpO1xuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobm9kZS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJyYXkucHVzaChub2RlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0cmFuc3ZlcnNlKHRoaXMucm9vdCk7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgaGVpZ2h0KG5vZGU6IE5vZGUpIHtcbiAgICAvL1dyaXRlIGEgaGVpZ2h0KG5vZGUpIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZ2l2ZW4gbm9kZeKAmXMgaGVpZ2h0LlxuICAgIC8vIEhlaWdodCBpcyBkZWZpbmVkIGFzIHRoZSBudW1iZXIgb2YgZWRnZXMgaW4gdGhlIGxvbmdlc3QgcGF0aCBmcm9tIGEgZ2l2ZW4gbm9kZSB0byBhIGxlYWYgbm9kZS5cbiAgICAvLyB3ZWxsIGhvdyBjYW4gaSBkbyBpdD9cbiAgICAvLyogaWRlYXM6XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnJvb3QpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgaGVpZ2h0ID0gLTE7XG4gICAgbGV0IGRlcHRoID0gLTE7XG4gICAgY29uc3QgcXVldWUgPSBbdGhpcy5yb290XTtcbiAgICBsZXQgbGV2ZWwgPSAtMTtcblxuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyB0cmFuc3ZlcnNlIGVhY2ggbGV2ZWxcbiAgICAgIC8vIGFmdGVyIGVhY2ggbGV2ZWwgLT4gbGV2ZWwrK1xuICAgICAgLy8gaWYgdGhlIG5vZGUgaXMgaW5zaWRlIHRoZSBsZXZlbCAtPiBoZWlnaHQgPSBsZXZlbDtcbiAgICAgIGNvbnN0IHN0YXRpY1F1ZXVlTGVuZ3RoID0gcXVldWUubGVuZ3RoOyAvLyBlYWNoIGxldmVsIHF1ZXVlIGxlbmd0aFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aWNRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZyb250Tm9kZSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGlmIChub2RlLnZhbHVlID09PSBmcm9udE5vZGUudmFsdWUpIHtcbiAgICAgICAgICBkZXB0aCA9IGxldmVsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9udE5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICAgIHF1ZXVlLnB1c2goZnJvbnROb2RlLmxlZnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9udE5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICBxdWV1ZS5wdXNoKGZyb250Tm9kZS5yaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcbiAgICB9XG5cbiAgICBoZWlnaHQgPSBsZXZlbCAtIGRlcHRoIC0gMTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgZGVwdGgobm9kZTogTm9kZSkge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICghdGhpcy5yb290KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgZGVwdGggPSAtMTtcbiAgICBjb25zdCBxdWV1ZSA9IFt0aGlzLnJvb3RdO1xuICAgIGxldCBsZXZlbCA9IC0xO1xuXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIHRyYW5zdmVyc2UgZWFjaCBsZXZlbFxuICAgICAgLy8gYWZ0ZXIgZWFjaCBsZXZlbCAtPiBsZXZlbCsrXG4gICAgICAvLyBpZiB0aGUgbm9kZSBpcyBpbnNpZGUgdGhlIGxldmVsIC0+IGhlaWdodCA9IGxldmVsO1xuICAgICAgY29uc3Qgc3RhdGljUXVldWVMZW5ndGggPSBxdWV1ZS5sZW5ndGg7IC8vIGVhY2ggbGV2ZWwgcXVldWUgbGVuZ3RoXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpY1F1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZnJvbnROb2RlID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgaWYgKG5vZGUudmFsdWUgPT09IGZyb250Tm9kZS52YWx1ZSkge1xuICAgICAgICAgIGRlcHRoID0gbGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyb250Tm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgcXVldWUucHVzaChmcm9udE5vZGUubGVmdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyb250Tm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgIHF1ZXVlLnB1c2goZnJvbnROb2RlLnJpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuICAgIH1cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cbiAgaXNCYWxhbmNlZCgpIHtcbiAgICAvL1dyaXRlIGFuIGlzQmFsYW5jZWQgZnVuY3Rpb24gdGhhdCBjaGVja3MgaWYgdGhlIHRyZWUgaXMgYmFsYW5jZWQuXG4gICAgLy8gQSBiYWxhbmNlZCB0cmVlIGlzIG9uZSB3aGVyZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGhlaWdodHMgb2YgdGhlIGxlZnQgc3VidHJlZVxuICAgIC8vIGFuZCB0aGUgcmlnaHQgc3VidHJlZSBvZiBldmVyeSBub2RlIGlzIG5vdCBtb3JlIHRoYW4gMS5cblxuICAgIC8qKlxuICAgICAqICphc3N1bXB0aW9uOlxuICAgICAqIGNoZWNraW5nIGhlaWdodCBvZiBlYWNoIGxlYWYuXG4gICAgICogbmVlZCB0byB0cmFuc3ZlcnNlIGFuZCBmaW5kIGV2ZXJ5IHNpbmdsZSBwYXJlbnQgY29udGFpbiBvbmx5IG9uZSBjaGlsZC5cbiAgICAgKlxuICAgICAqIGlmIHRoZXJlIGlzIGEgcGFyZW50IHRoYXQgaGF2ZSAyIG5lc3RlZCBsZWFmKDIgZGVwdGggbGV2ZWwgbGVhZikgdGhhdCByZXR1cm4gaGVpZ2h0ID4gMVxuICAgICAqIHJldHVybiBmYWxzZVxuICAgICAqXG4gICAgICpcbiAgICAgKlxuICAgICAqIHJldHVybiB0cnVlXG4gICAgICovXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZWJhbGFuY2UoKSB7XG4gICAgLy9Xcml0ZSBhIHJlYmFsYW5jZSBmdW5jdGlvbiB0aGF0IHJlYmFsYW5jZXMgYW4gdW5iYWxhbmNlZCB0cmVlLlxuICAgIC8vIFRpcDogWW914oCZbGwgd2FudCB0byB1c2UgYSB0cmF2ZXJzYWwgbWV0aG9kIHRvIHByb3ZpZGUgYSBuZXcgYXJyYXkgdG8gdGhlIGJ1aWxkVHJlZSBmdW5jdGlvbi5cbiAgICAvKipcbiAgICAgKiAqYXNzdW1wdGlvbnM6XG4gICAgICogdXNpbmcgdHJhdmVyc2FsIG1ldGhvZCBsaWtlIHBvc3RvcmRlcixpbm9yZGVyLCBwcmVvcmRlciAtPnJldHVybiBhcnJheVxuICAgICAqIC0+IHRyZWUuYnVpbGRUcmVlKHRoYXQgYXJyYXksMCxhcnJheS5sZW5ndGgpXG4gICAgICovXG4gIH1cbn1cblxuY29uc3QgdHJlZSA9IG5ldyBUcmVlKFs1LCAxMCwgMTUsIDIwLCAyNSwgMzAsIDQwMCwgNTUsIDc1LCA2MCwgNDUsIDU1XSk7IC8vIDEsMiwzLDQsNSw2LDcsOCw5XG50cmVlLnJvb3QgPSB0cmVlLmJ1aWxkVHJlZSh0cmVlLnNvcnRlZEFycmF5LCAwLCB0cmVlLnNvcnRlZEFycmF5Lmxlbmd0aCAtIDEpO1xuXG4vLyBwcmV0dHlQcmludCh0cmVlLnJvb3QpO1xuXG5mdW5jdGlvbiBwcmludFRyZWUoc3RyaW5nLCB2YWx1ZSkge1xuICByZXR1cm4gKHN0cmluZyArPSBgJHt2YWx1ZX0gIGApOyAvLyBzdHJpbmcgaXMgcGFzc2VkIGJ5IHZhbHVlXG4gIC8vIGl0IHdvbid0IGNoYW5nZVxuICAvLyBuZWVkIHRvIHJldHVybiBpdFxufVxuXG5jb25zdCBub2RlID0gdHJlZS5maW5kKDUpO1xudHJlZS5kZXB0aChub2RlKTtcblxudHJlZS5oZWlnaHQobm9kZSk7XG5wcmV0dHlQcmludCh0cmVlLnJvb3QpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9