//Declarative Function
helloOne() //can be called anywhere in the file 
function helloOne(){
    console.log("HelloOne")
}
// helloOne()


//Anonymous Function
//helloTwo() //gives undefined error
var helloTwo = function(){
    console.log("HelloTwo")
}
helloTwo()

//ES6 or Arrow function
var helloThree = () => {
 console.log("HelloThree")
}

helloThree()

//parameters 


var printName = (name) => {
    console.log(name)
}

printName("Joe")


var multiplyByTwo = (number) => {
    var result = number * 2
    return result
}

var myResult = multiplyByTwo(20)
console.log(myResult)

//import function

import { printAge } from '../helpers/printHelper.js'
printAge(31)

//import everything 
import * as helper from '../helpers/printHelper.js'
helper.printAge(23)