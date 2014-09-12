var HashTable = function(){
  this._limit = 8;
  this._itemCount = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var j = getIndexBelowMaxForKey(v, this._limit);

  if(this._storage.get(i) !== undefined){
    var holder = this._storage.get(i)
    this._storage.set(i, [this._storage.get(i), [k,v]])
  } else {
    this._storage.set(i,[k,v])
  }
  this._itemCount++;
  if(this._itemCount / this._limit < .25){
    this._limit = this._limit/2
    reshuffle()
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var results
  var holder = this._storage.get(i)
  if(holder != null){
    if(Array.isArray(holder[0])){
      for(var b = 0; b< holder.length ; b++){
        if(holder[b][0] == k){
          results = holder[b][1]
        }
      }
    } else {
      results = holder[1]
    }
  }

  return results
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var holder = this._storage.get(i)

  if(holder != null){
    if(Array.isArray(holder[0])){
      for(var b = 0; b< holder.length ; b++){
        if(holder[b][0] == k){
          console.log(holder)
          // this._storage.set(i) = null
        }
      }
    } else {
      this._storage.set(i, [null, null])
    }
    this._itemCount--
    if(this._itemCount / this._limit < .25){
      this._limit = this._limit/2
      reshuffle()
    }
  }
};

var setKey = function(key1, key2){

}

var reshuffle = function(){
  for(var key in this._storage){
    var array = this._storage[key]
    if(!Array.isArray[array[0]]){
      var newIndex = getIndexBelowMaxForKey(array[0], this._limit)
      this._storage[newIndex] = [array[0], array[1]]
    } else {
      for(var i = 0; i < this._storage[key].length; i++){
        var subArray = this._storage[key][i]
        var value = subArray[1]
        this.insert(subArray[0], value)
      }
    }
    delete this._storage[key]
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
