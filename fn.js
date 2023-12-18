let name = {
    firstName : "Adithya",
    lastName : "Binoy",
    printFullName : function() {
        console.log(this.firstName + " " + this.lastName)
    }
}
name.printFullName()

let name2 = {
    firstName : "Munna",
    lastName : "A"
}

name.printFullName.call(name2)

//With call(), an object can use a method belonging to another object.