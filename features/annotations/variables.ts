// Primitive types => example type annotation

let apples: number = 50;
apples = 48;

let speed: string = 'fast';
speed = 'slow';

let hasValue: boolean = true;

hasValue = false;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// Composite type => example type annotation

// built in objects
let now: Date = new Date();
console.log(now);

const colors: string[] = ['Red', 'Green', 'Blue'];
colors.push('Orange');

const myNumbers: number[] = [1, 2, 3, 4, 5, 6];

const myBooleans: boolean[] = [true, false, true];

// classes
class Car {}

const car: Car = new Car();

// object literal
const point: { x: number; y: number } = {
  x: 20,
  y: 45
};

// This will give type error
// point.x = 'yemi';

// Function

const logNumber: (value: number) => void = (value: number) => {
  console.log(value);
};

// When to use annotations
// 1) Function that returns the "any" type

const json = '{"x": 20, "y": 30}';
const coordinate: { x: number; y: number } = JSON.parse(json);
console.log(coordinate); // {x: 20, y: 30}

//2) When we declare variable on one line and assigned value to it later
let words = ['Red', 'Green', 'Blue'];
let foundWord = false;

words.forEach(word => {
  if (word === 'Blue') {
    foundWord = true;
  }
});

console.log(foundWord);

//3) When inference doesn't work
const numbers = [-10, -20, -5];

let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
