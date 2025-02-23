// test: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
var number = function (array) {
  //your awesome code here
  let ansArr = [];

  for (let i = 0; i < array.length; i++) {
    ansArr.push(`${i + 1}: ${array[i]}`);
  }
  return ansArr;
};

console.log(number(["a", "b", "c"]));
