// challenge: https://www.codewars.com/kata/56484848ba95170a8000004d/train/javascript

function gps(s, x) {
	if (x.length < 2) return 0;
	let maxSpeed = 0;
	for (let i = 1; i < x.length; i++) {
		const speed = ((x[i] - x[i - 1]) * 3600) / s;
		if (speed > maxSpeed) {
			maxSpeed = speed;
		}
	}
	return Math.floor(maxSpeed);
}
