import { floor, round } from "./math.js";
import { canvas } from "./config.js";
import Eye from "./Eye.js";

export let eyes;

export function init() {
  eyes = [];

  const eyeRad = 40;
  const ballRad = 15;

  const eyeDiametr = eyeRad * 2;

  const xNum = floor(canvas.width / eyeDiametr);
  const yNum = floor(canvas.height / eyeDiametr);

  const xSpace = round((canvas.width - eyeDiametr * xNum) / (xNum - 1));
  const ySpace = round((canvas.height - eyeDiametr * yNum) / (yNum - 1));

  let x = eyeRad;
  let y = eyeRad;

  for (let i = 0; i < yNum; i++) {
    x = eyeRad;

    for (let j = 0; j < xNum; j++) {
      const eye = {
        coor: { x, y },
        ballRad,
        eyeRad,
      };

      x += eyeDiametr + xSpace;

      eyes.push(new Eye(eye));
    }

    y += eyeDiametr + ySpace;
  }
}
