//Vehicle
class Vehicle {
  constructor(public color: string) {}

  drive(): void {
    console.log('Drive drive');
  }

  public honk(): void {
    console.log('Beep');
  }
}

// Car
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log('Vroom...');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle: Vehicle = new Vehicle('Orange');
vehicle.drive();
vehicle.honk();
console.log(vehicle.color);

const car: Car = new Car(4, 'Red');
car.startDrivingProcess();
car.honk();
