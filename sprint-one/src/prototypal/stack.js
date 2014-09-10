var makeStack = function() {
  var someInstance = Object.create(stackMethods)
  someInstance.storage = {}
  someInstance.sizeHolder = 0
  return someInstance
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  push: function(value){
    this.storage[this.sizeHolder] = value
    this.sizeHolder++
  },
  pop: function(){
    this.sizeHolder && this.sizeHolder--
    var result = this.storage[this.sizeHolder]
    delete this.storage[this.sizeHolder]
    return result
  },
  size: function(){
    return this.sizeHolder
  }
};


