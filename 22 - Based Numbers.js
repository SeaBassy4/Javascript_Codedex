let myNumber = 100;
let binary;
let binaryString = "";
/*
for(let i = 0; myNumber !== i; myNumber--){
  console.log(myNumber)
}*/
while(myNumber !== 0){
  binary = myNumber % 2;
  binaryString = binary + binaryString;
  myNumber = Math.floor(myNumber/2);
  console.log(myNumber);
}
console.log(binaryString)