function log(output) {
	if (typeof console == 'object') {
                console.log(output);
        }
        else {
                print(output);
        }
}

for (let i = 1; i <= 100; i++) {
	if (i % 15 == 0) {
		log("FizzBuzz")
	}
	else if (i % 5 == 0) {
		log("Buzz")
	}
	else if (i % 3 == 0) {
		log("Fizz")
	}
	else {
		log(i)
	}
}
