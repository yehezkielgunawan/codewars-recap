// challenge: https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

function bouncingBall(h, bounce, window) {
	if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
		return -1;
	}
	let count = 0;
	while (h > window) {
		count++;
		h *= bounce;
		if (h > window) {
			count++;
		}
	}
	return count;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); // 3
console.log(bouncingBall(30.0, 0.66, 1.5)); // 15
console.log(bouncingBall(2.0, 0.5, 1)); // 1
console.log(bouncingBall(10, 0.6, 10)); // -1
