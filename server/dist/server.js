/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller/user-controller.ts":
/*!*******************************************!*\
  !*** ./src/controller/user-controller.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userController\": () => (/* binding */ userController)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst userController = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\n\r\nuserController.get(\"/\",(req,resp)=>{\r\n\r\n    console.log(\"Test\");\r\n    resp.json({messa:\"Hello\"});\r\n\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlci91c2VyLWNvbnRyb2xsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbGVyb3Rlcmlvbi1zZXJ2ZXIvLi9zcmMvY29udHJvbGxlci91c2VyLWNvbnRyb2xsZXIudHM/NmRmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXNwb25zZSwgUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyQ29udHJvbGxlciA9IFJvdXRlcigpO1xyXG5cclxudXNlckNvbnRyb2xsZXIuZ2V0KFwiL1wiLChyZXEscmVzcCk9PntcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIlRlc3RcIik7XHJcbiAgICByZXNwLmpzb24oe21lc3NhOlwiSGVsbG9cIn0pO1xyXG5cclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/controller/user-controller.ts\n");

/***/ }),

/***/ "./src/routes/routes.ts":
/*!******************************!*\
  !*** ./src/routes/routes.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/user-controller */ \"./src/controller/user-controller.ts\");\n\r\n\r\n\r\nconst routes = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\n\r\nroutes.use(\"/user\",_controller_user_controller__WEBPACK_IMPORTED_MODULE_1__.userController);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL3JvdXRlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2xlcm90ZXJpb24tc2VydmVyLy4vc3JjL3JvdXRlcy9yb3V0ZXMudHM/MDQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQge3VzZXJDb250cm9sbGVyfSBmcm9tIFwiLi4vY29udHJvbGxlci91c2VyLWNvbnRyb2xsZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFJvdXRlcigpO1xyXG5cclxucm91dGVzLnVzZShcIi91c2VyXCIsdXNlckNvbnRyb2xsZXIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/routes.ts\n");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.ts\");\n\r\n\r\n\r\nconst port = 3000;\r\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\r\n\r\nconst router = app.use(\"\",_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes);\r\n\r\napp.use((req, res, next) => {\r\n    res.set('Cache-Control', 'no-store')\r\n    next()\r\n  })\r\n\r\napp.get(\"/\",(req,resp)=>{\r\n    resp.status(200);\r\n    resp.setHeader(\"Content-Type\",\"application/json\");\r\n    resp.json({message:\"Hello, World!\"});\r\n});\r\n\r\napp.listen(port,()=>{\r\n    console.log(`Server started at http://localhost:${port}`);\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tsZXJvdGVyaW9uLXNlcnZlci8uL3NyYy9zZXJ2ZXIudHM/OTZiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcywgeyBSZXF1ZXN0SGFuZGxlciwgcmVzcG9uc2UsIFJlc3BvbnNlLCBSb3V0ZXIgfSBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQge3JvdXRlc30gZnJvbSBcIi4vcm91dGVzL3JvdXRlc1wiXHJcblxyXG5jb25zdCBwb3J0ID0gMzAwMDtcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuY29uc3Qgcm91dGVyID0gYXBwLnVzZShcIlwiLHJvdXRlcyk7XHJcblxyXG5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgcmVzLnNldCgnQ2FjaGUtQ29udHJvbCcsICduby1zdG9yZScpXHJcbiAgICBuZXh0KClcclxuICB9KVxyXG5cclxuYXBwLmdldChcIi9cIiwocmVxLHJlc3ApPT57XHJcbiAgICByZXNwLnN0YXR1cygyMDApO1xyXG4gICAgcmVzcC5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICByZXNwLmpzb24oe21lc3NhZ2U6XCJIZWxsbywgV29ybGQhXCJ9KTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQsKCk9PntcclxuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgc3RhcnRlZCBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKTtcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/server.ts\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;