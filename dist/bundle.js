/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("// import './someModule'\n$(document).ready(function () {\n  console.log(\"document ready\"); // Parallax\n\n  function simpleParallax(intensity, element) {\n    $(window).scroll(function () {\n      var scrollTop = $(window).scrollTop();\n      var imgPos = scrollTop / intensity + 'px';\n      $(element).css('transform', 'translateY(' + imgPos + ')');\n    });\n  }\n\n  simpleParallax(2, '.parallax');\n});\n\n//# sourceURL=webpack://roper-good-neighbor-fund/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;