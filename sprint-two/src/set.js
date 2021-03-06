var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  return item in this._storage;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

setPrototype.clear = function() {
  this._storage = {};
  return this._storage;
};

/*
 * Complexity: What is the time complexity of the above functions?
  All three functions have constant time complexity as we're using object lookup for each function.
 */
