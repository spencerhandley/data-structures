var makeStack = function() {

  var someInstance = {}

  someInstance.storage = {}
  someInstance.sizeholder = 0

  extend(someInstance, stackMethods)

  return someInstance
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {

  push: function(value) {
    this.storage[this.sizeholder] = value
    this.sizeholder++
  },
  pop: function(){
    this.sizeholder && this.sizeholder--
    var result = this.storage[this.sizeholder];
    delete this.storage[this.sizeholder]
    return result
  },
  size: function(){
    return this.sizeholder
  }

};

var extend = function(obj1, obj2){
  for(var k in obj2){
    obj1[k] = obj2[k]
  }
  return obj1
}

