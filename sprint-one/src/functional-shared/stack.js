var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance  = {};
  someInstance.storage = {};
  someInstance.array = [];
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {}
stackMethods.storage = {};
stackMethods.array = [];

stackMethods.push = function(value) {
[].push.call(this.storage,value);
return this.array.push(value);
};

stackMethods.pop = function() {
[].pop.call(this.storage);
return this.array.pop();
};

stackMethods.size = function() {
return this.storage.length || 0;
};

