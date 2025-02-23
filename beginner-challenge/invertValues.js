// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

function invert(array) {
	return array.map((item) => item * -1);
}

console.log(invert([1, 2, 3, 4, 5])); // [-1,-2,-3,-4,-5]
console.log(invert([1, -2, 3, -4, 5])); // [-1,2,-3,4,-5]
console.log(invert([])); // []
console.log(invert([0])); // [0]
