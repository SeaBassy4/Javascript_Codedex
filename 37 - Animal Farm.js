const pig = {
  name: "Otis",
  type: "Mammal",
  age: 4,
  makeSound(){
    console.log(pig.name + " is a "+ pig.age + " year old pig that goes Oink")
  }
}
const sheep = {
  name: "Lanny",
  type: "Mammal",
  age: 6,
  makeSound(){
    console.log(sheep.name + " is a "+ sheep.age + " year old sheep that goes Bahh")
  }
}
const dog = {
  name: "Cooper",
  type: "Mammal",
  age: 8, 
  makeSound(){
    console.log(dog.name + " is a "+ dog.age + " year old dog that goes Woof")
  }
}

dog.makeSound()
sheep.makeSound()
pig.makeSound()