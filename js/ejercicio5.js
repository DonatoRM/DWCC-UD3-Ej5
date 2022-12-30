/**
 * Función que nos devuelve un número <code>cantidad</code> de enteros en un intervalo cerrado entre los valores <code>inicio</code> y <code>fin</code>
 * @param {Number} cantidad Número entero positivo que indica el número de valores que poseerá la lista
 * @param {Number} inicio Valor inferior entero mínimo que poseería la lista
 * @param {Number} fin Valor superior entero máximo que poseería la lista
 * @returns Devuelve una lista de número enteros
 */
function generarListaAleatoria(cantidad, inicio, fin) {
  let lista = [];
  if (!isNaN(cantidad)) {
    cantidad = Number(cantidad);
    if (Number.isInteger(cantidad)) {
      cantidad = parseInt(cantidad);
      if (cantidad >= 1) {
        if (!isNaN(inicio)) {
          inicio = Number(inicio);
          if (Number.isInteger(inicio)) {
            inicio = parseInt(inicio);
            if (inicio >= 0) {
              if (!isNaN(fin)) {
                fin = Number(fin);
                if (Number.isInteger(fin)) {
                  fin = parseInt(fin);
                  if (fin >= inicio + cantidad - 1) {
                    let contador = 0;
                    while (contador < cantidad) {
                      let valido = true;
                      let nuevoValor = Math.round(Math.random() * (fin - inicio + 1) + inicio);
                      lista.forEach((valor) => {
                        if (valor == nuevoValor) {
                          valido = false;
                        }
                      });
                      if (valido) {
                        lista.push(nuevoValor);
                        contador++;
                      }
                    }
                    lista.sort((a, b) => a - b);
                  } else {
                    lista = -9; // Error si fin es menor que inicio+cantidad-1
                  }
                } else {
                  lista = -8; // Error si fin no es un valor entero
                }
              } else {
                lista = -7; // Error si fin no es un valor numérico
              }
            } else {
              lista = -6; // Error si inicio es menor que 0
            }
          } else {
            lista = -5; // Error inicio no es valor entero
          }
        } else {
          lista = -4; // Error si inicio no es un valor numérico
        }
      } else {
        lista = -3; // Error si cantidad es menor que 1
      }
    } else {
      lista = -2; // Error si cantidad no es un valor entero;
    }
  } else {
    lista = -1; // Error cuando cantidad no es un valor numérico
  }
  return lista;
}
let resultado;
const expresionRegular = /^[1234]{1}$/;
let opcionMenu = window.prompt("1.- Euromillón\n2.- Primitiva\n3.- Bonoloto\n4.- El Gordo\n\nElija una opción");
if (expresionRegular.test(opcionMenu)) {
  opcionMenu = parseInt(opcionMenu, 10);
  let numeros;
  let reintegro;
  let estrellas;
  switch (opcionMenu) {
    case 1:
      numeros = generarListaAleatoria(5, 1, 50);
      estrellas = generarListaAleatoria(2, 1, 12);
      resultado = "EUROMILLÓN\nNúmeros: ";
      numeros.forEach((valor) => {
        resultado += valor + " ";
      });
      resultado += "\nEstrellas: ";
      estrellas.forEach((estrella) => {
        resultado += estrella + " ";
      });
      break;
    case 2:
      numeros = generarListaAleatoria(6, 1, 49);
      reintegro = generarListaAleatoria(1, 0, 9);
      resultado = "PRIMITIVA\nNúmeros: ";
      numeros.forEach((valor) => {
        resultado += valor + " ";
      });
      resultado += "\nReintegro: ";
      reintegro.forEach((valor) => {
        resultado += valor + " ";
      });
      break;
    case 3:
      numeros = generarListaAleatoria(6, 1, 49);
      resultado = "BONOLOTO\nNúmeros: ";
      numeros.forEach((valor) => {
        resultado += valor + " ";
      });
      break;
    case 4:
      numeros = generarListaAleatoria(5, 1, 54);
      reintegro = generarListaAleatoria(1, 0, 9);
      resultado = "EL GORDO\nNúmeros: ";
      numeros.forEach((valor) => {
        resultado += valor + " ";
      });
      resultado += "\nReintegro: ";
      reintegro.forEach((valor) => {
        resultado += valor + " ";
      });
      break;
  }
} else {
  resultado = "La opción seleccionada no es válida";
}
alert(resultado);
