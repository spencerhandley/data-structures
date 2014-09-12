var makeBinarySearchTree = function(value){
  var newTree = {value: value}
  newTree.left
  newTree.right
  extend(newTree, binaryTreeMethods)
  return newTree
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
  // console.log(value)
  // debugger;
  var recurse = function(node){
    if(value < node.value){
      if(node.left === undefined){
        node.left = makeBinarySearchTree(value)
        return
      } else{
        recurse(node.left)
      }
    } else if(value > node.value){
      if(node.right === undefined){
        node.right = makeBinarySearchTree(value)
        return
      } else{
        recurse(node.right)
      }
    }
  }
  recurse(this)
};

binaryTreeMethods.contains = function(value){
  var result = false
  var recurse = function(node){
    if(node === undefined){
      return
    }
    if(node.value === value){
      result = true
      return
    } else if(value < node.value){
      recurse(node.left)
    } else{
      recurse(node.right)
    }
  }
  recurse(this)
  return result
};

binaryTreeMethods.depthFirstLog = function(callback){
  var recurse = function(node){
    callback(node.value)
    if(node.left !== undefined){
      recurse(node.left)
    }
    if(node.right !== undefined){
      recurse(node.right)
    }
    return
  }
  recurse(this)
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
 // this.btSMF=function(level,node){
 //  return node+(1<<level)-1;
 // }
