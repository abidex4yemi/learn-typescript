const carMakers: (string | number)[] = ['Toyota', 'Chevy', 'Ford'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Typed array helps with typed inference
const newCar = carMakers[0];
const myCar = carMakers.pop();
const anotherCake = carMakers.push('Picanto');

// prevent incompatible value
//carMakers.push(300)

// helps with autocompletion when using map() method
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2010-12-9');
importantDates.push('yemi');
