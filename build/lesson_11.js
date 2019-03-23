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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 335);
/******/ })
/************************************************************************/
/******/ ({

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(336);


/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dom = __webpack_require__(337);

__webpack_require__(338);

var widgets = document.querySelectorAll('.greet-widget');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = widgets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var widgetElement = _step.value;

        console.log(widgetElement);
        (0, _dom.greetWidget)(widgetElement);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function greetWidget(rootElement) {
    var button = rootElement.querySelector('.greet-widget__btn');
    var title = rootElement.querySelector('.greet-widget__title');

    var isActive = true;

    button.onclick = toggle;

    function toggle() {
        if (isActive) {
            toggleOff();
        } else {
            toggleOn();
        }
    }

    function toggleOn() {
        button.classList.add('btn_active');
        rootElement.classList.add('greet-widget_active');
        title.classList.add('greet-widget__title_active');
        isActive = true;
    }

    function toggleOff() {
        button.classList.remove('btn_active');
        rootElement.classList.remove('greet-widget_active');
        title.classList.remove('greet-widget__title_active');
        isActive = false;
    }

    toggle();
}

exports.greetWidget = greetWidget;

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });