function reverseNumber(n)
{
    n+="";
	 var arr = n.split("");
    if(arr[0]==="-"){
    arr.push(arr[0]);
    arr.shift(arr[0]);
    }
	return arr.reverse().join("");
    
}
