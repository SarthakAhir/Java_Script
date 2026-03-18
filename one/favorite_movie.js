let favorite = "Golmaal";
let guess = prompt("guess the my movie: ");

/* if((guess.toLowerCase()) == "quit" ){
   console.log("okay,you can Quit now");
    
}

      while((guess.toLowerCase()) != (favorite.toLowerCase())){
        console.error("you are wrong try again");
        guess = prompt(" wrong guess please try again : ");
    }

    alert("Congratualtion"); 
    console.log(favorite,"is the right answer"); */


if((guess.toLowerCase()) == favorite.toLowerCase() ){
    alert("Congratualtion"); 
    console.log(favorite,"is the right answer");
    
}

      while((guess.toLowerCase()) != (favorite.toLowerCase())){

        if((guess.toLowerCase()) == "quit"){
            alert("okay,you can Quit now");
            break;
        }
        console.error("you are wrong try again");
        guess = prompt(" wrong guess please try again : ");
    }

