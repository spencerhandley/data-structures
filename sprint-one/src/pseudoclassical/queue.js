var Queue = function() {
  this.storage = {}
  this.start = 0
  this.end = 0
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype = {
  constructor: Queue,
  enqueue: function(value){
    this.storage[this.end] = value
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
}


var extend = function(obj1, obj2){
  for(var k in obj2){
    obj1[k] = obj2[k]
  }
  return obj1
}
