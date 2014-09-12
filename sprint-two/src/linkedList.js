var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    if(list.head != null){
      var a = makeNode(value)
      var oldHead = list.head
      oldHead.previous = a
      list.head = a
      list.head.next = oldHead
    }
  }

  list.addToTail = function(value){
    if(list.tail != null){
      var a = makeNode(value)
      list.tail.next = a
      var newPrevious = list.tail
      list.tail = list.tail.next
      list.tail.previous = newPrevious


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
    if(list.head != null){
      list.head.previous = null
    }
    return holder
  };
  list.removeTail = function(){
    var oldTail = list.tail
    list.tail = oldTail.previous
    if(list.tail != null){
      list.tail.next = null
    }
    return oldTail.value
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
  node.previous = null

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
