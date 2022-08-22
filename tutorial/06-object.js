/*
## Objects #6

1. create car object
2. add make, model, year, colors (array), hybrid (boolean) keys
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods
*/

const car = {
  make: 'Mitsubishi',
  model: 'ASX', 
  year: 2021, 
  colors: ['blue', 'red', 'white', 'black'],
  hybrid: false,
  drive: function() {
    console.log(`Driving...`);
  }, 
  stop: function() {
    console.log(`Stopping...`);
  }
}

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();