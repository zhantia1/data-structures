var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.array = [];
  this.storage = {}; 

};

Queue.prototype.enqueue = function(value) {
	[].push.call(this.storage,value);
	return this.array.push(value);
};
Queue.prototype.dequeue = function() {
	[].shift.call(this.storage);
	return this.array.shift();
};
Queue.prototype.size = function() {
return this.storage.length || 0;
};