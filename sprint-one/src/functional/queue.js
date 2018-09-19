var Queue = function() {
  var someInstance = {};
  var y = [];

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    [].push.call(storage,value);
    return y.push(value);
  };

  someInstance.dequeue = function() {
    [].shift.call(storage);
    return y.shift();
  };

  someInstance.size = function() {
    return storage.length || 0;
  };

  return someInstance;
};