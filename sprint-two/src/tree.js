var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;

  // your code here
  extend(newTree, treeMethods);
  newTree.children = [];  // fix me
  newTree.parent = parent;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value, this);
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

treeMethods.traverse = function(callback) {
  if (this.value) {
    callback(this.value);
  }
  if (Array.isArray(this.children) && this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].traverse(callback);
    }      
  }
}

treeMethods.removeParent = function() {
  let parent = this.parent;
  let child = this;
  this.parent = undefined;
  if (parent.children.length > 0) {
    for (var i = 0; i < parent.children.length; i++) {
      if (JSON.stringify(parent.children[i]) === JSON.stringify(child)) {
        parent.children.splice(i, 1);
      }
    }    
  }
}

var extend = function(obj, methods) {
  for(var key in treeMethods) {
    obj[key] = methods[key];
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
