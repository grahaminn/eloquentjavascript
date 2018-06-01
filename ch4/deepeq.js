function log(output) {
	if (typeof console == 'object') {
                console.log(output);
        }
        else {
                print(output);
        }
}

function arrayToList(arr) {
	if (arr == null || arr.length == 0) {
		return {};
	}
	let head = {value:arr[0], rest:null};
	let current = head; 
	for (let i = 1; i < arr.length; i++) {
		let next = {value:arr[i], rest:null};
		current.rest = next;
		current = next;
	}
	return head;
}

function deepEquals(a,b) {
	if (a===b) {
		return true;
	}
	else if (typeof a == "object" && typeof a == typeof b && Object.keys(a).length == Object.keys(b).length) {
		let akeys = Object.keys(a);
		for (let i = 0; i < akeys.length; i++) {
			if (!deepEquals(a[akeys[i]], b[akeys[i]])){
				return false;
			}
		}
		return true;
	}
	else {
		return false;
	}
}

var list1 = arrayToList([1,2,3]);
var list2 = arrayToList([4,5,6]);
var list3 = arrayToList([1,2,3]);
log(JSON.stringify(list1));

log(deepEquals(1,1));
log(deepEquals(1,2));
log(deepEquals(list1,list3));
log(deepEquals(list1,list2));
