class Hero {
  alter: string;
  edad: number;
  nombre: number;
  printNombre() {
    return this.alter + ' ' + this.nombre;
  }
}

// interface PersonajeThree {
//   nombre?: string;
//   hp?: number;
//   habilidades?: string[];
//   location?: string;
//   printNombre?: () => string;
// }

const ironman = new Hero();
// const spiderman: PersonajeThree = {}

// class HeroTwo {
//   public alter: string;
//   public edad: number;
//   public nombre: number;

//   constructor( alter: string) {
//     this.alter = alter;
//     console.log("Print");
//   }
// }

class PersonaNormal {
  constructor(public nombre: string, direccion: string) {}
}

class HeroTwo extends PersonaNormal {
  constructor(
    public alter: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, 'New York, USA');
  }
}

const ironmanTwo = new HeroTwo('Ironman', 10, 'Tony');
console.log(ironmanTwo);
