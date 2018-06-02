function log(output) {
	if (typeof console == 'object') {
                console.log(output);
        }
        else {
                print(output);
        }
}

function loop(current, test, update, body) {
	if (test(current)) {
		body(current);
		loop(update(current), test, update, body);
	}
}

loop(3, n => n > 0, n => n - 1, log);
