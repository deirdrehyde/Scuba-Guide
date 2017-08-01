import { MovingBubbles } from "./moving_bubbles";
import { Fish } from "./fish";

document.addEventListener("DOMContentLoaded", function(){
  // const canvas = document.getElementById('backgroundCanvas'); // in your HTML this element appears as <canvas id="myCanvas"></canvas>


  Fish.init();
  MovingBubbles.init();

});
