function insertDash(num) {
	const numStr = String(num);
	let res = "";

	for (let i = 0; i < numStr.length; i++) {
		res += numStr[i];

		if (
			i < numStr.length - 1 &&
			Number.parseInt(numStr[i]) % 2 !== 0 &&
			Number.parseInt(numStr[i + 1]) % 2 !== 0
		) {
			res += "-";
		}
	}

	return res;
}
