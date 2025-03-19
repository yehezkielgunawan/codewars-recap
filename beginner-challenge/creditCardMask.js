// challenge: https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
function maskify(cc) {
	if (cc.length <= 4) {
		return cc;
	}
	const spliceCC = cc.split("").splice(cc.length - 4, 4);
	for (let i = 0; i < cc.length - 4; i++) {
		spliceCC.unshift("#");
	}
	return spliceCC.join("");
}
