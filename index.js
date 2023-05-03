var randomNo = prompt("Guess a number between 1 and 1000"); 
var randomNumber = Math.floor(Math.random() * 1000) + 1;
var messageForRight = "The number was: " + randomNumber + " You gave: " + randomNo;
var messageForWrong = "Sorry, the number was: " + randomNumber + " You gave: " + randomNo;

// condition//

if(randomNo === randomNumber){
    document.querySelector("h1").innerHTML = "HURRAY YOU GOT IT RIGHT!!";
    document.querySelector("p").innerHTML = messageForRight;
}

else{
    document.querySelector("h1").innerHTML = "SORRY, YOU DIDN'T GET IT RIGHT!!";
    document.querySelector("p").innerHTML = messageForWrong; 
}
