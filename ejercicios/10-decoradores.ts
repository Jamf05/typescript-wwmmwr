function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty: 'new property';
    hello = 'override';
  };
}

@classDecorator
class MiSuperClase {
  public propiedad: string = 'ABC123';
  print() {
    console.log('Hola Mundo');
  }
}

const clase = new MiSuperClase();

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase);
