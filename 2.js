let count=0;
let game=prompt('do you wanna play enter yes or no')
while(game=="yes"){

if(count<3){
   
       random=(Math.ceil(Math.random()*10))
       userguess=prompt('guess a number')
         if(random==userguess){
        alert("you won");
        break;
        }
         else{
         alert("bad luck retry")

         }
     count++;
     }
else{
    count=0
    game=prompt("again")
}
    
}