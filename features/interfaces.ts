interface Vehicle {
  name: string;
  year: Date;
  isBroken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: new Date(),
  isBroken: true,
  summary(): string {
    return `
    Name: ${this.name}
    Year: ${this.year}
    Broken?: ${this.isBroken}
  `;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
