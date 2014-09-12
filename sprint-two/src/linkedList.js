var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.tail != null){
      var a = makeNode(value)
      list.tail.next = a
      list.tail = list.tail.next
// set new tail
    } else{
      list.tail = makeNode(value)
      list.head = list.tail
    }
    // handle exceptions

  };

  list.removeHead = function(){
    var holder = list.head.value
    list.head = list.head.next
    return holder
  };

  list.contains = function(target){
    var current = list.head
    while(current !== null){
      if(target === current.value){
        return true
      }
      current = current.next
    }
    return false
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
