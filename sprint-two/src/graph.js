

// Instantiate a new graph
var Graph = function() {
  this.values = [];
  this.edges = {}; // [1,2] [1,3] {1:[2,3]} {3: [1]}
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.values.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(this.values.includes(node)) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if(this.contains(node)) {
    var index = this.values.indexOf(node);
    this.values.splice(index, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges[fromNode].includes(toNode) ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode] ? this.edges[fromNode].push(toNode) : this.edges[fromNode] = [toNode];
  this.edges[toNode] ? this.edges[toNode].push(fromNode) : this.edges[toNode] = [fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


