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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interface__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__showResult__ = __webpack_require__(2);



Object(__WEBPACK_IMPORTED_MODULE_0__interface__["a" /* draw */])();
setTimeout(() => {Object(__WEBPACK_IMPORTED_MODULE_1__showResult__["a" /* showResult */])()}, 0);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = draw;
var operations = ['+', '-', '/', '*'];

function draw () {
    makeForm();
    makeButton();
    makeEmpty();
}

function makeForm() {
    var body = document.getElementsByTagName('body')[0];
    var form = document.createElement('form');
    var container = document.createElement('div');
    container.setAttribute('id', 'container');

    form.style.marginTop = '20px';
    for (var i = 1; i < 3; i++) {
        var input = document.createElement('input');
        var br = document.createElement('br');
        input.setAttribute('type', 'text');
        input.setAttribute('id', `input${i}`);
        input.setAttribute('autocomplete', 'off');
        input.style.marginTop = '10px';
        input.style.marginBottom = '5px';
        form.appendChild(input);
        form.appendChild(br);
    }

    container.appendChild(form);
    body.appendChild(container);    
}

function makeButton() {
    var form = document.getElementsByTagName('form')[0];
    for (var i = 0; i < operations.length; i++) {
        var button = document.createElement('button');
        button.setAttribute('id', operations[i]);
        button.innerHTML = operations[i];
        button.style.marginRight = '5px';
        form.appendChild(button);
    }
}

function makeEmpty () {
    var container = document.getElementById('container');
    var emptyField = document.createElement('div');
    emptyField.setAttribute('id', 'output');
    emptyField.style.marginTop = '10px';
    container.appendChild(emptyField);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = showResult;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calc__ = __webpack_require__(3);


function first () {
    return parseFloat(document.getElementById('input1').value);
}

function second () {
    return parseFloat(document.getElementById('input2').value);
}

function check () {
    if (isNaN(first()) || isNaN(second())) {
        return 'Please enter valid numbers'
    }
}

function showResult () {
    
    document.getElementById('+').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('output').innerHTML = check() || __WEBPACK_IMPORTED_MODULE_0__calc__["a" /* default */].sum(first(), second());
    }, false);

    document.getElementById('-').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('output').innerHTML = check() || __WEBPACK_IMPORTED_MODULE_0__calc__["a" /* default */].sub(first(), second());
    }, false);

    document.getElementById('*').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('output').innerHTML = check() || __WEBPACK_IMPORTED_MODULE_0__calc__["a" /* default */].mul(first(), second());
    }, false);

    document.getElementById('/').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('output').innerHTML = check() || __WEBPACK_IMPORTED_MODULE_0__calc__["a" /* default */].div(first(), second());
    }, false);
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mul(a, b) {
    return a * b;
}

/* harmony default export */ __webpack_exports__["a"] = ({
    sum: sum,
    sub: sub,
    div: div,
    mul: mul
});

/***/ })
/******/ ]);