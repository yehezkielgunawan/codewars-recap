function flatten(arr) {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    [],
  );
}

console.log(flatten([1, [2, [3, [4]], 5]]));
console.log(flatten([1, [2, [3, [4]], 5], [6, [7, [8], 9]]]));
