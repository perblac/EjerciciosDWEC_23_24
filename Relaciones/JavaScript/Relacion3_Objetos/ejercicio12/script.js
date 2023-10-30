/**
 * @author Ruben Perblac
 * 
 * @description Una función que toma un objeto (a) y un número (b) como argumentos. Multiplica todos los
 *  valores de 'a' por 'b'. Devuelve el objeto resultante. Comprueba que los valores de las claves de (a)
 *  son números para realizar la multiplicación.
 */

/**
 * Función que multiplica los valores de un objeto por un número.
 * No modifica el objeto inicial, sino que devuelve un objeto nuevo.
 * 
 * @param {Object} a Objeto inicial cuyos valores serán multiplicados por b (si son números)
 * @param {Number} b Número por el que multiplicar los valores del objeto a
 * @returns {Object} Objeto nuevo con los valores multiplicados.
 */
const multiplicaPorNumero = (a, b) =>
  // Devolvemos un objeto creado con las entradas multiplicadas
  Object.fromEntries(
    // Usamos map() en un array de las entradas del objeto
    Object.entries(a).map((num) =>
      // Si el valor(num[1]) de la clave(num[0]) es un número, lo multiplicamos por b
      // y si no lo dejamos como está.
      typeof num[1] == "number" ? [num[0], num[1] * b] : [num[0], num[1]]
    )
  );

/* Versión que modifica el objeto inicial
function multiplicaPorNumero(a,b) {
    for (let clave in a) {
        if (typeof a[clave] == 'number') {
            a[clave] *= b;
        }
    }
    return a;
}
*/

// ejemplo:
const objeto = { a: 1, b: 2, c: 'perro'};
const numero = 5;
console.log(multiplicaPorNumero(objeto, numero)); // { a: 5, b: 10, c: 'perro' }