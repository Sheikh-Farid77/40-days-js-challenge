// constructor function
// constructor function first letter should be capital

function Car (name, model) {
this.name = name;
this.model = model;
}

const bmwCar = new Car("BMW", "X1");
// console.log(bmwCar)


const person = new Object();
person.name = "Farid";
person.age = 24;

// console.log(person)


// factory function

 function createUser (name, age) {
    return {
        name,
        age
    }
 }

 const person1 = createUser("Farid", 23);
 console.log("name" in person1)