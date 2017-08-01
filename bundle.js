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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_bubbles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fish__ = __webpack_require__(6);



document.addEventListener("DOMContentLoaded", function(){
  // const canvas = document.getElementById('backgroundCanvas'); // in your HTML this element appears as <canvas id="myCanvas"></canvas>


  __WEBPACK_IMPORTED_MODULE_1__fish__["a" /* Fish */].init();
  __WEBPACK_IMPORTED_MODULE_0__moving_bubbles__["a" /* MovingBubbles */].init();

});


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var canvas;
var stage;
var shape;
var radius = 7;


const MovingBubbles = {


  init() {
    // create a new stage and point it at our canvas:
    canvas = document.getElementById("backgroundCanvas");
    stage = new createjs.Stage(canvas);
    const fishImage = new createjs.Bitmap("./fish.png");
    fishImage.scaleX=0.4;
    fishImage.scaleY = 0.4;
    fishImage.x = 900;
    fishImage.y = 600;
    stage.addChild(fishImage);

    const colors=["#b7d7e8", "#cfe0e8"]

    for (var i = 0; i < 300; i++) {
  		shape = new createjs.Shape();

      shape.graphics.beginRadialGradientFill(
                  ["#cfe0e8", "#2389da" ],
                  [ 0.25, 1 ],
                  5, -5, 0,
                  5, -5, radius).drawCircle(0, 0, radius);
  		shape.x = Math.random() * canvas.width;
  		shape.y = Math.random() * canvas.height;
      const xVels = [0.1, -0.1];
  		shape.velX = xVels[Math.random() * xVels.length | 0];
  		shape.velY = - Math.abs(Math.random() + 0.2) ;
  		// shape.velY = (shape.velY < 0 ? shape.velY : -1) ;
  		// shape.velY = - 1;

  		// turn snapToPixel on for all shapes - it's set to false by default on Shape.
  		// it won't do anything until stage.snapToPixelEnabled is set to true.
  		shape.snapToPixel = true;

  		stage.addChild(shape);
  	};
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
	  createjs.Ticker.addEventListener("tick", this.tick);


  },

  tick(event) {
    var w = canvas.width + radius * 2;
    var h = canvas.height + radius * 2;
    var l = stage.getNumChildren() - 1;

    // iterate through all the children and move them according to their velocity:
    for (var i = 1; i < l; i++) {
      var shape = stage.getChildAt(i);
      shape.x = (shape.x + radius + shape.velX + w) % w - radius;
      shape.y = (shape.y + radius + shape.velY + h) % h - radius;
    }


    // draw the updates to stage:
    stage.update(event);
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = MovingBubbles;



/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Fish = {
  init() {

    const fishImage = new createjs.Bitmap("./fish.png");
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Fish;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map