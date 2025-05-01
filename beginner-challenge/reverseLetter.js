function reverseLetter(str) {
	//coding and coding..

	return str
		.match(/[a-zA-Z]/g)
		.reverse()
		.join("");
}
