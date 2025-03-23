// challenge: https://www.codewars.com/kata/5512e5662b34d88e44000060/train/javascript

function findMissingNumber(sequence) {
	const isIncludeNonNumeric = /[^\d\s]/;
	const counter = 0;
	const sequenceLength = sequence.split("").length;
	const elements = sequence.trim().split(/\s+/);

	if (!sequence.trim()) {
		return 0;
	}
	if (isIncludeNonNumeric.test(sequence)) {
		return 1;
	}

	const sortedNums = elements.map(Number).sort((a, b) => a - b);

	if (sortedNums[0] !== 1) {
		return 1;
	}

	for (let i = 1; i <= sortedNums.length; i++) {
		if (!sortedNums.includes(i)) {
			return i;
		}
	}

	return 0;
}
