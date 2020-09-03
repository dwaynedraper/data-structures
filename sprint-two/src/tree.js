var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  return _.some(this.children, (el) => el.contains(target));
};

/*
 * Complexity: What is the time complexity of the above functions?
  The time complexity of addChild is O(1).
  The time complexity of contains is quadratic time complexity because of the recursive nature of the call
 */
