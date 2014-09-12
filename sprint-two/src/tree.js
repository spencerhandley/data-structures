var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  extend(newTree, treeMethods)
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value)
  child.parent = this
  this.children.push(child)
};
treeMethods.removeFromParent = function(){
  var parent = this.parent
  this.parent = null
  var index = parent.children.indexOf(this)
  delete parent.children[index]
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
    return
  }
  recurse(this)
  return result
};
treeMethods.traverse = function(func){
  var recurse = function(node){
    func(node)
    if(node.children.length){
      for(var i = 0; i < node.children.length; i++){
        recurse(node.children[i])
      }
    }
    return
  }
  recurse(this)
}

var extend = function(obj1, obj2){
  for(var k in obj2){
    obj1[k] = obj2[k]
  }
  return obj1
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
