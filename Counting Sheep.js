// Codewars Link: https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(sheep) {
  // TODO
  let count = 0;
  for (let sheepItem of sheep) {
    if (sheepItem) {
      count++;
    }
  }

  return count;
}

console.log(countSheeps([true, true, true, false]));
console.log(countSheeps([true, false, true, true, undefined, true]));
