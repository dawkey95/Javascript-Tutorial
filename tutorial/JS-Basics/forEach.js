//forEach
// DOES NOT return a new array

const people = [
	{ name: "Bob", age: 20, position: "developer" },
	{ name: "Peter", age: 25, position: "designer" },
	{ name: "Susan", age: 31, position: "boss" }
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
}

// people.forEach(showPerson);

people.forEach(function(item) {
  console.log(item.position.toUpperCase());
});