function splitTheBill(group) {
	const names = Object.keys(group);
	const total = names.reduce((sum, name) => sum + group[name], 0);
	const avg = total / names.length;
	const result = {};
	for (const name of names) {
		result[name] = Math.round((group[name] - avg) * 100) / 100;
	}
	return result;
}
