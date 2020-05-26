import 'reflect-metadata';

// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note', 'hi there', plane);

// const note = Reflect.getMetadata('note', plane);
// console.log(note);

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('123')
  fly(): void {
    console.log('fan spinning');
  }
}

function markFunction(secretInfo: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane): void {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}
