import { canvas } from "./config.js";
import { mouse } from "./mouse.js";
import { init } from "./init.js";
import update from "./update.js";

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

window.addEventListener("load", () => {
  init();
  update();
});

canvas.addEventListener("mousemove", ({ offsetX: x, offsetY: y }) => {
  mouse.coor.x = x;
  mouse.coor.y = y;
});

canvas.addEventListener("touchmove", ({ touches }) => {
  const { pageX: x, pageY: y } = touches[0];

  mouse.coor.x = x;
  mouse.coor.y = y;
});
