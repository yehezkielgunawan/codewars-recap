function isEven(num) {
  if (num === 0) {
    return true;
  }
  if (num === 1) {
    return false;
  }
  return isEven(num - 2);
}

console.log(50, isEven(50));
console.log(75, isEven(75));
