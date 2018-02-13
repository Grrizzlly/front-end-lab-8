
var i = 0, j = 0;
var N = +prompt('Enter N');
var space = "",
    box = "";

if(0<N && N<=20&& (N % 1 === 0)){
while (i < N) {
    space = "";
    box = "";
    for (j = 0; j < N - i; j++){
        space += "   ";
}
    for (j = 0; j < 2 * i + 1; j++){
        box += "[~]";
    }
    console.log(space + box+'\n');
    i++;
}
}else{
console.error('Incorrect!');
}