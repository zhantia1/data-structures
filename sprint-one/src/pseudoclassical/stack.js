var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.array = [];
};

Stack.prototype.push = function(value) {
	[].push.call(this.storage,value);
	return this.array.push(value);
	};
Stack.prototype.pop = function() {
	[].pop.call(this.storage);
	return this.array.pop();
	};
Stack.prototype.size = function() {
	return this.storage.length || 0;
	};
