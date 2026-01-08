
var customerFirstName = 'John'
var customerLastName = 'Smith'
var customerAge = 25

//customerFirstName = 100 //will not work because variable is declared as string


//can create your own types
type Customer = {firstName: string, lastName: string, active: boolean}

var firstCustomer: Customer  = {
    firstName: "Mary",
    lastName: "Jones",
    active: true
}
