function getMin() {
    var min = arguments[0];
  for(var i in arguments)
  {
    if(arguments[i]<min){
    min = arguments[i];
    }
  }
    return min;
}

