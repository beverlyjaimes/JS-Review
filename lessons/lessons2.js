//Concatenation and Interpolation
var price = 100
var itemName = "table"
var messageToPrintConcat =  "The price for your " +itemName+" is " + price+ " dollars." //concatenation
console.log(messageToPrintConcat)

var messageToPrintInter = `The price for your ${itemName} is ${price} dollars.`//interpolation
console.log(messageToPrintInter)