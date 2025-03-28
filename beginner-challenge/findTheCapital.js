// challenge: https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
const capitals = (word) => {
	const isUppercasedChar = /[A-Z]/;
	const resArr = [];

	for (let i = 0; i < word.length; i++) {
		if (isUppercasedChar.test(word[i])) {
			resArr.push(i);
		}
	}
	return resArr;
};
