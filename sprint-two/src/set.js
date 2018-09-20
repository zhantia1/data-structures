var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me {a: 'a'}
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) { //O(1)
  if (typeof item !== 'string') {
    item = JSON.stringify(item);
  }
  this.storage[item] = item;
};

setPrototype.contains = function(item) {//O(1)
  if (typeof item !== 'string') {
    item = JSON.stringify(item);
  }
  return this.storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) { //O(1)
  if (typeof item !== 'string') {
    item = JSON.stringify(item);
  }
  delete this.storage[item]
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
