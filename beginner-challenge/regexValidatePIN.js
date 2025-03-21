// challenge: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
function validatePIN(pin) {
	const pinPattern = /^(\d{4}|\d{6})$/;

	return pinPattern.test(pin);
}
