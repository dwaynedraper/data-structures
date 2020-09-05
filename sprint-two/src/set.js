var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return this._storage.indexOf(item) > -1;
};

setPrototype.remove = function(item) {
  let filtered = this._storage.filter(el => el !== item);
  this._storage = filtered;
};

/*
 * Complexity: What is the time complexity of the above functions?
  All three functions have linear time complexity, as all items in the storage array must be checked before running the operation.
 */
