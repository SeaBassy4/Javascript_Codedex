function isPalindrome(word){
  word = word.toLowerCase()
  let lettersFront = [];
  let lettersBack = [];
  let j = 0;
  let isPalindrome = true;
  for(let i = 0; i < word.length; i++){
    lettersFront[i] = word[i];
  }
  for(let i = lettersFront.length; i > 0; i--){
    lettersBack[j] = lettersFront[i-1];
    j++;
  }
  for(let i = 0; i < lettersFront.length; i++){
    if(lettersFront[i] == lettersBack[i]){
      isPalindrome = true;
    }else{
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}
word = "RACECAR"
if(isPalindrome(word) == true){
  console.log("The word " + word + " is a Palindrome.")
}else{
  console.log("The word " + word + " is not a Palindrome.")
}