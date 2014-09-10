var makeQueue = function(){
  var someInstance = {};
  someInstance.storage = {}
  someInstance.start = 0;
  someInstance.end = 0;
  extend(someInstance,queueMethods)

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  enqueue: function(item){
    this.storage[this.end] = item
    this.end++
  },

  dequeue: function(){
    if(this.start < this.end){
      var result = this.storage[this.start]

      delete this.storage[this.start]
      this.start++

      return result
    }
  },

  size: function(){
    return this.end - this.start
  }
};

var extend = function(obj1, obj2){
  for(var k in obj2){
    obj1[k] = obj2[k]
  }
  return obj1
}

