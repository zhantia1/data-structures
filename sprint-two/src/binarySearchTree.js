var BinarySearchTree = function(value) {
  this.value = value;
  this.left = {};
  this.right = {};
  this.parent = undefined;
  this.storage = [value];
};

BinarySearchTree.prototype.insert = function(value) {
  this.storage.push(value);
  if (this.value > value) {
    if(this.left.value) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
      this.left.parent = this;      
    }
  } else {
    if(this.right.value) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
      this.right.parent = this;
    }
  }
  var x = this;
  var treeRoot = x.searchRoot();
  var left = treeRoot.left.value ? treeRoot.left.getHeight() : 0;
  var right = treeRoot.right.value ? treeRoot.right.getHeight() : 0;
  if (Math.abs(left - right) > 1) {
    treeRoot.reBalance();
  }
}
BinarySearchTree.prototype.newInsert = function(value) {
  this.storage.push(value);
  if (this.value > value) {
    if(this.left.value) {
      this.left.newInsert(value);
    } else {
      this.left = new BinarySearchTree(value);
      this.left.parent = this;      
    }
  } else {
    if(this.right.value) {
      this.right.newInsert(value);
    } else {
      this.right = new BinarySearchTree(value);
      this.right.parent = this;
    }
  }
}
BinarySearchTree.prototype.contains = function(value) {
  var found = false;
  if (this.value === value) {
    found = true;
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
BinarySearchTree.prototype.searchRoot = function() {
  if (this.parent) {
    return this.parent.searchRoot();
  } else {
    return this;
  }
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

  let difference = Math.abs(this.left.value ? this.left.getHeight() : 0, this.right.value ? this.right.getHeight() : 0);
  if (difference > 1) {
    return false;
  } else {
    return (this.left.value ? this.left.isBalanced() : true) && (this.right.value ? this.right.isBalanced() : true);
  }
};
BinarySearchTree.prototype.empty = function(value) {
  this.value = value;
  this.left = {};
  this.right = {};
  this.parent = undefined;
  this.storage = [value];
}

BinarySearchTree.prototype.reBalance = function() {
  var sortedTree = this.storage.sort();

  
  var splitArray = function(array) {
    var sortedArray = [];
    var queueList = [];
    if (array) {
      queueList.push(array);
    }
    while (queueList.length > 0) {
      var current = queueList[0];
      if (current.length > 2) {
        var midpoint = Math.floor(current.length / 2);
        var array1 = current.slice(0, midpoint);
        var array2 = current.slice(midpoint + 1);
        queueList.push(array1);
        queueList.push(array2);
        sortedArray.push(current[midpoint]);
      } else if (current.length === 2) {
        var array1 = [current[0]];
        queueList.push(array1);
        sortedArray.push(current[1]);
      } else if (current.length === 1) {
        sortedArray.push(current[0]);
      }
      queueList.shift();  
    }
    return sortedArray;
  };
  var balancedArray = splitArray(sortedTree);
  if(balancedArray.length > 0) {
    this.empty(balancedArray[0]); 
  }  
  if(balancedArray.length > 1) {
    for (var i = 1; i < balancedArray.length; i++) {
      this.newInsert(balancedArray[i]);
    }   
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
