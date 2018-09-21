var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { //O(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage[index]) {
    this._storage[index] = [];
  }
  this._storage[index] = this._storage[index].filter(function(el) {
   return el[0] !== k;
  });
  this._storage[index].push([k, v]);
  this.checkSize();
};

HashTable.prototype.checkSize = function() {
  var count = 0;
  for(var key in this._storage) {
    if (Array.isArray(this._storage[key]) && this._storage[key].length > 0) {
      count++;
    }
  }
  if (count >= (this._limit * 0.75) - 1) {
    this._limit = this._limit * 2;
    var storage = this._storage;
    this._storage = LimitedArray(this._limit);
    for (var key in storage) {
      if (Array.isArray(storage[key])) {
        for(var i = 0; i < storage[key].length; i++) {
          var index = getIndexBelowMaxForKey(storage[key][i][0], this._limit);
          if(!this._storage[index]) {
            this._storage[index] = [];
          }
          this._storage[index] = this._storage[index].filter(function(el) {
           return el[0] !== storage[key][i][0];
          });
          this._storage[index].push([storage[key][i][0], storage[key][i][1]]);
        }
      }
    }
  } else if (count <= (this._limit * 0.25) - 1) {
    this._limit = this._limit / 2;
    var storage = this._storage;
    this._storage = LimitedArray(this._limit);
    for (var key in storage) {
      if (Array.isArray(storage[key])) {
        for(var i = 0; i < storage[key].length; i++) {
          var index = getIndexBelowMaxForKey(storage[key][i][0], this._limit);
          if(!this._storage[index]) {
            this._storage[index] = [];
          }
          this._storage[index] = this._storage[index].filter(function(el) {
           return el[0] !== storage[key][i][0];
          });
          this._storage[index].push([storage[key][i][0], storage[key][i][1]]);
        }
      }
    }  
  }
};

HashTable.prototype.retrieve = function(k) { //O(1);
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        return this._storage[index][i][1];
      }
    }    
  }

};

HashTable.prototype.remove = function(k) { //O(1);
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = this._storage[index].filter(function(element) {
    return element[0] !== k;
  })
  this.checkSize();
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


