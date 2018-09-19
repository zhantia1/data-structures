var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.array = [];
  return someInstance;
};

var queueMethods = {
	enqueue: function(value) {
	[].push.call(this.storage,value);
	return this.array.push(value);
},
	dequeue: function() {
	[].shift.call(this.storage);
	return this.array.shift();
},
	size: function() {
	return this.storage.length || 0;
}
};
