// challenge: https://www.codewars.com/kata/57d2807295497e652b000139/train/javascript

function averages(numbers) {
	const resArr = [];

	if (numbers?.length === 0 || !numbers) {
		return [];
	}
	for (let i = 1; i < numbers.length; i++) {
		resArr.push((numbers[i - 1] + numbers[i]) / 2);
	}
	return resArr;
}
