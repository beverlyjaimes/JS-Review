//Objects

var customer = {
    firstName: "John",
    lastName: "Smith"
}
//Dot notation
customer.firstName = "Mike"
//Bracket notation
customer['lastName'] = "Silver"
console.log(customer)
console.log(customer.firstName)
console.log(customer["lastName"])

//Arrays

var car = ["Volvo", "Toyota", "Tesla"]
car[2] = "BMW"
console.log(customer.firstName +" is driving a " + car[2])


//** arrays can be stored in objects */