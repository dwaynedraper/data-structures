var Stack = function() {
  this.storage = {};
  this.counter = 0;
};
Stack.prototype.push = function(value) {
  this.counter++;
  this.storage[this.counter] = value;
};
Stack.prototype.pop = function() {
  if (this.counter === 0) {
    return 0;
  }
  let value = this.storage[this.counter];
  delete this.storage[this.counter];
  this.counter--;
  return value;
};
Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


