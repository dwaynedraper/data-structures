var Queue = function() {
  this.storage = {};
  this.start = 0;
  this.end = 0;
};
Queue.prototype.enqueue = function(value) {
  this.end++;
  this.storage[this.end] = value;
};
Queue.prototype.dequeue = function() {
  this.start++;
  let value = this.storage[this.start];
  delete this.storage[this.start];
  return value;
};
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


