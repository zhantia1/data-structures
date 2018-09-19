var Stack = function() {
  var someInstance = {};
  var x;
  var y = [];

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    x = [].push.call(storage,value);
    return y.push(value);
  };

  someInstance.pop = function() {
    [].pop.call(storage);
    return y.pop();
  };

  someInstance.size = function() {
    return storage.length || 0;
  };


  return someInstance;
};s