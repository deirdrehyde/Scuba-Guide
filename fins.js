export const Fins = {
  init() {

    let canvas = document.getElementById("backgroundCanvas");
    let stage = new createjs.Stage(canvas);
    const image = document.createElement("img");
    image.crossOrigin = "Anonymous";
    image.src = "http://res.cloudinary.com/douzdapki/image/upload/v1501693832/fins_cfb9y5.png";
    const finImage = new createjs.Bitmap(image);
    finImage.scaleX=0.4;
    finImage.scaleY = 0.4;
    finImage.x = 900;
    finImage.y = 600;
    stage.addChild(finImage);


    finImage.on("pressmove", function(evt) {
      evt.target.x = evt.stageX;
      evt.target.y = evt.stageY;
    });
  }

}
