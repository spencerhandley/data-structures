var HashTable = function(){
  this._limit = 8;
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
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
