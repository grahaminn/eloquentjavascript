function withBoxUnlocked(body) {
  if (box.locked) {
  	box.unlock();
  	try {
  		return body();
  	}
  	finally {
  		box.lock();// Your code here.
  	}
  }
  else {
    return body();
  }
}
