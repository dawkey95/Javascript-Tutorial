/*
## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name,age (15-25), status ('resident', 'tourist') keys
3. setup if else, condition where age must be bigger than 18 and status must be equal to 'resident'
4. test with both objects

*/

const person1 = {
name: 'Alex',
age: 21,
status: 'tourist'
};

const person2 = {
name: 'Les',
age: 18,
status: 'resident'
};

if(person1.age >= 18 && person1.status === 'resident') {
  console.log('This person is over 18 and a resident');
} else {
  console.log('This person is a tourist');
}


if(person2.age >= 18 && person2.status === 'resident') {
  console.log("This person is over 18 and a resident")
} else {
  console.log("This person is a tourist")
}