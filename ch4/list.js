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

function listToArray(list) {
	let result = [];
	while (list != null) {
		result.push(list.value);
		list = list.rest;
	}
	return result;
}

function prepend(elmnt, list) {
	return {value:elmnt, rest:list};
}

function nth(n, list) {
	if (list == null) {
		log("Couldn't find "+n+"th element");
		return null;
	}
	else if (n == 0) {
		return list;
	}
	else {
		return nth(n-1, list.rest);
	}
}

log(JSON.stringify(arrayToList([1,2,3])));
log(listToArray(arrayToList([4,5,6])));
