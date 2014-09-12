var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods)
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value)
  this.children.push(child)
};

treeMethods.contains = function(target){
  var result = false
  function recurse(node){
    if(target === node.value){
      result = true
    } else {
      for(var i = 0; i< node.children.length; i++){
        recurse(node.children[i])
      }
    }
  }
  recurse(this)
  return result
};

var extend = function(obj1, obj2){
  for(var k in obj2){
    obj1[k] = obj2[k]
  }
  return obj1
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
