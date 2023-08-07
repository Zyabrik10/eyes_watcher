import { ctx } from "./config.js";
import { pi } from "./math.js";

export default class Eye {
  constructor({ coor, ballRad, eyeRad }) {
    this.coor = coor;

    this.ballCoor = {
      x: this.coor.x,
      y: this.coor.y,
    };

    this.ballSpeed = 0;

    this.eyeRad = eyeRad;
    this.ballRad = ballRad;

    this.angle = {
      x: 0,
      y: 0,
    };
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.coor.x, this.coor.y, this.eyeRad, 0, 2 * pi);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.ballCoor.x, this.ballCoor.y, this.ballRad, 0, 2 * pi);
    ctx.fill();
  }

  move() {
    this.ballCoor.x += this.ballSpeed * this.angle.x;
    this.ballCoor.y += this.ballSpeed * this.angle.y;
  }

  update() {
    this.draw();
    this.move();
  }
}
