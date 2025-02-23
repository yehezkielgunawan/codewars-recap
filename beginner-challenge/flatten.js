// challenge : https://www.codewars.com/kata/5250a89b1625e5decd000413/train/javascript
// const flatten = (array) => array.flat();

const flatten = (array) => {
	let result = [];

	for (const item of array) {
		if (Array.isArray(item)) {
			result = result.concat(flatten(item));
		} else {
			result.push(item);
		}
	}

	return result;
};

// Test cases
console.log(
	flatten([
		[1, 2],
		[3, 4],
	]),
); // [1, 2, 3, 4]
console.log(flatten([1, [2, 3], [4, 5, [6, 7]]])); // [1, 2, 3, 4, 5, 6, 7]
console.log(flatten([[1, 2, 3], [4], [5, [6, 7]]])); // [1, 2, 3, 4, 5, 6, 7]
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]));
console.log(flatten([3, 4, 5, [9, 9, 9], "a,b,c"]));
