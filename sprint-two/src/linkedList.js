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
The time complexity of addToTail and removeHead are both o(1) because we do not have to do any searching. List.head and list.tail are both kept in memory to add efficiency. It is simply inserting or deleting. If we had to search first, it would become O(n).
The time complexity of contains is O(n) as we are iterating through each node of the Linked List searching for a specific value. Best case is time complexity O(1) if the first node's value is the target.

*/
