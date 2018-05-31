function log(output) {
	if (typeof console == 'object') {
                console.log(output);
        }
        else {
                print(output);
        }
}

function even(a) {
	if (a<0) {
		log(a+" is less than 0!");
	}
	else if (a==1)	{
		return false;
	}
	else if (a==0) {
		return true;
	}
	else {
		return even(a-2);
	}
}

log(even(-25));
log(even(5));
log(even(12));
