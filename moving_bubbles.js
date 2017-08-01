var canvas;
var stage;
var shape;
var radius = 10;
var rings = 40;

export const MovingBubbles = {


  init() {
    // create a new stage and point it at our canvas:
    canvas = document.getElementById("backgroundCanvas");
    stage = new createjs.Stage(canvas);

    // var circle = new createjs.Shape();
    // circle.graphics.beginFill("#b7d7e8").drawCircle(0, 0, radius);
    // circle.x = 100;
    // circle.y = 100;
    // stage.addChild(circle);
    const colors=["#b7d7e8", "#cfe0e8"]

    for (var i = 0; i < 200; i++) {
  		shape = new createjs.Shape();
  		for (var j = rings; j > 0; j--) {
  			shape.graphics.beginFill(colors[Math.random() * colors.length | 0]).drawCircle(0, 0, radius * j / rings);
  		}
  		shape.x = Math.random() * canvas.width;
  		shape.y = Math.random() * canvas.height;
  		shape.velX = 0;
  		shape.velY = - Math.abs(Math.random() * 10 - 5);

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
