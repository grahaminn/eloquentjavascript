class GroupIterator {
        constructor(group) {
                this.i = 0;
                this.group = group;
        }
        next() {
                if (this.i == this.group.data.length) return {done: true};

                return {value: this.group.data[this.i++], done: false};
        }
}

class Group {
	constructor() {
		this.data=[];
	}
	add(item) {
		if (!this.has(item)) {
			this.data.push(item);
		}
	}
	delete(item) {
		if (this.has(item)) {
			this.data.splice(this.data.indexOf(item),1);
		}
	}
	has(item) {
		return this.data.indexOf(item) >= 0;
	}
	static from(arr) {
		let result = new Group();
		for(let item of arr) {
			result.add(item);
		}
		return result;
	}

	[Symbol.iterator]() {
        	return new GroupIterator(this);
	}
}

for (let value of Group.from(["a", "b", "c"])) {
  print(value);
}
