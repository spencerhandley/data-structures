var makeBinarySearchTree = function(value){
  var newTree = {value: value}
  newTree.left
  newTree.right
  newTree.minDepth
  newTree.maxDepth
  extend(newTree, binaryTreeMethods)
  return newTree
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
  // console.log(value)
  // debugger;
  var levels = 0
  var recurse = function(node){
    if(value < node.value){
      if(node.left === undefined){
        node.left = makeBinarySearchTree(value)
        return
      } else{
        levels++
        recurse(node.left)
      }
    } else if(value > node.value){
      if(node.right === undefined){
        node.right = makeBinarySearchTree(value)
        return
      } else{
        levels++
        recurse(node.right)
      }
    }
  }
  recurse(this)
  if(levels > this.maxDepth){
    this.maxDepth = levels
  }
  if(levels < this.minDepth){
    this.minDepth = levels
  }
  if((this.minDepth*2) < this.maxDepth){
    var tree = this
    tree = this.rebalance()
  }
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

binaryTreeMethods.rebalance = function(){
  var arrayHolder = []
  var recurse = function(node){
    arrayHolder.push(node.value)
    if(node.left !== undefined){
      recurse(node.left)
    }
    if(node.right !== undefined){
      recurse(node.right)
    }
    return
  }
  recurse(this)
  var sortedArray = arrayHolder.sort()
  var topNode = sortedArray[Math.floor(sortedArray.length/2)]
  var recurse2 = function(array){
    if(array.length === 0){
      return
    } else{
      var parent = makeBinarySearchTree(array[Math.floor(array.length / 2)])
      parent.left = recurse2(array.slice(0, parent-1))
      parent.right = recurse2(array.slice(parent+1,array.length-1))
    }
    return parent
  }
  return recurse2(sortedArray)
};

binaryTreeMethods.breadthFirstLog = function(){
  console.log(this.value)
  var recurse = function(node){
    if(node.left != undefined){
    console.log(node.left.value)
    }
    if(node.right != undefined){
      console.log(node.right.value)
    }
    if(node.left != undefined){
      recurse(node.left)
    }
    if(node.right != undefined){
      recurse(node.right)
    }
    return
  }
  recurse(this)


}

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
