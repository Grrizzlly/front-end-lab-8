
function swap(keys){
  var temp = {};
  for(var key in keys){
    temp[keys[key]] = key;
  }
  return temp;
}

function decypherPhrase(Mykey, Myphase){
    Mykey = swap(Mykey);
return cypherPhrase(Mykey,Myphase);
}

