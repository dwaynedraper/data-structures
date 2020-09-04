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

/*
 * Complexity: What is the time complexity of the above functions?
 */


