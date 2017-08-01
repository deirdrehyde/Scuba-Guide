
const Util = require("./util");
const MovingBubbles = require("./moving_bubbles");


const DEFAULTS = {
	COLOR: "#505050",
	RADIUS: 25,
	SPEED: 4
};

class Bubble extends MovingBubbles {
    constructor(options = {}) {
      options.color = DEFAULTS.COLOR;
      options.pos = options.pos || options.background.randomPosition();
      options.radius = DEFAULTS.RADIUS;
      options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
			super(options);
    }


}

module.exports = Bubble;
