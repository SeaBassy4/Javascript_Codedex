const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png"
];

const captionsArray = [
  "LMAO",
  "BRUH",
  "That's actually crazy though",
  "GYAAAAT"
]

let memeImage = document.getElementById("random-meme");
let captionElement = document.getElementById("random-caption");
let buttonElement = document.getElementById("generator-button");

buttonElement.addEventListener("click", function (){
  let indexNumber1 = Math.floor(Math.random() * memeArray.length)
  let indexNumber2 = Math.floor(Math.random() * memeArray.length)
  memeImage.src = memeArray[indexNumber1];
  captionElement.innerHTML = captionsArray[indexNumber2]

})

