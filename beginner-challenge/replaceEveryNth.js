// challenge: https://www.codewars.com/kata/57fcaed83206fb15fd00027a/train/javascript

function replaceNth(text, n, oldValue, newValue) {
	if (n <= 0) {
		return text;
	}

	const chars = text.split("");
	let count = 0;

	for (let i = 0; i < chars.length; i++) {
		if (chars[i] === oldValue) {
			count++;

			if (count % n === 0) {
				chars[i] = newValue;
			}
		}
	}
	return chars.join("");
}
