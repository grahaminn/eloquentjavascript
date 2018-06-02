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
}
