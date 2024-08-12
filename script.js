let humanScore=0;
let computerScore=0;

function getComputerChoice(){
   const choice=Math.random();
   if(choice>=0 && choice<.33)
    {
     return "rock";
   }
   else if(choice>=.33 && choice<.66){
    return "scissors";
   }
   else{
    return "paper";
   }
 }
function getUserChoice(){
   let userChoice=String(prompt("enter your choice:"));
   console.log("your choice is:"+(userChoice));
   return userChoice;
}
function playRound(){
   let humanChoice=getUserChoice();
   let computerChoice=getComputerChoice();
   humanChoice=humanChoice.toLowerCase();
   if(humanChoice==="rock" && computerChoice==="paper"){
    console.log("you lose, paper beats rock");
    computerScore++;
   }
   else if(humanChoice==="rock" && computerChoice==="scissors"){
    console.log("you win, rock beats scissors");
    humanScore++;
   }
   else if(humanChoice==="paper" && computerChoice==="scissors"){
    console.log("you lose,scissors beats paper");
    computerScore++;
   }
   else if(humanChoice==="paper" && computerChoice==="rock"){
    console.log("you win, paper beats rock");
    humanScore++;
   }
   else if(humanChoice==="scissors" && computerChoice==="rock"){
    console.log("you lose, rock beats scissors");
    computerScore++;
   }
   else if(humanChoice==="scissors" && computerChoice==="paper"){
    console.log("you win, scissors beats paper");
    humanScore++;
   }
   else{
    console.log("round draw");
   }
}
function playGame(){
    let t=5;
    while(t>0){
        playRound();
        t--;
    }
    console.log("humanScore = "+(humanScore));
    console.log("computerScore = "+(computerScore));
    if(humanScore>computerScore){
        alert("you have won the game");
    }
    else if(computerScore>humanScore){
        alert("you have lost the game");
    }
    else{
        alert("game has drawn");
    }
}
playGame();