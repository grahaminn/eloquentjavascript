for (let i = 0; i <= 7; i++) {
	var output = "";
	for (let star = 0; star <= i; star++) {
		output+="*";
	}
	if (typeof console == 'object') {
		console.log(output);
	}
	else {
		print(output);
	}
}
