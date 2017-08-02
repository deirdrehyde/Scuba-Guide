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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moving_bubbles = __webpack_require__(1);

var _fins = __webpack_require__(2);

var _fish = __webpack_require__(3);

document.addEventListener("DOMContentLoaded", function () {
  // const canvas = document.getElementById('backgroundCanvas'); // in your HTML this element appears as <canvas id="myCanvas"></canvas>

  // Fins.init();
  // Fish.init();
  _moving_bubbles.MovingBubbles.init();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovingBubbles = undefined;

var _fish = __webpack_require__(3);

var canvas = void 0;
var stage = void 0;
var shape = void 0;
var radius = 7;

var MovingBubbles = exports.MovingBubbles = {
  init: function init() {
    // create a new stage and point it at our canvas:
    canvas = document.getElementById("backgroundCanvas");
    stage = new createjs.Stage(canvas);

    var image = document.createElement("img");
    image.crossOrigin = "Anonymous";
    image.src = "http://res.cloudinary.com/douzdapki/image/upload/v1501693075/fish_nz0rni.png";
    var fishImage = new createjs.Bitmap(image);
    fishImage.scaleX = 0.4;
    fishImage.scaleY = 0.4;
    fishImage.x = 900;
    fishImage.y = 600;

    stage.addChild(fishImage);

    fishImage.on("pressmove", function (evt) {
      evt.target.x = evt.stageX;
      evt.target.y = evt.stageY;
    });

    var fins = document.createElement("img");
    fins.crossOrigin = "Anonymous";
    fins.src = "http://res.cloudinary.com/douzdapki/image/upload/v1501693832/fins_cfb9y5.png";
    var finImage = new createjs.Bitmap(fins);
    finImage.scaleX = 0.1;
    finImage.scaleY = 0.1;
    finImage.x = 100;
    finImage.y = 100;
    stage.addChild(finImage);

    finImage.on("pressmove", function (evt) {
      evt.target.x = evt.stageX;
      evt.target.y = evt.stageY;
    });

    var colors = ["#b7d7e8", "#cfe0e8"];

    for (var i = 0; i < 300; i++) {
      shape = new createjs.Shape();

      shape.graphics.beginRadialGradientFill(["#cfe0e8", "#2389da"], [0.25, 1], 5, -5, 0, 5, -5, radius).drawCircle(0, 0, radius);
      shape.x = Math.random() * canvas.width;
      shape.y = Math.random() * canvas.height;
      var xVels = [0.1, -0.1];
      shape.velX = xVels[Math.random() * xVels.length | 0];
      shape.velY = -Math.abs(Math.random() + 0.2);

      // turn snapToPixel on for all shapes - it's set to false by default on Shape.
      // it won't do anything until stage.snapToPixelEnabled is set to true.
      shape.snapToPixel = true;

      stage.addChild(shape);
    };
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", this.tick);
  },
  tick: function tick(event) {
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
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Fins = exports.Fins = {
  init: function init() {

    var canvas = document.getElementById("backgroundCanvas");
    var stage = new createjs.Stage(canvas);
    var image = document.createElement("img");
    image.crossOrigin = "Anonymous";
    image.src = "http://res.cloudinary.com/douzdapki/image/upload/v1501693832/fins_cfb9y5.png";
    var finImage = new createjs.Bitmap(image);
    finImage.scaleX = 0.4;
    finImage.scaleY = 0.4;
    finImage.x = 900;
    finImage.y = 600;
    stage.addChild(finImage);

    finImage.on("pressmove", function (evt) {
      evt.target.x = evt.stageX;
      evt.target.y = evt.stageY;
    });
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Fish = exports.Fish = {
  init: function init() {
    var canvas = document.getElementById("backgroundCanvas");
    var stage = new createjs.Stage(canvas);
    var image = document.createElement("img");
    image.crossOrigin = "Anonymous";
    image.src = "http://res.cloudinary.com/douzdapki/image/upload/v1501693075/fish_nz0rni.png";
    var fishImage = new createjs.Bitmap(image);
    fishImage.scaleX = 0.4;
    fishImage.scaleY = 0.4;
    fishImage.x = 900;
    fishImage.y = 600;

    stage.addChild(fishImage);

    fishImage.on("pressmove", function (evt) {
      evt.target.x = evt.stageX;
      evt.target.y = evt.stageY;
    });
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map