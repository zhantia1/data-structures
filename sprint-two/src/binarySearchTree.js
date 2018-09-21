var BinarySearchTree = function(value) {
  this.value = value;
  this.left = {};
  this.right = {};
};

BinarySearchTree.prototype.insert = function(value) {
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
  if(Object.keys(this.right).length !== 0){
    func(this.right.value);
  }
  
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
