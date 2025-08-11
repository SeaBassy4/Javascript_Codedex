
let rock = document.getElementById("stone");
let randomNumber = Math.floor(Math.random() * 9) +1

if(randomNumber == 1){
  rock.style.backgroundColor = "red";
}else if(randomNumber == 2){
  rock.style.backgroundColor = 	"orange";
}else if(randomNumber == 3){
  rock.style.backgroundColor = "yellow";
}else if(randomNumber == 4){
  rock.style.backgroundColor = "green";
}else if(randomNumber == 5){
  rock.style.backgroundColor = "blue";
}else if(randomNumber == 6){
  rock.style.backgroundColor = "#4169e1";
}else if(randomNumber == 7){
  rock.style.backgroundColor = "#00008b";
}else if(randomNumber == 8){
  rock.style.backgroundColor = "purple";
}else if(randomNumber == 9){
  rock.style.backgroundColor = "black";
}
