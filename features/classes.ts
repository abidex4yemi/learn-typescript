class Vehicle {
  protected drive(): void {
    console.log('Drive drive');
  }

  public honk(): void {
    console.log('Beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('Vroom...');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

// const vehicle: Vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car: Car = new Car();
car.startDrivingProcess();
car.honk();
