var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance  = {};
  someInstance.storage = {};
  someInstance.array = [];
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {};
queueMethods.storage = {};
queueMethods.array = [];
queueMethods.enqueue = function(value) {
	[].push.call(this.storage,value);
	return this.array.push(value);
};
queueMethods.dequeue = function() {
	[].shift.call(this.storage);
	return this.array.shift();
};
queueMethods.size = function() {
return this.storage.length || 0;
};