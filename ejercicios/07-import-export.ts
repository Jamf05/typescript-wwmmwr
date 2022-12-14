import { Producto, calculaISV } from './06-desestructuracion-fn';

const carritoCompras: Producto[] = [
  {
    descripcion: 'Telefono 1',
    precio: 100,
  },
  {
    descripcion: 'iPad Air',
    precio: 150,
  },
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);
