class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.array = [];
  	this.storage = {};
  }
  enqueue(value) {
	[].push.call(this.storage,value);
	return this.array.push(value);
  }
  dequeue() {
	[].shift.call(this.storage);
	return this.array.shift(); 	
  }
  size() {
  	return this.storage.length || 0;
  }
}