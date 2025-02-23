// Challenge: https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript?collection=beginners

function findMultiples(integer, limit) {
	const resArr = [];

	for (let i = integer; i <= limit; i += integer) {
		resArr.push(i);
	}
	return resArr;
}
