export interface Producto {
  descripcion: string;
  precio: number;
}

const telefono: Producto = {
  descripcion: 'Nokia A1',
  precio: 150,
};

const tableta: Producto = {
  descripcion: 'iPad Air',
  precio: 350,
};

export function calculaISV(productos: Producto[]): [number, number] {
  let total = 0;
  // productos.forEach((producto, i, lista) => {})
  // productos.forEach((producto: Producto) => {
  //   total += producto.precio;
  // });
  productos.forEach(({ precio }) => {
    total += precio;
  });

  return [total, total * 0.15];
}

const articulos = [telefono, tableta];

const [total, isv] = calculaISV(articulos);

console.log('TOTAL: ', total);
console.log('ISV: ', isv);
