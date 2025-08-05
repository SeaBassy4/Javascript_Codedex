const dnaPieces = ["A", "C", "G", "T"];
let counter = 0;
let dnaString = "";
let randInt;
let dnaSequence = [];
while(counter <= 23){
  for(let i = 0; i < 3; i++){
    randInt = Math.floor(Math.random()*4) 
    dnaString = dnaString + dnaPieces[randInt];
  }
  dnaSequence[counter] = dnaString;
  dnaString = "";
  counter++;
}
console.log(dnaSequence)