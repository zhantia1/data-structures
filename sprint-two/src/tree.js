var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var found = false;
  for(var i = 0; i < this.children.length; i++) {
    if(this.children[i].value === target) {
      return true
    }
    if(this.children[i].children.length > 0) {
      if(found === true) {
        return true;
      }
      found = this.children[i].contains(target);
    }
  }
  return found;
};

var extend = function(obj, methods) {
  for(var key in treeMethods) {
    obj[key] = methods[key];
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
