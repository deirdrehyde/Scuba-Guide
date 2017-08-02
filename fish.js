export const Fish = {
  init() {
    let canvas = document.getElementById("backgroundCanvas");
    let stage = new createjs.Stage(canvas);
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

  }

}
