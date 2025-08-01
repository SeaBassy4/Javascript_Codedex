const luckyNumber = 7
let guess = Math.floor(Math.random() * 10) + 1;
while(guess != 7){
  console.log("No! My lucky number isn't "+guess);
  guess = Math.floor(Math.random() * 10) + 1;
}
if(luckyNumber == guess){
  console.log("Yep! My lucky number is "+ guess);
}