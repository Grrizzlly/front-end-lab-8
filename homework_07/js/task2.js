var StartGame = confirm('Do you want to play a game?');
var Attempts;
var prize = 0;
var PosPrize = 10;
var userNum;
var RandNum;
var MaxRange = 5;
var Times =0;
var ContGame = false;
while(StartGame){
    MaxRange = 5;
   PosPrize = 10;
    prize = 0;
     Attempts = 3;
    do{
    ContGame = false;
  userNum = +prompt('Enter a number from 0 to '+MaxRange+' \n Attempts left: '+ Attempts +'\n Total prize: '+ prize+'$\n Possible prize on current attempt: ' +PosPrize+'$'); 
    
    while(Attempts>1){
        RandNum = Math.floor(Math.random() * MaxRange+1);
    if(userNum===RandNum){
        prize = PosPrize;
        MaxRange*=2;
        Attempts = 3;
        PosPrize*=3;
    ContGame = confirm('Congratulations! Your price is '+prize+'. Do you want to continue?'); 
        break;            
    } else{
    Attempts -=1;
        PosPrize = Math.floor(PosPrize/2);
        userNum = +prompt('Enter a number from 0 to '+MaxRange+' \n Attempts left: '+ Attempts +'\n Total prize: '+ prize+'$\n Possible prize on current attempt: ' +PosPrize+'$'); 
    }       
    }
        
    }while(ContGame)    
    console.log('Thank you for a game. Your prize is: '+prize);
    StartGame = confirm('Do you want to play again?');
    
}
  
console.log('You did not become a millionaire');
   