class ArrayOfAnything<T> {
  constructor(public collections: T[]) {}

  get(index: number): T {
    return this.collections[index];
  }
}

const something = new ArrayOfAnything(['Y', 'e', 'm', 'i']);

console.log(something.get(2));

const printAnyThing = <T>(arr: T[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

printAnyThing<string>(['A', 'B', 'C', 'D']);

// Generic constraint
class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface PrintAble {
  print(): void;
}

// using type constraint
// <T extends PrintAble> Limits the type we can pass to generics
function printHousesOrCar<T extends PrintAble>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCar<Car>([new Car(), new Car()]);
printHousesOrCar<House>([new House(), new House()]);
