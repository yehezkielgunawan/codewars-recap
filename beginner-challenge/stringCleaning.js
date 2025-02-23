// challenge: https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript

function stringClean(s) {
	const regex = /\d/g;

	console.log(s.replace(regex, ""));

	return s.replace(regex, "");
}

console.log(stringClean("This looks5 grea8t!")); // "This looks great!"
