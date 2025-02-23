function deepEqual(a, b) {
  return Object.keys(a).every((key) => a[key] === b[key]);
}

console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }));
