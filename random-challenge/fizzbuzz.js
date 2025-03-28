// Return an array
function fizzbuzz(n) {
	const resArr = [];

	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			resArr.push("FizzBuzz");
		} else if (i % 3 === 0) {
			resArr.push("Fizz");
		} else if (i % 5 === 0) {
			resArr.push("Buzz");
		} else {
			resArr.push(i);
		}
	}
	return resArr;
}
