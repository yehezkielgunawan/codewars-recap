function every1(arr, test) {
  for (var i = 0; i < arr.length; i++) {
    if (!test(arr[i])) return false;
  }
  return true;
}

function every2(arr, test) {
  return arr.some((el) => test(el));
}

console.log(
  every1([1, 3, 5], function (n) {
    return n < 10;
  }),
); // true

console.log(
  every1([2, 4, 16], function (n) {
    return n < 10;
  }),
); // false
