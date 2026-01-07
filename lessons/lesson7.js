//For Loop

//for(statement1(starting point); statement2(how long); statement3(what is it doing)){}

for(let i=0; i<5; i++){
    console.log("js review " + i) //concatination for debuging 
}


//For of Loop

var cars = ["volvo", "toyota", "honda"]

for(let car of cars) {
    console.log(car)
    if (car == "toyota"){
        break
    }
}

//ES6 for each loop

cars.forEach(car =>{
    console.log(car)
})