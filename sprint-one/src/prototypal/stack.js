var Stack = function() {
  let instance = Object.create(stackMethods);
  instance.storage = {};
  instance.counter = 0;
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.counter++;
    this.storage[this.counter] = value;
  },
  pop: function() {
    let value = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return value;
  } ,
  size: function() {
    return Object.keys(this.storage).length;
  }
};
