function queTipoSoy<T>(argumento: T) {
  return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1, 3, 4, 5, 6, 7, 8, 9, 0]);

let soyTipado = queTipoSoy<number>(100);
