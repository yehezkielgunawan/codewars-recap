// challenge: https://www.codewars.com/kata/56a4872cbb65f3a610000026/train/javascript
function maxRot(n) {
	let splittedN = n.toString();
	const tempArr = [splittedN];

	for (let i = 0; i < splittedN.length; i++) {
		splittedN = splittedN.slice(0, i) + splittedN.slice(i + 1) + splittedN[i];
		tempArr.push(splittedN.split().join());
	}
	return Math.max(...tempArr);
}
