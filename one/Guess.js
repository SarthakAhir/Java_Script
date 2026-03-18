const max = prompt("Enter the max number");

const Random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while(true){
    if(guess.toLowerCase() == "quit"){
        console.log("User quit");
        break;
    }
    else if(guess == Random){
        console.log("Congrats!! you are right, Random number is ", Random);
        break;
    }
  
    else if(guess < Random){
            guess = prompt("oh hoo your value is low , please try again")
    }
     else{
        guess = prompt("oh hoo your vlaue is large, please try again")
    }
}