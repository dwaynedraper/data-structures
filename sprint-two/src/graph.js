// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push({
    'value': node,
    'edges': []
  });
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  let nodes = this.nodes;
  return _.some(nodes, (el) => el.value === node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let nodes = this.nodes;
  let ind = this.findIndex(node);
  let edges = this.nodes[ind].edges.slice();
  for (let i = 0; i < edges.length; i++) {
    this.removeEdge(edges[i], node);
  }
  _.each(nodes, function(el, i) {
    if (el.value === node) {
      nodes.splice(i, 1);
    }
  });

};

Graph.prototype.findIndex = function(node) {
  let index;
  let nodes = this.nodes;
  _.each(nodes, (el, i) => {
    if (el.value === node) {
      index = i;
    }
  });
  return index;
};
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let fromIndex = this.findIndex(fromNode);
  if (this.nodes[fromIndex].edges.includes(toNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  let fromIndex = this.findIndex(fromNode);
  let toIndex = this.findIndex(toNode);
  this.nodes[fromIndex].edges.push(toNode);
  this.nodes[toIndex].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let fromIndex = this.findIndex(fromNode);
  let toIndex = this.findIndex(toNode);
  let filtered = this.nodes[fromIndex].edges.filter(el => el === fromNode);
  this.nodes[fromIndex].edges = filtered;
  filtered = this.nodes[toIndex].edges.filter(el => el === toNode);
  this.nodes[toIndex].edges = filtered;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (let i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value);
  }
};

Graph.prototype.hasOrphans = function() {
  let orphans = [];
  _.each(this.nodes, node => {
    if (node.edges.length === 0) {
      orphans.push(node.value);
    }
  });
  return orphans;
};

/*
 * Complexity: What is the time complexity of the above functions?

 addNode() has a constant time lookup, because it just gets tacked on the end of the graph.

contains() has a linear time lookup because it traverses the array and checks each element for a truth test

removeNode() has a linear time lookup because it traverses the array to find the node to remove

hasEdge() has a linear time lookup because it traverses the array to find the node it needs to check for edges

addEdge() has a linear time lookup because it traverses the array to find the node it needs to add an edge to

removeEdge() has a linear time complexity because it runs an
index lookup function which iterates over all nodes

forEachNode() has a linear time complexity because it iterates over the list and calls the callback function

hasOrphans() has a linear time complexity because it checks each node once for edges.

 */


