class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.array = [];
  }
  push(value) {
	[].push.call(this.storage,value);
	return this.array.push(value);
  }

  pop() {
	[].pop.call(this.storage);
	return this.array.pop();  	
  }

  size() {
	return this.storage.length || 0;
  }

}



