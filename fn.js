// let name = {
//     firstName : "Adithya",
//     lastName : "Binoy",
//     printFullName : function() {
//         console.log(this.firstName + " " + this.lastName)
//     }
// }
// name.printFullName()

// let name2 = {
//     firstName : "Munna",
//     lastName : "A"
// }

// name.printFullName.call(name2)

//we can borrow functions from other objects and use it with data of some other objects


//With call(), an object can use a method belonging to another object.

let name1 = {
    firstName : "Adithya",
    lastName : "Binoy"
}

let name2 = {
    firstName : "Gigi",
    lastName : "Hadid"
}

let printFullName = function(homeTown , state) {
    console.log(this.firstName + " " + this.lastName + " from " + homeTown + " , " + state)
}
printFullName.call(name1, "Calicut", "Kerala")
printFullName.call(name2, "California", "California")

printFullName.apply(name2, ["india", "india"])

//bind method

let printName = printFullName.bind(name2, "mumbai", "india")
printName()