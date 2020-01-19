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
