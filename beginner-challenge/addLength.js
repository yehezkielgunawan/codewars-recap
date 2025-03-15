// challenge: https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

function addLength(str) {
	const splittedStr = str.split(" ");

	for (let i = 0; i < splittedStr.length - 1; i++) {
		splittedStr[i] = `${splittedStr[i]} ${splittedStr[i].length}`;
	}
	return splittedStr;
}

console.log(addLength("apple ban"));
