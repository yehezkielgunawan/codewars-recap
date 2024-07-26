function reverseArray(arr) {
  console.time("reverseArray");
  let resArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    resArray.push(arr[i]);
  }
  console.timeEnd("reverseArray");
  return resArray;
}

function reverseArrayInPlace(arr) {
  console.time("reverseArrayInPlace");
  console.timeEnd("reverseArrayInPlace");
  return arr.reverse();
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
