// challenge: https://www.codewars.com/kata/57faf7275c991027af000679/train/javascript

function remove(s, n) {
	//coding and coding....
	const splittedString = s.split("");

	for (let i = 0; i < n; i++) {
		const position = splittedString.indexOf("!");
		if (position > -1) {
			splittedString.splice(position, 1);
		}
	}
	return splittedString.join("");
}
