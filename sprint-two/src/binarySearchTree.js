var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.left = null;
  newBinaryTree.right = null;

  _.extend(newBinaryTree, binaryTreeMethods);

  return newBinaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
      return;
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
      return;
    } else {
      this.left.insert(value);
    }
  }
};

binaryTreeMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.value < value) {
    if (this.right !== null) {
      return this.right.contains(value);
    }
  } else {
    if (this.left !== null) {
      return this.left.contains(value);
    }
  }
  return false;
};

binaryTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

//  * Complexity: What is the time complexity of the above functions?
// Searching with contains is O(n) with n being the height of the tree because at every juncture it will only go left or right, and it never goes back up. Insert also follows the same logic
// depthFirstLog has a time complexity of O(n) where n is the number of total nodes, because the callback has to run once for every single node.
//  */

