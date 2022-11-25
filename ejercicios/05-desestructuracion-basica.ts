interface Reproductor {
  volumen: number;
  segundo: number;
  track: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  age: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  track: 'Mess',
  detalles: {
    age: 2015,
    autor: 'Juanes',
  },
};

const autor = 'Anonimo';

const {
  volumen: vol,
  segundo,
  track,
  detalles: { autor: autorDetalle },
} = reproductor;

// const { volumen, segundo, track, detalles } = reproductor;
// const { autor } = detalles;

// console.log('El volumen actual es de: ', vol);
// console.log('El seugndo actual es de: ', segundo);
// console.log('El canción actual es de: ', track);
// console.log('El autor actual es de: ', autorDetalle);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [goku, , trunks] = dbz;

console.log('Personaje 1;', goku);
console.log('Personaje 2;', dbz[1]);
console.log('Personaje 3;', trunks);
