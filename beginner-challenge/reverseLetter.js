// challenge: https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript
function reverseLetter(str) {
	const nonAlphabeticRegex = /[^a-zA-Z]/;
	const splittedStr = str.split("");
	const newArr = [];

	for (let i = 0; i < str.length; i++) {
		if (!splittedStr[i].match(nonAlphabeticRegex)) {
			newArr.push(splittedStr[i]);
		}
	}
	return newArr.reverse().join("");
}
