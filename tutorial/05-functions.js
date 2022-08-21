/*
## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters
4. create 3 vars "order1","order2","order3"
5. call calculateResult, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression
*/


//Standard Function
function calculateTotal (subTotal, tax) {
	let sum = subTotal + tax
	return sum
}

//Function Expression
const calculateTotal = function (subTotal, tax) {
  let sum = subTotal + tax;
  return sum;
}

let order1 = calculateTotal(60, 14);
let order2 = calculateTotal(43, 2);
let order3 = calculateTotal(24, 6);

console.log(`The sum of order 1 is: $${order1}`);
console.log(`The sum of order 2 is: $${order2}`);
console.log(`The sum of order 3 is: $${order3}`);
