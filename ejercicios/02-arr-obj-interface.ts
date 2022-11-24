// let habilidades: (boolean | string | number)[] = ['', ''];
let habilidades: string[] = ['', ''];

habilidades.push('hola');

// const personaje : any = {
//   nombre: 'Strider',
//   hp: 100,
//   habilidades: ['Bash', 'Counter', 'Healing']
// }

// personaje.location = 'Pueblo Paleta';

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  location?: string;
}

const personaje: Personaje = {
  nombre: 'Strider',
  hp: 100,
  habilidades: ['Bash', 'Counter', 'Healing'],
};

personaje.location = 'Pueblo Paleta';

console.table(personaje);
