var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let end = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    end++;
    storage[end] = value;
  };

  someInstance.pop = function() {
    let value = storage[end];
    delete storage[end];
    end--;
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
