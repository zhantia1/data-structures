var BinarySearchTree = function(value) {
  this.value = value;
  this.left = {};
  this.right = {};
  this.storage = [value];
};

BinarySearchTree.prototype.insert = function(value) {
  this.storage.push(value);
  if (this.value > value) {
    if(this.left.value) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);      
    }
  } else {
    if(this.right.value) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
}
BinarySearchTree.prototype.contains = function(value) {
  var found = false;
  if (this.value === value) {
    found = true;
    console.log(found);
    return found;
  } else {
    if (this.left.value) {
      if (found) {return true;}
      found = this.left.contains(value);
    }
    if (this.right.value) {
      if (found) {return true;}
      found = this.right.contains(value);
    }
  }
  return found;
}
BinarySearchTree.prototype.depthFirstLog = function(func) {
  this.storage.forEach(e => func(e));
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
