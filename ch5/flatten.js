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

function flatten(arr) {
	return reduce(arr, concat, []);
}

log([[1,2,3],[4,5],[6]]);
