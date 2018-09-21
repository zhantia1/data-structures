var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node (value, null, list.tail);
    //var newNode = Node(value, list.tail)
    if (list.tail) list.tail.next = newNode;
    else list.head = newNode;
    list.tail = newNode;
  };

  list.removeHead = function() {
  	if (!list.head) return null;
    let value = list.head.value;
    list.head = list.head.next;
  	if (list.head) list.head.previous = null;
  	else list.tail = null;
    return value;
  };

  list.addToHead = function(value) {
    var newNode = Node (value, list.head, null);
    if (list.head) list.head.previous = newNode;
    else list.tail = newNode;
    list.head = newNode;
  }

  list.removeTail = function() {
    if (!list.tail) return null;
    let value = list.tail.value;
    list.tail = list.tail.previous;
    if (list.tail) list.tail.next = null;
    else list.head = null;
    return value;
  }

  list.contains = function(target) {
    let currentNode = list.head;
    while(currentNode) {
      if(currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value, next, previous) {
  var node = {};

  node.value = value;
  node.next = next;
  //node.next = null;
  node.previous = previous;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
