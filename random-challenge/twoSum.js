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
