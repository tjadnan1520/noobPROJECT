const status=document.getElementById("status");
const min=1;
const max=100;
const rand=Math.floor(Math.random()*(max-min))+min;
let guess; 
let run=true;
while(run){ 
    guess=window.prompt(`Guess a number between ${min} - ${max}`);
    guess=Number(guess);
    if(guess===rand){ 
        status.textContent=`Congratulations! You guessed the correct number: ${rand}`;
        run=false;
    }
    else if(guess<rand){
        window.alert(`Too low! Try again.`);
    }
    else{ 
        window.alert(`Too high! Try again.`);
    }
}
