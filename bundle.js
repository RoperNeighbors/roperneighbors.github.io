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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mobile_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile_nav */ \"./src/js/mobile_nav.js\");\n/* harmony import */ var _mobile_nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mobile_nav__WEBPACK_IMPORTED_MODULE_0__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n$(document).ready(function () {\n  ////////// Parallax //////////\n  function simpleParallax(intensity, element) {\n    $(window).scroll(function () {\n      var scrollTop = $(window).scrollTop();\n      var imgPos = scrollTop / intensity + 'px';\n      $(element).css('transform', 'translateY(' + imgPos + ')');\n    });\n  }\n\n  simpleParallax(3, '.parallax');\n  simpleParallax(-8, '.parallax--planet'); ////////// Sticky Nav //////////\n  // When the user scrolls the page, add body class\n\n  $(window).on('scroll', function () {\n    var navOffset = $('#roper-rocket').offset().top;\n\n    if ($(document).scrollTop() > navOffset) {\n      $('body').addClass('scroll');\n    } else {\n      $('body').removeClass('scroll');\n    } // When user hits bottom of page (within 60px), show FB text\n\n\n    if ($(window).scrollTop() + $(window).height() > $(document).height() - 60) {\n      $('footer .fade-in').fadeIn('slow');\n    } else {\n      $('footer .fade-in').fadeOut('slow');\n    }\n  }); ////////// Modal //////////\n  // On Click\n\n  var modal = $('#modal');\n  var modalTrigger = $('.modal-trigger');\n  var modalLink = $('.modal a');\n  var modalClose = $('.modal button.modal-close');\n  var firstLink = $('.modal .button:first-of-type');\n  $(modalTrigger).on('click', function () {\n    $(this).attr('aria-expanded', 'true');\n    $(modal).attr('aria-hidden', 'false');\n    $('body').addClass('modal-open');\n    $('.modal').fadeIn('slow');\n    modalLink.attr('tabindex', '0');\n    modalClose.attr('tabindex', '0');\n    firstLink.focus();\n  }); // On Enter\n\n  $(modalTrigger).on('keypress', function (e) {\n    e.preventDefault();\n\n    if (e.which === 13) {\n      $(modalTrigger).attr('aria-expanded', 'true');\n      $(modal).attr('aria-hidden', 'false');\n      $('body').addClass('modal-open');\n      $('.modal').fadeIn('slow');\n      modalLink.attr('tabindex', '0');\n      modalClose.attr('tabindex', '0');\n      firstLink.focus();\n    }\n  }); // Loop through modal\n\n  $(modalClose).on('keydown', function (e) {\n    if (e.which === 9) {\n      e.preventDefault();\n      $(modalLink).focus();\n    }\n  }); // Modal Close\n  // On Button Click\n\n  $(modalClose).on('click', function () {\n    $(modalTrigger).attr('aria-expanded', 'false');\n    $(modal).attr('aria-hidden', 'true');\n    $('body').removeClass('modal-open');\n    $('.modal').fadeOut('slow');\n    modalLink.attr('tabindex', '-1');\n\n    if ($('nav').css('display') === 'none') {\n      $('button.menu-trigger').focus();\n    } else {\n      $(modalTrigger).focus();\n    }\n  }); // To ADD: On mobile after modal close, focus on menu trigger //\n  // On ESC\n\n  $(document).keyup(function (e) {\n    if (e.which === 27) {\n      if ($('body').hasClass('modal-open')) {\n        $(modalTrigger).attr('aria-expanded', 'false');\n        $(modal).attr('aria-hidden', 'true');\n        $('body').removeClass('modal-open');\n        $('.modal').fadeOut('slow');\n        modalLink.attr('tabindex', '-1');\n\n        if ($('nav').css('display') === 'none') {\n          $('button.menu-trigger').focus();\n        } else {\n          $(modalTrigger).focus();\n        }\n      }\n    }\n  });\n}); // Clear form after submission\n\nwindow.onbeforeunload = function () {\n  var _iterator = _createForOfIteratorHelper(document.getElementsByTagName('form')),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var form = _step.value;\n      form.reset();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n//# sourceURL=webpack://roper-good-neighbor-fund/./src/js/main.js?");

/***/ }),

/***/ "./src/js/mobile_nav.js":
/*!******************************!*\
  !*** ./src/js/mobile_nav.js ***!
  \******************************/
/***/ (() => {

eval("$(document).ready(function () {\n  ////////// Mobile Nav //////////\n  // On Click\n  var mobileNav = $('nav');\n  var menuTrigger = $('.menu-trigger');\n  var menuLink = $('nav a');\n  var lastLink = $('nav li:last-child .button');\n  $(menuTrigger).on('click', function () {\n    // If menu is not open, open menu\n    if (!$('body').hasClass('menu-open')) {\n      $(menuTrigger).attr('aria-expanded', 'true');\n      $(mobileNav).attr('aria-hidden', 'false');\n      $('body').addClass('menu-open');\n      $(mobileNav).show().animate({\n        right: '20px'\n      });\n      menuLink.attr('tabindex', '0');\n    } else {\n      // If menu is open, close menu\n      $(menuTrigger).attr('aria-expanded', 'false');\n      $(mobileNav).attr('aria-hidden', 'true');\n      $('body').removeClass('menu-open');\n      $(mobileNav).animate({\n        right: '-320px'\n      }).hide('slow');\n      menuLink.attr('tabindex', '-1');\n    }\n  }); // On ESC, close menu\n\n  $(document).keyup(function (e) {\n    if (e.which === 27) {\n      if ($('body').hasClass('menu-open')) {\n        $(menuTrigger).attr('aria-expanded', 'false');\n        $(mobileNav).attr('aria-hidden', 'true');\n        $('body').removeClass('menu-open');\n        $(mobileNav).animate({\n          right: '-320px'\n        }).hide('slow');\n        menuLink.attr('tabindex', '-1');\n        $(menuTrigger).focus();\n      }\n    }\n  }); // On Menu click, close menu\n\n  $('nav').on('click', function () {\n    if ($('body').hasClass('menu-open')) {\n      // If menu is open, close menu\n      $(menuTrigger).attr('aria-expanded', 'false');\n      $(mobileNav).attr('aria-hidden', 'true');\n      $('body').removeClass('menu-open');\n      $(mobileNav).animate({\n        right: '-320px'\n      }).hide('slow');\n      menuLink.attr('tabindex', '-1');\n    }\n  }); // Loop through menu on mobile if menu is open\n\n  $(lastLink).on('keydown', function (e) {\n    // If mobile menu\n    if ($('nav ul.flex').css('display') === 'block') {\n      // On TAB, focus on menu trigger\n      if (e.which === 9) {\n        e.preventDefault();\n        $(menuTrigger).focus();\n      } // On Enter, close mobile menu (modal will open)\n\n\n      if (e.which === 13) {\n        // If menu is open, close menu\n        $(menuTrigger).attr('aria-expanded', 'false');\n        $(mobileNav).attr('aria-hidden', 'true');\n        $('body').removeClass('menu-open');\n        $(mobileNav).animate({\n          right: '-320px'\n        }).hide('slow');\n        menuLink.attr('tabindex', '-1');\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://roper-good-neighbor-fund/./src/js/mobile_nav.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;