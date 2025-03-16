// challenge: https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
function getMiddle(s) {
	const middleLocation =
		s.length % 2 === 0 ? s.length / 2 - 1 : Math.floor(s.length / 2);

	return s.length % 2 === 0
		? `${s[middleLocation]}${s[middleLocation + 1]}`
		: s[middleLocation];
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
