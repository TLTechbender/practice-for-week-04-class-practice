// Your code here
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    introduce(){

        console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
    }


static introducePeople(people){
    if(!Array.isArray(people)){
        console.log("introducePeople only takes an array as an argument");
    }
  /*else if(!people instanceof Person){
        console.log("All items in array must be Person class instances");
    } /*else{
        return people.map(person=>person.introduce());
    }
}*/

else if ( people.find(person => person instanceof Person === false) !== undefined) {
      console.log("All items in array must be Person class instances.")
    } else {
      return people.map(person => person.introduce());
    }
  }

/* I can't exactly say why my own code is not working!!!!!
 * Guess I'll have to do much more studying and researching on javascript classes
*/

}

const person = new Person("kristen", "chauncey", 38);
const person2 = new Person("jeff", "granoff", 30);
console.log(Person.introducePeople("dog"));
console.log(Person.introducePeople(["dog", person]));
console.log(Person.introducePeople([person, person2]));

/* The spec file that comes with this exercise dosen't seem to be working*/
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
