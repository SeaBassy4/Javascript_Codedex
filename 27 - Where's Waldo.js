const characters = [
  "Waldo",
  "The Wally Watchers",
  "Wilma",
  "Fritz",
  "Wizard Whitebeard",
  "Odlaw",
  "Walder",
  "Woof"
];

let waldoIndex;
for(let i = 0; i < characters.length; i++){
  if(characters[i] == "Waldo"){
    waldoIndex = i;
  }
}
if(waldoIndex >= 0){
  console.log("Found Waldo at index: " + waldoIndex)
}else{
  console.log("Waldo Not Found")
}