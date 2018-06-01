function reduce(array, combine, start) {
  let current = start;	 
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

function log(output) {
	if (typeof console == 'object') {
                console.log(output);
        }
        else {
                print(output);
        }
}

