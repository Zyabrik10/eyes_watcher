export const floor = Math.floor;
export const pi = Math.PI;
export const pow = Math.pow;
export const sqrt = Math.sqrt;
export const round = Math.round;
export const cos = Math.cos;
export const sin = Math.sin;

export const randInt = (min, max) => floor(random() * (max - min + 1) + min);
export const getDist = (a, b) => sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2));
