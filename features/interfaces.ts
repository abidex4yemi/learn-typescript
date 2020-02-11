interface Report {
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

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  }
};

const printSummary = (item: Report): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
