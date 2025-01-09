// Link: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data) {
	const tempRes = [];
	for (let i = 0; i < data.length; i++) {
		if (data[i][0] >= 55 && data[i][1] > 7) {
			tempRes.push("Senior");
		} else {
			tempRes.push("Open");
		}
	}
	return tempRes;
}

console.log(
	openOrSenior([
		[45, 12],
		[55, 21],
		[19, -2],
		[104, 20],
	]),
); // ["Open", "Senior", "Open", "Senior"]
console.log(
	openOrSenior([
		[3, 12],
		[55, 1],
		[91, -2],
		[54, 23],
	]),
); // ["Open", "Open", "Open", "Open"]
