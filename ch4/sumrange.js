function log(output) {
	if (typeof console == 'object') {
                console.log(output);
        }
        else {
                print(output);
        }
}

function range(start, end) {
	let rng = [];
	for (let i = start; i <= end; i++) {
		rng.push(i);
	}
	return rng;
}

function sum(elements) {
	let s = 0;
	for (let i = 0; i < elements.length; i++) {
		s+=elements[i]
	}
	return s;
}	

log(range(2,4));
log(sum(range(2,4)));
