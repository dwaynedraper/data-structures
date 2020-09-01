var Stack = function() {
  let someInstance = {};
  someInstance.storage = {};
  someInstance.end = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

stackMethods = {};

stackMethods.push = function(value) {
  this.end++;
  this.storage[this.end] = value;
};
stackMethods.pop = function() {
  if (this.end === 0) {
    return 0;
  }
  let value = this.storage[this.end];
  delete this.storage[this.end];
  this.end--;
  return value;
};
stackMethods.size = function() {
  return this.end;
};
let stack = Stack();