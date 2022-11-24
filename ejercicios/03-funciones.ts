function sumar(a: number, b: number): string {
  return (a + b).toString();
}

const resultado = sumar(2, 2);

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}

// const multiplicarResultado = multiplicar(10, 20);

// console.log(multiplicarResultado);

interface PersonajeTwo {
  nombre: string;
  pv: number;
  // mostrarHP: (a: number, b: string, c: boolean) => void;
  // mostrarHP: () => void;
  mostrarHP: () => void;
}

function curar(personaje: PersonajeTwo, puntos: number): void {
  personaje.pv += puntos;
  console.log(personaje);
  // return undefined;
}

const nuevoPersonaje: PersonajeTwo = {
  nombre: 'Zhongli',
  pv: 50,
  mostrarHP() {
    console.log('Puntos de vida: ', this.pv);
  },
};

curar(nuevoPersonaje, 10);

console.table(nuevoPersonaje);

nuevoPersonaje.mostrarHP();
