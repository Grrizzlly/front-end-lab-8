function getTransformedArray(array, func){

    var SecondArray =[];
    
    forEach(array, function(i){
    SecondArray.push(func(i));
    });
    return SecondArray;
    
}

