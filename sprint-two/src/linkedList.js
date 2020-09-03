var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let val = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = val;
      list.tail = val;
    } else {
      list.tail.next = val;
      list.tail = val;
    }
  };

  list.removeHead = function() {
    let val = list.head.value;
    list.head = list.head.next;
    return val;
  };

  list.contains = function(target) {
    let findValue = function(node) {
      console.log('target: ', target);
      console.log('node: ', node);
      console.log('value: ', node.value);
      console.log('next: ', node.next);
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return findValue(node.next);
      }
    };
    return findValue(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
