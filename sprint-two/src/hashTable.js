

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let obj = this._storage.get(index) || {[k]: v};
  obj[k] = v;
  this._storage.set(index, obj);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let obj = this._storage.get(index);
  return obj[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let obj = this._storage.get(index);
  delete obj[k];
  this._storage.set(index, obj);
};

HashTable.prototype.count = function() {
  let entryCount = 0;
  for (let i = 0; i < this._limit; i++) {
    let obj = this._storage.get(i) || {};
    entryCount += Object.keys(obj).length;
  }
  console.log(entryCount);
  return entryCount;
};

/*
 * Complexity: What is the time complexity of the above functions?
  Everything in this particular project should be constant time lookup. The hash table is meant to be constant time, and the collision resolution is also looking through objects which should be constant time in JavaScript.
 */


