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

eval("// import './someModule'\n$(document).ready(function () {\n  console.log(\"document ready\"); // Parallax\n\n  function simpleParallax(intensity, element) {\n    $(window).scroll(function () {\n      var scrollTop = $(window).scrollTop();\n      var imgPos = scrollTop / intensity + 'px';\n      $(element).css('transform', 'translateY(' + imgPos + ')');\n    });\n  }\n\n  simpleParallax(3, '.parallax'); // Sticky Nav\n  // When the user scrolls the page, execute myFunction\n\n  $(window).on('scroll', function () {\n    var navOffset = $('#roper-rocket').offset().top;\n\n    if ($(document).scrollTop() > navOffset) {\n      $('body').addClass('scroll');\n    } else {\n      $('body').removeClass('scroll');\n    }\n  }); // Modal Open\n  // On Click\n\n  var modalLink = $('.modal a');\n  $('.modal-trigger').on('click', function () {\n    $(this).attr('aria-expanded', 'true');\n    $('body').addClass('modal-open');\n    $('.modal').fadeIn('slow');\n    modalLink.attr('tabindex', '0');\n    $('.modal').focus();\n  }); // On Enter\n\n  $('.modal-trigger').on('keypress', function (e) {\n    if (e.which == 13) {\n      $('modal-trigger').attr('aria-expanded', 'true');\n      $('body').addClass('modal-open');\n      $('.modal').fadeIn('slow');\n      modalLink.attr('tabindex', '0');\n      $('.modal').focus();\n    }\n  }); // Loop through modal\n\n  $('.modal .button').keydown, function () {\n    $('button.modal-close').focus();\n  }; // Modal Close\n  // On Click\n\n  $('button.modal-close').on('click', function () {\n    $('body').removeClass('modal-open');\n    $('.modal').fadeOut('slow');\n    modalLink.attr('tabindex', '-1');\n    $('.modal-trigger').focus();\n  }); // On Enter\n\n  $('.button.modal-close').on('keypress', function (e) {\n    if (e.which == 13) {\n      $('body').removeClass('modal-open');\n      $('.modal').fadeOut('slow');\n      modalLink.attr('tabindex', '-1');\n      $('modal-trigger').focus();\n    }\n  }); // On ESC\n\n  $(document).keyup(function (e) {\n    if (e.which == 27) {\n      if ($('body').hasClass('modal-open')) {\n        $('body').removeClass('modal-open');\n        $('.modal').fadeOut('slow');\n        modalLink.attr('tabindex', '-1');\n        $('.modal-trigger').focus();\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://roper-good-neighbor-fund/./src/js/main.js?");

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