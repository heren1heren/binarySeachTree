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
        console.log(c);
        while (true) {
            if (value === this.root.value) {
                return this.root;
            }
            if (value > c.value && c.right) {
                console.log(c);
                //
                c = c.right;
            }
            else if (value < c.value && c.left) {
                console.log(c);
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
            var node = queue.shift(); //
            array.push(node.value);
            string = callback(string, node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
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
var tree = new Tree([5, 10, 15, 20, 25, 30, 400, 55, 75, 60, 45, 55]); // 1,2,3,4,5,6,7,8,9
tree.root = tree.buildTree(tree.sortedArray, 0, tree.sortedArray.length - 1);
// prettyPrint(tree.root);
function printTree(string, value) {
    return (string += "".concat(value, "  ")); // string is passed by value
    // it won't change
    // need to return it
}
var inOrderValues = tree.inOrder();
console.log(inOrderValues);
var preOrderValues = tree.preOrder();
console.log(preOrderValues);
prettyPrint(tree.root);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzdGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUU3RSwwQkFBMEI7QUFFMUIsU0FBUyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUs7SUFDOUIsT0FBTyxDQUFDLE1BQU0sSUFBSSxVQUFHLEtBQUssT0FBSSxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7SUFDN0Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN0QixDQUFDO0FBRUQsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0IsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFNUIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvbWVyZ2VTb3J0LnRzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAdGFpbHdpbmQgYmFzZTtcbkB0YWlsd2luZCBjb21wb25lbnRzO1xuQHRhaWx3aW5kIHV0aWxpdGllcztcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0EsY0FBUztBQUNULG9CQUFTO0FBQ1QsbUJBQVNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8qIG1haW4gc2NzcyBzdHlsZSBzaGVldFxcbkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhcnIxID0gWzMsIDIsIDIsIDEzLCA4LCA1LCAwLCAxXTsgLy8gcmV0dXJuIFswLCAxLCAxLCAyLCAzLCA1LCA4LCAxM11cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VTb3J0KGFycmF5OiBudW1iZXJbXSkge1xuICAvLyBjaGFuZ2UgdG8gbGVmdCwgcmlnaHQsIGFuZCBtaWRkbGUgaW5kZXggaW5zdGVhZFxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAxKSB7XG4gICAgbGV0IG1pZCA9IGFycmF5Lmxlbmd0aCAvIDI7XG4gICAgaWYgKG1pZCAlIDIgIT09IDApIG1pZCA9IE1hdGgucm91bmQobWlkKTtcbiAgICBjb25zdCBsZWZ0UGFydCA9IGFycmF5LnNsaWNlKDAsIG1pZCk7XG4gICAgY29uc3QgcmlnaHRQYXJ0ID0gYXJyYXkuc2xpY2UobWlkLCBhcnJheS5sZW5ndGgpO1xuXG4gICAgbWVyZ2VTb3J0KGxlZnRQYXJ0KTtcbiAgICBtZXJnZVNvcnQocmlnaHRQYXJ0KTtcblxuICAgIG1lcmdlKGFycmF5LCBsZWZ0UGFydCwgcmlnaHRQYXJ0KTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cbm1lcmdlU29ydChhcnIxKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKHBhcmVudDogbnVtYmVyW10sIHN1YjE6IG51bWJlcltdLCBzdWIyOiBudW1iZXJbXSkge1xuICAvLyBzaG91bGQgdXNpbmcgbGVmdCxyaWdodCwgYW5kIG1pZGRsZSBpbmRleCBpbnN0ZWFkXG4gIGxldCBpID0gMCxcbiAgICBqID0gMCxcbiAgICBrID0gMDtcbiAgd2hpbGUgKGkgPCBzdWIxLmxlbmd0aCAmJiBqIDwgc3ViMi5sZW5ndGgpIHtcbiAgICBpZiAoc3ViMVtpXSA8IHN1YjJbal0pIHtcbiAgICAgIHBhcmVudFtrXSA9IHN1YjFbaV07XG4gICAgICBpKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudFtrXSA9IHN1YjJbal07XG4gICAgICBqKys7XG4gICAgfVxuICAgIGsrKztcbiAgfVxuXG4gIC8vIGNvcHkgdGhlIHJlbWFpbmluZyBlbGVtZW50c1xuICB3aGlsZSAoaSA8IHN1YjEubGVuZ3RoKSB7XG4gICAgcGFyZW50W2tdID0gc3ViMVtpXTtcbiAgICBpKys7XG4gICAgaysrO1xuICB9XG4gIC8vIGNvcHkgdGhlIHJlbWFpbmluZyBlbGVtZW50c1xuICB3aGlsZSAoaiA8IHN1YjIubGVuZ3RoKSB7XG4gICAgcGFyZW50W2tdID0gc3ViMltqXTtcbiAgICBqKys7XG4gICAgaysrO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBtZXJnZVNvcnQgZnJvbSAnLi9tZXJnZVNvcnQnO1xuLyoqXG5cbkJ1aWxkIGEgTm9kZSBjbGFzcy9mYWN0b3J5LiBJdCBzaG91bGQgaGF2ZSBhbiBhdHRyaWJ1dGUgZm9yIHRoZSBkYXRhIGl0IHN0b3JlcyBhcyB3ZWxsIGFzIGl0cyBsZWZ0IGFuZCByaWdodCBjaGlsZHJlbi5cblxuQnVpbGQgYSBUcmVlIGNsYXNzL2ZhY3Rvcnkgd2hpY2ggYWNjZXB0cyBhbiBhcnJheSB3aGVuIGluaXRpYWxpemVkLiBUaGUgVHJlZSBjbGFzcyBzaG91bGQgaGF2ZSBhIHJvb3QgYXR0cmlidXRlLCB3aGljaCB1c2VzIHRoZSByZXR1cm4gdmFsdWUgb2YgYnVpbGRUcmVlIHdoaWNoIHlvdeKAmWxsIHdyaXRlIG5leHQuXG5cblRpcDogSWYgeW91IHdvdWxkIGxpa2UgdG8gdmlzdWFsaXplIHlvdXIgYmluYXJ5IHNlYXJjaCB0cmVlLCBoZXJlIGlzIGEgcHJldHR5UHJpbnQoKSBmdW5jdGlvbiB0aGF0IHdpbGwgY29uc29sZS5sb2cgeW91ciB0cmVlIGluIGEgc3RydWN0dXJlZCBmb3JtYXQuXG5UaGlzIGZ1bmN0aW9uIHdpbGwgZXhwZWN0IHRvIHJlY2VpdmUgdGhlIHJvb3Qgb2YgeW91ciB0cmVlIGFzIHRoZSB2YWx1ZSBmb3IgdGhlIG5vZGUgcGFyYW1ldGVyLlxuKi9cblxuY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gJycsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSCICAgJyA6ICcgICAgJ31gLCBmYWxzZSk7XG4gIH1cbiAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUlOKUgOKUgCAnIDogJ+KUjOKUgOKUgCAnfSR7bm9kZS52YWx1ZX1gKTtcbiAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJyAgICAnIDogJ+KUgiAgICd9YCwgdHJ1ZSk7XG4gIH1cbn07XG5jbGFzcyBOb2RlIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgcmlnaHQ6IE5vZGUgfCBudWxsOyAvLyBnaXZlIGl0IHR5cGUgY2xhc3MgTm9kZVxuICBsZWZ0OiBOb2RlIHwgbnVsbDsgLy8gZ2l2ZSBpdCB0eXBlIGNsYXNzIE5vZGVcbiAgY29uc3RydWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICB9XG59XG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzKGFycjogbnVtYmVyW10pIHtcbiAgcmV0dXJuIGFyci5maWx0ZXIoXG4gICAgKGl0ZW06IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4gYXJyLmluZGV4T2YoaXRlbSkgPT09IGluZGV4XG4gICk7XG59XG5cbmNsYXNzIFRyZWUge1xuICBhcnJheTogbnVtYmVyW107XG4gIHNvcnRlZEFycmF5OiBudW1iZXJbXSB8IG51bGw7XG4gIHJvb3Q6IE5vZGUgfCBudWxsO1xuICBzb3J0ZWRBcnJheUJ1dE5vdFJlbW92ZUR1cGxpY2F0ZXM6IG51bWJlcltdO1xuICBjb25zdHJ1Y3RvcihhcnJheTogbnVtYmVyW10pIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgdGhpcy5zb3J0ZWRBcnJheUJ1dE5vdFJlbW92ZUR1cGxpY2F0ZXMgPSBtZXJnZVNvcnQoYXJyYXkpO1xuICAgIHRoaXMuc29ydGVkQXJyYXkgPSByZW1vdmVEdXBsaWNhdGVzKG1lcmdlU29ydChhcnJheSkpO1xuICAgIHRoaXMucm9vdCA9IG51bGw7XG4gIH1cblxuICBidWlsZFRyZWUoYXJyYXk6IG51bWJlcltdLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IE5vZGUge1xuICAgIC8vKiBjaGVjayBlbXB0eSBhcnJheVxuXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgLy8qIGNoZWNrIGlmIGl0IGlzIHRoZSBmaXJzdCAgY2FsbCAtPiBwdXNoIG5vZGUgdG8gdGhpcy5yb290PyBjdXJyZW50bHkgZG9uJ3Qga25vdyBob3cgdG8gZG9cbiAgICAvL2Jhc2UgY2FzZVxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIG51bGw7XG4gICAgLy8gcmVjdXJzaXZlIGNhc2VcblxuICAgIGNvbnN0IG1pZEluZGV4ID0gTWF0aC5jZWlsKChzdGFydCArIGVuZCkgLyAyKTtcblxuICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZShhcnJheVttaWRJbmRleF0pO1xuXG4gICAgbm9kZS5sZWZ0ID0gdGhpcy5idWlsZFRyZWUoYXJyYXksIHN0YXJ0LCBtaWRJbmRleCAtIDEpO1xuXG4gICAgbm9kZS5yaWdodCA9IHRoaXMuYnVpbGRUcmVlKGFycmF5LCBtaWRJbmRleCArIDEsIGVuZCk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgaW5zZXJ0KHZhbHVlOiBudW1iZXIpIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMucm9vdDtcbiAgICBjb25zdCBub2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIGlmICh0aGlzLnJvb3QgPT09IG51bGwpIHJldHVybiAodGhpcy5yb290ID0gbm9kZSk7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGN1cnJlbnQudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlID4gY3VycmVudC52YWx1ZSAmJiBjdXJyZW50LnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgIGN1cnJlbnQucmlnaHQgPSBub2RlO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCBjdXJyZW50LnZhbHVlICYmIGN1cnJlbnQubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICBjdXJyZW50LmxlZnQgPSBub2RlO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBjdXJyZW50LnZhbHVlKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnJpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubGVmdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZGVsZXRlSXRlbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgbGV0IGN1cnJlbnQ6IE5vZGUgfCBudWxsID0gdGhpcy5yb290O1xuICAgIGxldCBwYXJlbnQ6IE5vZGUgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgaXNDdXJyZW50T25UaGVMZWZ0OiBib29sZWFuID0gZmFsc2U7IC8vIHJlZmFjdG9yIHRoZSBjb2RlXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmICh2YWx1ZSA+IGN1cnJlbnQudmFsdWUgJiYgY3VycmVudC5yaWdodCkge1xuICAgICAgICBwYXJlbnQgPSBjdXJyZW50O1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5yaWdodDtcbiAgICAgICAgaXNDdXJyZW50T25UaGVMZWZ0ID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgY3VycmVudC52YWx1ZSAmJiBjdXJyZW50LmxlZnQpIHtcbiAgICAgICAgcGFyZW50ID0gY3VycmVudDtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubGVmdDtcbiAgICAgICAgaXNDdXJyZW50T25UaGVMZWZ0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGN1cnJlbnQudmFsdWUgJiYgIWN1cnJlbnQubGVmdCAmJiAhY3VycmVudC5yaWdodCkge1xuICAgICAgICAvLyogbGVhZiBub2RlXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5yb290LnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5yb290ID0gbnVsbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDdXJyZW50T25UaGVMZWZ0KSB7XG4gICAgICAgICAgcGFyZW50LmxlZnQgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudC5yaWdodCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHZhbHVlID09PSBjdXJyZW50LnZhbHVlICYmXG4gICAgICAgICgoY3VycmVudC5sZWZ0ICYmICFjdXJyZW50LnJpZ2h0KSB8fCAoY3VycmVudC5yaWdodCAmJiAhY3VycmVudC5sZWZ0KSlcbiAgICAgICkge1xuICAgICAgICAvLyogb25lIGNoaWxkIGNhc2VcbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnJvb3QudmFsdWUpIHtcbiAgICAgICAgICBpZiAoaXNDdXJyZW50T25UaGVMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBjdXJyZW50LmxlZnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IGN1cnJlbnQucmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQ3VycmVudE9uVGhlTGVmdCkge1xuICAgICAgICAgIHBhcmVudC5sZWZ0ID0gY3VycmVudC5sZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudC5yaWdodCA9IGN1cnJlbnQucmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBjdXJyZW50LnZhbHVlICYmIGN1cnJlbnQubGVmdCAmJiBjdXJyZW50LnJpZ2h0KSB7XG4gICAgICAgIC8vKiB0d28gY2hpbGRlIGNhc2VcbiAgICAgICAgbGV0IHN1Y2Nlc3NvciA9IHRoaXMuZ2V0U3VjY2Vzc29yKGN1cnJlbnQpO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIGN1cnJlbnQgaXMgb24gdGhlIHJpZ2h0IG9yIGxlZnQgb2YgcGFyZW50XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnJvb3QudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnJvb3QgPSBzdWNjZXNzb3I7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ3VycmVudE9uVGhlTGVmdCkge1xuICAgICAgICAgIHBhcmVudC5sZWZ0ID0gc3VjY2Vzc29yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudC5yaWdodCA9IHN1Y2Nlc3NvcjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRTdWNjZXNzb3IoZGVsTm9kZTogTm9kZSk6IE5vZGUge1xuICAgIGxldCBwYXJlbnRTdWNjZXNzb3IgPSBkZWxOb2RlO1xuICAgIGxldCBzdWNjZXNzb3IgPSBkZWxOb2RlLnJpZ2h0O1xuICAgIGxldCByaWdodFN1Y2Nlc3NvciA9IHN1Y2Nlc3Nvci5yaWdodDtcblxuICAgIGNvbnN0IGxlZnREZWxOb2RlID0gZGVsTm9kZS5sZWZ0O1xuICAgIGNvbnN0IHJpZ2h0RGVsTm9kZSA9IGRlbE5vZGUucmlnaHQ7XG5cbiAgICB3aGlsZSAoc3VjY2Vzc29yLmxlZnQpIHtcbiAgICAgIC8vIG1vdmUgbGVmdFxuICAgICAgcGFyZW50U3VjY2Vzc29yID0gc3VjY2Vzc29yO1xuICAgICAgcmlnaHRTdWNjZXNzb3IgPSBzdWNjZXNzb3IucmlnaHQ7XG4gICAgICBzdWNjZXNzb3IgPSBzdWNjZXNzb3IubGVmdDsgLy8gbW92ZSBkb3duIGxlZnQgZmluZCBjbG9zZXN0IGVsZW1lbnQ7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSBwYXJlbnROb2RlXG4gICAgaWYgKHN1Y2Nlc3Nvci5yaWdodCkge1xuICAgICAgcGFyZW50U3VjY2Vzc29yLmxlZnQgPSBzdWNjZXNzb3IucmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudFN1Y2Nlc3Nvci5sZWZ0ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvL2NvcHkgZGVsTm9kZS5yaWdodCBhbmQgbGVmdCB0byBzdWNjZXNzb3IgKGFmdGVyIGRlbGV0aW5nIHN1Y2Nlc3NvcilcbiAgICBzdWNjZXNzb3IucmlnaHQgPSByaWdodERlbE5vZGU7XG5cbiAgICBzdWNjZXNzb3IubGVmdCA9IGxlZnREZWxOb2RlO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvcjtcbiAgfVxuICBmaW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICAvKipcbiAgICAgKiBXcml0ZSBhIGZpbmQodmFsdWUpIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbm9kZSB3aXRoIHRoZSBnaXZlbiB2YWx1ZVxuICAgICAqL1xuXG4gICAgbGV0IGMgPSB0aGlzLnJvb3Q7XG4gICAgY29uc29sZS5sb2coYyk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5yb290LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3Q7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgPiBjLnZhbHVlICYmIGMucmlnaHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coYyk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgYyA9IGMucmlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgYy52YWx1ZSAmJiBjLmxlZnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coYyk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgYyA9IGMubGVmdDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGMudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGV2ZWxPcmRlcihjYWxsYmFjaykge1xuICAgIGNvbnN0IHF1ZXVlID0gW3RoaXMucm9vdF07XG4gICAgbGV0IHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBxdWV1ZS5zaGlmdCgpOyAvL1xuICAgICAgYXJyYXkucHVzaChub2RlLnZhbHVlKTtcbiAgICAgIHN0cmluZyA9IGNhbGxiYWNrKHN0cmluZywgbm9kZS52YWx1ZSk7XG4gICAgICBpZiAobm9kZS5sZWZ0KSB7XG4gICAgICAgIHF1ZXVlLnB1c2gobm9kZS5sZWZ0KTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLnJpZ2h0KSB7XG4gICAgICAgIHF1ZXVlLnB1c2gobm9kZS5yaWdodCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZyA/IHN0cmluZyA6IGFycmF5O1xuICB9XG5cbiAgLyoqV3JpdGUgaW5PcmRlcihjYWxsYmFjayksIHByZU9yZGVyKGNhbGxiYWNrKSwgYW5kIHBvc3RPcmRlcihjYWxsYmFjaykgZnVuY3Rpb25zIHRoYXQgYWxzbyBhY2NlcHQgYW4gb3B0aW9uYWwgY2FsbGJhY2sgYXMgYSBwYXJhbWV0ZXIuXG4gICAqIEVhY2ggb2YgdGhlc2UgZnVuY3Rpb25zIHNob3VsZCB0cmF2ZXJzZSB0aGUgdHJlZSBpbiB0aGVpciByZXNwZWN0aXZlIGRlcHRoLWZpcnN0IG9yZGVyIGFuZCB5aWVsZCBlYWNoIG5vZGUgdG8gdGhlIHByb3ZpZGVkIGNhbGxiYWNrLlxuICAgKiBUaGUgZnVuY3Rpb25zIHNob3VsZCByZXR1cm4gYW4gYXJyYXkgb2YgdmFsdWVzIGlmIG5vIGNhbGxiYWNrIGlzIGdpdmVuIGFzIGFuIGFyZ3VtZW50LiAqL1xuICBpbk9yZGVyKGNhbGxiYWNrKSB7XG4gICAgLy8gcmVjdXJzaXZlIGZ1bmN0aW9uXG4gICAgY29uc3QgYXJyYXk6IG51bWJlcltdID0gW107XG5cbiAgICBmdW5jdGlvbiB0cmFuc3ZlcnNlKG5vZGU6IE5vZGUpIHtcbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG5vZGUudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFycmF5LnB1c2gobm9kZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJhbnN2ZXJzZShub2RlLmxlZnQpO1xuICAgICAgICB0cmFuc3ZlcnNlKG5vZGUucmlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgICB0cmFuc3ZlcnNlKHRoaXMucm9vdCk7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgcHJlT3JkZXIoY2FsbGJhY2spIHtcbiAgICAvL1xuICAgIGNvbnN0IGFycmF5OiBudW1iZXJbXSA9IFtdO1xuXG4gICAgZnVuY3Rpb24gdHJhbnN2ZXJzZShub2RlOiBOb2RlKSB7XG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICB0cmFuc3ZlcnNlKG5vZGUubGVmdCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG5vZGUudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFycmF5LnB1c2gobm9kZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJhbnN2ZXJzZShub2RlLnJpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdHJhbnN2ZXJzZSh0aGlzLnJvb3QpO1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuICBwb3N0T3JkZXIoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheTogbnVtYmVyW10gPSBbXTtcblxuICAgIGZ1bmN0aW9uIHRyYW5zdmVyc2Uobm9kZTogTm9kZSkge1xuICAgICAgdHJhbnN2ZXJzZShub2RlLmxlZnQpO1xuICAgICAgdHJhbnN2ZXJzZShub2RlLnJpZ2h0KTtcbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG5vZGUudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFycmF5LnB1c2gobm9kZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdHJhbnN2ZXJzZSh0aGlzLnJvb3QpO1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIGhlaWdodChub2RlOiBOb2RlKSB7XG4gICAgLy9Xcml0ZSBhIGhlaWdodChub2RlKSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGdpdmVuIG5vZGXigJlzIGhlaWdodC5cbiAgICAvLyBIZWlnaHQgaXMgZGVmaW5lZCBhcyB0aGUgbnVtYmVyIG9mIGVkZ2VzIGluIHRoZSBsb25nZXN0IHBhdGggZnJvbSBhIGdpdmVuIG5vZGUgdG8gYSBsZWFmIG5vZGUuXG4gIH1cbiAgZGVwdGgobm9kZTogTm9kZSkge1xuICAgIC8vV3JpdGUgYSBkZXB0aChub2RlKSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGdpdmVuIG5vZGXigJlzIGRlcHRoLlxuICAgIC8vRGVwdGggaXMgZGVmaW5lZCBhcyB0aGUgbnVtYmVyIG9mIGVkZ2VzIGluIHRoZSBwYXRoIGZyb20gYSBnaXZlbiBub2RlIHRvIHRoZSB0cmVl4oCZcyByb290IG5vZGUuXG4gIH1cbiAgaXNCYWxhbmNlZCgpIHtcbiAgICAvL1dyaXRlIGFuIGlzQmFsYW5jZWQgZnVuY3Rpb24gdGhhdCBjaGVja3MgaWYgdGhlIHRyZWUgaXMgYmFsYW5jZWQuXG4gICAgLy8gQSBiYWxhbmNlZCB0cmVlIGlzIG9uZSB3aGVyZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGhlaWdodHMgb2YgdGhlIGxlZnQgc3VidHJlZVxuICAgIC8vIGFuZCB0aGUgcmlnaHQgc3VidHJlZSBvZiBldmVyeSBub2RlIGlzIG5vdCBtb3JlIHRoYW4gMS5cbiAgfVxuICByZWJhbGFuY2UoKSB7XG4gICAgLy9Xcml0ZSBhIHJlYmFsYW5jZSBmdW5jdGlvbiB0aGF0IHJlYmFsYW5jZXMgYW4gdW5iYWxhbmNlZCB0cmVlLlxuICAgIC8vIFRpcDogWW914oCZbGwgd2FudCB0byB1c2UgYSB0cmF2ZXJzYWwgbWV0aG9kIHRvIHByb3ZpZGUgYSBuZXcgYXJyYXkgdG8gdGhlIGJ1aWxkVHJlZSBmdW5jdGlvbi5cbiAgfVxufVxuXG5jb25zdCB0cmVlID0gbmV3IFRyZWUoWzUsIDEwLCAxNSwgMjAsIDI1LCAzMCwgNDAwLCA1NSwgNzUsIDYwLCA0NSwgNTVdKTsgLy8gMSwyLDMsNCw1LDYsNyw4LDlcbnRyZWUucm9vdCA9IHRyZWUuYnVpbGRUcmVlKHRyZWUuc29ydGVkQXJyYXksIDAsIHRyZWUuc29ydGVkQXJyYXkubGVuZ3RoIC0gMSk7XG5cbi8vIHByZXR0eVByaW50KHRyZWUucm9vdCk7XG5cbmZ1bmN0aW9uIHByaW50VHJlZShzdHJpbmcsIHZhbHVlKSB7XG4gIHJldHVybiAoc3RyaW5nICs9IGAke3ZhbHVlfSAgYCk7IC8vIHN0cmluZyBpcyBwYXNzZWQgYnkgdmFsdWVcbiAgLy8gaXQgd29uJ3QgY2hhbmdlXG4gIC8vIG5lZWQgdG8gcmV0dXJuIGl0XG59XG5cbmNvbnN0IGluT3JkZXJWYWx1ZXMgPSB0cmVlLmluT3JkZXIoKTtcbmNvbnNvbGUubG9nKGluT3JkZXJWYWx1ZXMpO1xuY29uc3QgcHJlT3JkZXJWYWx1ZXMgPSB0cmVlLnByZU9yZGVyKCk7XG5jb25zb2xlLmxvZyhwcmVPcmRlclZhbHVlcyk7XG5cbnByZXR0eVByaW50KHRyZWUucm9vdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=