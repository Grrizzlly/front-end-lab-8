
function getClosestToZero() {
    
    var min = Math.abs(arguments[0]);
  for(var i in arguments)
  {
    if(Math.abs(arguments[i])<Math.abs(min)){
    min = arguments[i];
    }
  }
    return min;
}




