function log(output) {
	if (typeof console == 'object') {
                console.log(output);
        }
        else {
                print(output);
        }
}

class Vec {
        constructor(x, y) {
                this.x = x;
                this.y = y;
        }
        plus(vec) {
          	return new Vec(this.x+vec.x, this.y+vec.y);
        }
        minus(vec) {
                return new Vec(this.x-vec.x,this.y-vec.y);
        }
	get length() {
		return Math.sqrt(this.x*this.x+this.y*this.y);
	}	
	
}

log(JSON.stringify(new Vec(1, 2).plus(new Vec(2, 3))));

log(JSON.stringify(new Vec(1, 2).minus(new Vec(2, 3))));

log(new Vec(3, 4).length);
