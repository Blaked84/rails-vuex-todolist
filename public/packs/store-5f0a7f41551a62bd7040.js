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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/*!***************************************!*\
  !*** ./app/javascript/packs/store.js ***!
  \***************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  state: {\n    todos: [{ name: \"todo 1\", done: true }, { name: \"todo 2\", done: false }, { name: \"todo 3\", done: false }]\n  },\n\n  mutations: {\n    completeAll({ todos }) {\n      todos.forEach(todo => todo.done = true);\n    },\n    deleteTodo({ todos }, todo) {\n      todos.splice(todos.indexOf(todo), 1);\n    },\n    toggleTodo(sate, todo) {\n      todo.done = !todo.done;\n    },\n    addTodo({ todos }, body) {\n      todos.push({\n        name: body,\n        done: false\n      });\n    }\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvamF2YXNjcmlwdC9wYWNrcy9zdG9yZS5qcz8wYjNlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdGU6IHtcbiAgICB0b2RvczogW3sgbmFtZTogXCJ0b2RvIDFcIiwgZG9uZTogdHJ1ZSB9LCB7IG5hbWU6IFwidG9kbyAyXCIsIGRvbmU6IGZhbHNlIH0sIHsgbmFtZTogXCJ0b2RvIDNcIiwgZG9uZTogZmFsc2UgfV1cbiAgfSxcblxuICBtdXRhdGlvbnM6IHtcbiAgICBjb21wbGV0ZUFsbCh7IHRvZG9zIH0pIHtcbiAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB0b2RvLmRvbmUgPSB0cnVlKTtcbiAgICB9LFxuICAgIGRlbGV0ZVRvZG8oeyB0b2RvcyB9LCB0b2RvKSB7XG4gICAgICB0b2Rvcy5zcGxpY2UodG9kb3MuaW5kZXhPZih0b2RvKSwgMSk7XG4gICAgfSxcbiAgICB0b2dnbGVUb2RvKHNhdGUsIHRvZG8pIHtcbiAgICAgIHRvZG8uZG9uZSA9ICF0b2RvLmRvbmU7XG4gICAgfSxcbiAgICBhZGRUb2RvKHsgdG9kb3MgfSwgYm9keSkge1xuICAgICAgdG9kb3MucHVzaCh7XG4gICAgICAgIG5hbWU6IGJvZHksXG4gICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9qYXZhc2NyaXB0L3BhY2tzL3N0b3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ })

/******/ });