// Challenge Link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// Task: Convert number to reversed array of digits, do it without converting number to string
// Given a random number: You have to return the digits of this number within an array in reverse order.
// Example:
// 348597 => [7,9,5,8,4,3]
// 35231 => [1,3,2,5,3]

function digitize(n) {
	const tempArr = [];
	// also handles the case when n is 0
	if (n === 0) {
		return [0];
	}
	while (n > 0) {
		tempArr.push(n % 10);
		n = Math.floor(n / 10);
	}
	return tempArr;
}

console.log(digitize(35231)); // [1,3,2,5,3]
console.log(digitize(348597)); // [7,9,5,8,4,3]
console.log(digitize(0)); // [0]
