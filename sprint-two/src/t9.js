var Tree = function(){
  this.words = 0
  this.prefixes = 0
  this.children = []
}

Tree.prototype.insert = function(str, pos){
  if(str.length === 0){
    return
  }
  var T = this,k,child;

  if(pos === undefined){
    pos = 0
  }
  if(pos === str.length){
    T.words++
    return
  }
  T.prefixes++
  k = str[pos]
  if(T.children[k] === undefined) {
    T.children[k] = new Tree()
  }
  child = T.children[k]
  child.insert(str, pos + 1)
}

Tree.prototype.getAllWords = function(start){
  var allWords = []
  var T = this;
  var str = start;
  var traverse = function(str, node){
    // if(node.words>0)
    for(var k in node.children){
      var string = str + k
      // console.log(string)
      traverse(string, node.children[k])
    }
    if(node.words > 0){
      allWords.push(str)
    }
  }
  traverse(str, T)
  return allWords
}

Tree.prototype.getPossibleWords = function(str, pos){
  var holder = this
  for(var i = 0; i < str.length; i++){
    console.log(holder)
    console.log(holder.children[str[i]])
    if(holder.children[str[i]] !== undefined){
      console.log(holder)
      holder = holder.children[str[i]]
    } else {
      return []
    }
  }
  return holder.getAllWords(str)
}
 /*
    * Count the number of times a given word has been inserted into the dictionary
    *
    * @method countWord
    * @param {String} str Word to get count of
    * @param {Integer} pos Current index of the given word
    * @return {Integer} The number of times a given word exists in the dictionary
    */


Tree.prototype.countWord = function(str, pos) {
        if(str.length == 0) {
            return 0;
        }

        var T = this,
            k,
            child,
            ret = 0;

        if(pos === undefined) {
            pos = 0;
        }
        if(pos === str.length) {
            return T.words;
        }
        k = str[pos];
        child = T.children[k];
        if(child !== undefined) { //node exists
            ret = child.countWord(str, pos + 1);
        }
        return ret;
    },

    /*
    * Count the number of times a given prefix exists in the dictionary
    *
    * @method countPrefix
    * @param {String} str Prefix to get count of
    * @param {Integer} pos Current index of the given prefix
    * @return {Integer} The number of times a given prefix exists in the dictionary
    */
Tree.prototype.countPrefix = function(str, pos) {
    if(str.length == 0) {
        return 0;
    }

    var T = this,
        k,
        child,
        ret = 0;

    if(pos === undefined) {
        pos = 0;
    }
    if(pos === str.length) {
        return T.prefixes;
    }
    var k = str[pos];
    child = T.children[k];
    if(child !== undefined) { //node exists
        ret = child.countPrefix(str, pos + 1);
    }
    return ret;
}


var englishWords = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"]

newTree = new Tree()
for(var i = 0; i< englishWords.length; i++){
  newTree.insert(englishWords[i])
}
console.log(newTree)
