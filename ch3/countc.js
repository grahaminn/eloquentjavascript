function log(output) {
	if (typeof console == 'object') {
                console.log(output);
        }
        else {
                print(output);
        }
}

function countChar(ch, str) {
	if (str == null) {
		return 0;
	}
	var count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i]==ch)	{
			count++;
		}
	}
	return count;
}

log(countChar("a","foo"));
log(countChar("o","foo"));
