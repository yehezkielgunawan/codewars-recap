// challenge link: https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

function smash(words) {
	let tempRes = "";
	for (let i = 0; i < words.length; i++) {
		tempRes += words[i];
		if (i < words.length - 1) {
			tempRes += " ";
		}
	}
	return tempRes;
}
