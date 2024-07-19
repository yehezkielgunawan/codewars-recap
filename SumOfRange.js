function range(start, end, cum = 1) {
  let nums = [];
  if (cum > 0) {
    for (let i = start; i <= end; i += cum) {
      nums.push(i);
    }
  } else {
    for (let i = start; i >= end; i += cum) {
      nums.push(i);
    }
  }
  return nums;
}

function sum(nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

// console.log(range(1, 10));
// console.log(sum(range(1, 10)));
// console.log(sum(range(1, 3)));
console.log(range(1, 3, 2));
console.log(sum(range(1, 3, 2)));

console.log(range(5, 0, -2));
console.log(sum(range(5, 0, -2)));
