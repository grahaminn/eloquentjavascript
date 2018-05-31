function log(output) {
	if (typeof console == 'object') {
                console.log(output);
        }
        else {
                print(output);
        }
}


function reverseArray(arr) {
	newArr = [];
	for (let i = arr.length-1; i >= 0; i--) {
		newArr.push(arr[i]);
	}
	return newArr;
}

function reverseArrayInPlace(arr) {
	let siz = arr.length / 2;
	for (let i = 0; i < siz; i++) {
		tmp = arr[i];
		arr[i]=arr[arr.length-1-i];
		arr[arr.length-1-i]=tmp;
	}	
	return arr;
}

log(reverseArray([1,2,3,4]));
log(reverseArrayInPlace([1,2,3,4]));
