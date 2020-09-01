var Queue = function() {
  let someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.end = 0;
  someInstance.start = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.end++;
    this.storage[this.end] = value;
  },
  dequeue: function() {
    this.start++;
    let value = this.storage[this.start];
    delete this.storage[this.start];
    return value;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};