var Queue = function() {
  let someInstance = {};
  someInstance.storage = {};
  someInstance.end = 0;
  someInstance.start = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.end++;
  this.storage[this.end] = value;
};
queueMethods.dequeue = function() {
  this.start++;
  let value = this.storage[this.start];
  delete this.storage[this.start];
  return value;
};
queueMethods.size = function() {
  return Object.keys(this.storage).length;
};