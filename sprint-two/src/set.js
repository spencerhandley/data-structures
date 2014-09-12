var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(typeof item === 'number' || typeof item === "string" || typeof item === "boolean"){
      this._storage[item] = item
  } else{
    var key = item.toString()
    this._storage[key] = item
  }
};

setPrototype.contains = function(item){
  if(typeof item === 'number' || typeof item === "string" || typeof item === "boolean"){
    if(this._storage[item] !== undefined){
      return true
    } else{
      return false
    }
  }else {
    if(this._storage[item.toString()] !== undefined){
      return true
    } else{
      return false
    }
  }
};

setPrototype.remove = function(item){
  if(typeof item === 'number' || typeof item === "string" || typeof item === "boolean") {
    if(this._storage[item] !== undefined){
      delete this._storage[item]
    }
  } else {
    if(this._storage[item.toString()] !== undefined){
      delete this._storage[item.toString()]
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
