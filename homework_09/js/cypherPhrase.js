
function cypherPhrase(Mykey, Myphrase){

    var arr = Myphrase.split("");

    for(var prop in Mykey){
        for(var i=0; i<arr.length; i++){
           
        if(prop == arr[i])
        {
        arr[i] = Mykey[prop];
        }
    }      
    }
    return arr.join('');
    
}




