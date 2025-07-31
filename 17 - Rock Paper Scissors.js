//Rock is 1, Paper is 2, Scissors is 3
let pC = Math.floor(Math.random() * 3) + 1;
let cP = Math.floor(Math.random() * 3) + 1;
console.log(pC, cP)
if(pC == 1 && cP == 2){
  console.log("Computer Wins!")
}else if(pC == 2 && cP == 3){
  console.log("Computer Wins!")
}else if(pC == 3 && cP == 1){
  console.log("Computer Wins!")
}else if(pC == 2 && cP == 1){
  console.log("Player Wins!")
}else if(pC == 3 && cP == 2){
  console.log("Player Wins!")
}else if(pC == 1 && cP == 3){
  console.log("Player Wins!")
}else{
  console.log("Tie!")
}




