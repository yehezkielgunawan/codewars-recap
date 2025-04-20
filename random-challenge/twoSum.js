// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

function twoSum(numbers, target) {
	const tempNums = new Map();

	for (let i = 0; i < numbers.length; i++) {
		if (tempNums.has(target - numbers[i])) {
			return [tempNums.get(target - numbers[i]), i];
		}
		tempNums.set(numbers[i], i);
	}
}

// test cases
console.log(twoSum([1, 2, 3], 4)); // [0, 2]
console.log(twoSum([1234, 5678, 9012], 14690)); // [1, 2]
