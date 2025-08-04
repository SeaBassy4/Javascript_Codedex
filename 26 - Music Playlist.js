const musicPlaylist = [
  "Tom Sawyer",
  "Sabotage",
  "I Wanna Dance With Somebody",
  "Don't Speak",
  "Bulls On Parade",
  "Thriller",
  "The Breaks",
  "Brick",
  "Aeroplane Over the Sea",
  "Tubthumping"
];

const firstElement = musicPlaylist.shift();
const lastElement = musicPlaylist.pop();
musicPlaylist.push("When The Levee Breaks");
musicPlaylist.unshift("Detrás de Ti");
musicPlaylist.unshift("Year of the Cat");
console.log(musicPlaylist)