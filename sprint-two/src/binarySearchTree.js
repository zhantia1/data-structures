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

BinarySearchTree.prototype.breadthFirstLog = function(func) {
  var queue = [];
  if (this) {
    queue.push(this);
  }
  while (queue.length > 0) {
    var currentNode = queue[0];
    if (currentNode.left.value) {
      queue.push(currentNode.left);
    }
    if (currentNode.right.value) {
      queue.push(currentNode.right);
    }
    var x = queue.shift();
    func(x.value);   
  }
}

BinarySearchTree.prototype.getHeight = function() {
  if (this === null) {return 0;}
  return Math.max(this.left.value ? this.left.getHeight() : 0, this.right.value ? this.right.getHeight() : 0) + 1;
}

BinarySearchTree.prototype.isBalanced = function() {
  if (this === null) {return 0;}
  let difference = Math.abs(this.left.getHeight() - this.right.getHeight());
  if (difference > 1) {
    return false;
  } else {
    return this.left.isBalanced() && this.right.isBalanced();
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
