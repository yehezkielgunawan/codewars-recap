// challenge: https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
function squareOrSquareRoot(array) {
	return array.map((item) =>
		Math.sqrt(item) % 1 === 0 ? Math.sqrt(item) : item ** 2,
	);
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); // [2, 9, 3, 49, 4, 1]
console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1])); // [10, 10201, 25, 25, 1, 1]
console.log(squareOrSquareRoot([1, 2, 3, 4, 5, 6])); // [1, 4, 9, 2, 25, 36]
