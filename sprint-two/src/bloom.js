var Bloom = function(){
  this.m = 18;
  this.k = 3;
  this._storage = [];
  for(var i =0; i< this.m ; i ++){
    this._storage[i] = 0
  }
};


Bloom.prototype.insert = function(value){
  var h1 = hash1(value, this.m)
  var h2 = hash2(value, this.m)
  var h3 = hash3(value, this.m)
  this._storage[h1] = 1
  this._storage[h2] = 1
  this._storage[h3] = 1
}

Bloom.prototype.lookup = function(value){
  var h1 = hash1(value, this.m)
  var h2 = hash2(value, this.m)
  var h3 = hash3(value, this.m)
  var stor = this._storage
  if(stor[h1] === 0 || stor[h2] === 0 || stor[h3] === 0){
    return false
  } else{
    console.log("possibly true")
    return true
  }
}

var hash1 = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
var hash2 = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<6) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
var hash3 = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<7) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


Bloom.prototype.tryLookup = function(array){
  for(var i = 0; i < (array.length/2);i++){
    this.insert(array[i])
  }
  var counter = 0
  for(var i = 0; i < 10000; i++){
    var random = array[Math.floor(Math.random() * array.length)]
    if(this.lookup(random)){
      counter++
    }
  }
  return counter
}

var newBloom = new Bloom()
