

eggs.pop()
console.log(eggs)// ["chicken", "ostrich", "aligator"]

eggs.unshift("dino")
console.log(eggs)//["dino", "chicken", "ostrich", "aligator"]

eggs.push("penguin")
console.log(eggs)// ["dino", "chicken", "ostrich", "aligator", "penguin"]


//1 create an array of strings (has to be of at least length 5)
let eggs = ["chicken", "ostrich", "aligator", "frog", "fish"];

console.log(eggs[2])//aligator
console.log(eggs.length) //4
for(let i = 0; i <eggs.length; i +=2) {
  console.log(eggs[i])
}
//2 print out the second element in the array
console.log(eggs[2])
//3 print out the length of the array
console.log(eggs.length)
//4 iterate over the array and print out each element
for(let i = 0; i <eggs.length; i +=2) {
  console.log(eggs[i])
}
//5 create a function that takes in a string and in the function iterate over each element in the array and for each element check if its equal to the parameter
  // if it is then return that string
  //else continue
  const loop = (string) => {
    for(let i = 0; i < eggs.lengths; i ++) {
      if(string === eggs[i]) {
        console.log(true)
      } else {
        console.log(false)
      }
    }
  }
  console.log(iterate("penguin"))
  
 //6 remove the last element from the array and then console.log the array
 
 //7 remove the first element from the array and then console.log the array
 
 //8 add a string to the end of the array and then console.log the array
 
 // add a string to the beginning of the array and then console.log the array



 //objects 
 let personalInfo = {
   "first name": "Agnes",
   lastname: "Huang",
   age: 18 ,
   location: "Seattle",
 }
console.log(personalInfo["age"])
console.log(personalInfo.location)