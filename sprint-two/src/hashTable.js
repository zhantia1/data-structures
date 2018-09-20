

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { //O(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage[index]) {
    this._storage[index] = {};
  }
  this._storage[index][k] = v;
};

HashTable.prototype.retrieve = function(k) { //O(1);
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[index][k];
};

HashTable.prototype.remove = function(k) { //O(1);
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[index][k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


