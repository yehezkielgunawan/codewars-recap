// challenge: https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript

function reverse(string) {
	const splittedString = string.split(" ");
	const tempString = [];

	for (let i = splittedString.length - 1; i >= 0; i--) {
		tempString.push(splittedString[i]);
	}
	return tempString.join(" ");
}

console.log(reverse("Hello World"));
console.log(reverse("The quick brown fox"));
