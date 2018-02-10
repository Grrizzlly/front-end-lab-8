var A = +prompt('First side of tiangle is:');
var B = +prompt('Second side of tiangle is:');
var C = +prompt('Third side of tiangle is:');

var AB=A+B;
var AC=A+C;
var BC=B+C;

var A2 = A*A;
var B2 = B*B;
var C2 = C*C;

var A2B2 = A2+B2;
var A2C2 = A2+C2;
var B2C2 = B2+C2;

if(A>=0 && B>=0 && C>=0 && AB>C && AC>B && BC>A){
    
    var half_perim = (A + B + C)/2;
    
var square = Math.sqrt(half_perim*(half_perim-A)*(half_perim-B)*(half_perim-C));
    
if(A2==B2C2 || B2==A2C2 || C2==A2B2){
   console.log('Type of triangle is Right triangle and square is '+ parseFloat(square.toFixed(2)));
   }else if(A==B && A==C && C==B){
console.log('Type of triangle is Equilateral and square is '+ parseFloat(square.toFixed(2)));
} else if(A==B||A==C||B==C){
 console.log('Type of triangle is Isosceles and square is '+ parseFloat(square.toFixed(2)));   
}else{
console.log('Type of triangle is Scalene and square is '+ parseFloat(square.toFixed(2)));
} 
   
    
} else{
console.log('Incorrect data');
}
