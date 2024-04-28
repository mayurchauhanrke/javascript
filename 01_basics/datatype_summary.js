//data is of 2 types and the are devided on the basis of how they are kept 
//in the memmory and how they are accesed from the memory.

// Primitive - call by value
// 7 types - string, Number, boolean, null, undefined, symbol, BigInt.

const score = 100
const scoreValue = 100.3 

const isLoggedIn = false 
const outSideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

const bigNumber = 23232334523452342n


// Reference Type(Non-Primitive)
// array, objects, functions

const heros = ["Shatiman", "naagraj", "doga"];


let myObj = {
    name: "hitesh",
    age: 22,

}

const myFunction = function(){
    console.log("Hello World")
}