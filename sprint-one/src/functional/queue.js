var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let start = 0;
  let end = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end++] = value;
  };

  someInstance.dequeue = function() {
    //make sure to capture value before deleting the value by storing the value, deleting, THEN returning
    let value = storage[start];
    delete storage[start++];
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
