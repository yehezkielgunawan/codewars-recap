// challenge: https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

function vowelIndices(word) {
	const vowelRegex = /[aeiou]/gi;
	const tempArr = [];

	for (let i = 0; i < word.length; i++) {
		if (word[i].match(vowelRegex)) {
			tempArr.push(i + 1);
		}
	}
	return tempArr;
}
