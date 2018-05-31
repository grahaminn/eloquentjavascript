function log(output) {
	if (typeof console == 'object') {
                console.log(output);
        }
        else {
                print(output);
        }
}

function min(a,b) {
	if (a<=b) { return a; }
	else { return b; }
}

log(min(0,50));
log(min(0,-10));
