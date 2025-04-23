// challenge: https://www.codewars.com/kata/58e0cb3634a3027180000040/train/javascript

function sortByValueAndIndex(arr) {
	return arr
		.map((value, idx) => ({ value, product: value * (idx + 1) }))
		.sort((a, b) => a.product - b.product)
		.map(({ value }) => value);
}
