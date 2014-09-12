var Graph = function(){
  this.graphObj = {};
  this.numNodes =  0
};

Graph.prototype.addNode = function(newNode, toNode){
  if(toNode != undefined){
    this.graphObj[newNode] = [toNode]
    this.graphObj[toNode].push(newNode)
  } else {
    this.graphObj[newNode] = []
    var cycles = 0
    if(this.numNodes == 1){
      for(var k in this.graphObj){
        if (cycles == 0){
          this.graphObj[k].push(newNode)
          this.graphObj[newNode].push(k)
          cycles++
        }
      }
    }
  }
  this.numNodes++
};

Graph.prototype.contains = function(node){
  if(this.graphObj[node]){
    return true
  } else {
    return false
  }
};

Graph.prototype.removeNode = function(node){
  var array = this.graphObj[node]
  for(var i = 0; i< array.length-1; i++){
    var index = this.graphObj[array[i]].indexOf(node)
    delete this.graphObj[array[i]][index]
  }
  delete this.graphObj[node]
  this.numNodes--
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if(this.graphObj[fromNode].indexOf(toNode)> -1){
    return true
  } else {
    return false
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.graphObj[fromNode].push(toNode)
  this.graphObj[toNode].push(fromNode)
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  console.log(this.graphObj)
  var toIndex = this.graphObj[fromNode].indexOf(toNode)
  var fromIndex = this.graphObj[toNode].indexOf(fromNode)
  delete this.graphObj[fromNode][toIndex]
  delete this.graphObj[toNode][fromIndex]
  if(this.graphObj[fromNode].length === 1){
    this.removeNode(fromNode)
  }
  if(this.graphObj[toNode].length === 1){
    this.removeNode(toNode)
  }
  console.log(this.graphObj)

};

Graph.prototype.forEachNode = function(func){
  for (var k in this.graphObj){
    func(k)
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
