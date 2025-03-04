//  challenge: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

function findNeedle(haystack) {
	return `found the needle at position ${haystack.findIndex((item) => item === "needle")}`;
}

console.log(
	findNeedle([
		"3",
		"123124234",
		undefined,
		"needle",
		"world",
		"hay",
		2,
		"3",
		true,
		false,
	]),
); // found the needle at position 3
