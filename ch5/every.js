function log(output) {
	if (typeof console == 'object') {
                console.log(output);
        }
        else {
                print(output);
        }
}

function every(array, test) {
	return !array.some(n=>!test(n));
}

log(every([1,2,3], n=>n%2==0));
log(every([2,4,6], n=>n%2==0));
