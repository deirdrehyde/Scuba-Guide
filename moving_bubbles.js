import { Fish } from "./fish";

let canvas;
let stage;
let shape;
let radius = 7;


export const MovingBubbles = {


  init() {
    // create a new stage and point it at our canvas:
    canvas = document.getElementById("backgroundCanvas");
    stage = new createjs.Stage(canvas);

    const image = document.createElement("img");
    image.crossOrigin = "Anonymous";
    image.src = "http://res.cloudinary.com/douzdapki/image/upload/v1501693075/fish_nz0rni.png";
    const fishImage = new createjs.Bitmap(image);
    fishImage.scaleX=0.4;
    fishImage.scaleY = 0.4;
    fishImage.x = 900;
    fishImage.y = 600;

    stage.addChild(fishImage);

    fishImage.on("pressmove", function(evt) {
      evt.target.x = evt.stageX;
      evt.target.y = evt.stageY;
    });


    const fins = document.createElement("img");
    fins.crossOrigin = "Anonymous";
    fins.src = "http://res.cloudinary.com/douzdapki/image/upload/v1501693832/fins_cfb9y5.png";
    const finImage = new createjs.Bitmap(fins);
    finImage.scaleX=0.1;
    finImage.scaleY = 0.1;
    finImage.x = 100;
    finImage.y = 100;
    stage.addChild(finImage);


    finImage.on("pressmove", function(evt) {
      evt.target.x = evt.stageX;
      evt.target.y = evt.stageY;
    });


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
