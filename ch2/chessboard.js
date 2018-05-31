function log(output) {
	if (typeof console == 'object') {
                console.log(output);
        }
        else {
                print(output);
        }
}

function drawChess(size) {
	output = "";
	for (let x = 0; x < size; x++) {
		for (let y = 0; y < size; y++) {
			if (x % 2 != y % 2) {
				output+="#";
			}
			else {
				output+=" ";
			}
		}
		output += "\n";
	}
	log(output);
}

drawChess(8);
drawChess(12);
