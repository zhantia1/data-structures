var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance  = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.array = [];

  return someInstance;
};

var stackMethods = {
	push: function(value) {
	[].push.call(this.storage,value);
	return this.array.push(value);
	},
	pop: function() {
	[].pop.call(this.storage);
	return this.array.pop();
	},
	size: function() {
	return this.storage.length || 0;
	}
}
