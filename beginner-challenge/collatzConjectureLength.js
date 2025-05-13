// challenge: https://www.codewars.com/kata/54fb963d3fe32351f2000102/train/javascript

function collatz(n) {
	const resArr = [];

	while (n !== 1) {
		resArr.push(n);

		if (n % 2 === 0) {
			n /= 2;
		} else {
			n *= 3;
			n++;
		}

		if (n === 1) {
			resArr.push(n);
		}
	}
	return resArr.length;
}
