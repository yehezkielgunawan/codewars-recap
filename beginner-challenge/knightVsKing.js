// challenge: https://www.codewars.com/kata/564e1d90c41a8423230000bc/train/javascript

function knightVsKing(knightPosition, kingPosition) {
	// Extract positions
	const [knightRank, knightFile] = knightPosition;
	const [kingRank, kingFile] = kingPosition;

	// Convert files from letters to numbers for easier calculation
	const knightFileNum = knightFile.charCodeAt(0) - "A".charCodeAt(0) + 1;
	const kingFileNum = kingFile.charCodeAt(0) - "A".charCodeAt(0) + 1;

	// Knight can capture if it's in L-shape (2,1) pattern from king
	const knightCanCapture =
		(Math.abs(knightRank - kingRank) === 2 &&
			Math.abs(knightFileNum - kingFileNum) === 1) ||
		(Math.abs(knightRank - kingRank) === 1 &&
			Math.abs(knightFileNum - kingFileNum) === 2);

	// King can capture if it's one square away in any direction
	const kingCanCapture =
		Math.abs(knightRank - kingRank) <= 1 &&
		Math.abs(knightFileNum - kingFileNum) <= 1;

	if (knightCanCapture) {
		return "Knight";
	}
	if (kingCanCapture) {
		return "King";
	}
	return "None";
}
