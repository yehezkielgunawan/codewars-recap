// challenge: https://www.codewars.com/kata/55902c5eaa8069a5b4000083/train/javascript

function formatMoney(amount) {
	return `$${amount.toFixed(2)}`;
}

console.log(formatMoney(3.99));
console.log(formatMoney(3));
