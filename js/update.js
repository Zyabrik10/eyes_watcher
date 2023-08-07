import { mouse } from "./mouse.js";
import { eyes } from "./init.js";
import { ctx, canvas } from "./config.js";
import { getDist } from "./math.js";

function setBallAngleBasedOnDistanceBetweenMouse(eye, dist) {
  const dx = mouse.coor.x - eye.ballCoor.x;
  const dy = mouse.coor.y - eye.ballCoor.y;

  const ax = dx / dist;
  const ay = dy / dist;

  eye.angle.x = ax;
  eye.angle.y = ay;
}

function setBallSpeedBasedOnDistanceBetweenBall(eye, dist) {
  eye.ballSpeed = dist / eye.ballRad;
}

function setCollisionBetweenBallAndEye(eye, dist) {
  if (dist >= eye.eyeRad - eye.ballRad) {
    const dx = eye.ballCoor.x - eye.coor.x;
    const dy = eye.ballCoor.y - eye.coor.y;

    const ax = dx / dist;
    const ay = dy / dist;

    eye.ballCoor.x = eye.coor.x + (eye.eyeRad - eye.ballRad) * ax;
    eye.ballCoor.y = eye.coor.y + (eye.eyeRad - eye.ballRad) * ay;
  }
}

export default function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  eyes.forEach((eye) => {
    eye.update();

    const distanceBetweenBallAndMouse = getDist(mouse.coor, eye.ballCoor);
    const distanceBetweenBallAndEye = getDist(eye.coor, eye.ballCoor);

    setBallSpeedBasedOnDistanceBetweenBall(eye, distanceBetweenBallAndMouse);
    setBallAngleBasedOnDistanceBetweenMouse(eye, distanceBetweenBallAndMouse);
    setCollisionBetweenBallAndEye(eye, distanceBetweenBallAndEye);
  });

  requestAnimationFrame(update);
}
