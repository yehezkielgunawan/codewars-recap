// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
// The input is km/h, the output needs to be cm/s.
function crocoachSpeed(s) {
  return Math.floor((s * 100000) / 3600);
}

console.log(crocoachSpeed(1.6));
