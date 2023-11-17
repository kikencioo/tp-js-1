// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function parOimpar(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " El numero es par");
  } else {
    console.log(numero + " El numero es impar");
  }
}

// 2- Crear una función que reciba dos números por parámetro
// e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function mayorOmenor(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(numero1 + " Es mayor que " + numero2);
  } else if (numero2 > numero1) {
    console.log(numero2 + " Es mayor que " + numero1);
  } else {
    console.log(" Ambos numeros son iguales");
  }
}

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiploDecinco(numero) {
  if (numero % 5 === 0) {
    console.log(numero + " El numero escrito es multiplo de cinco ");
  } else {
    console.log(numero + " El numero no es multiplo de cinco");
  }
}

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function imprimirNumero(numero) {
  for (let i = 0; i < numero; i++) {
    console.log(i);
  }
}

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function repetirPalabra(palabra, cantidad) {
  for (let i = 0; i < cantidad; i++) {
    console.log(palabra);
  }
}

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

/*const primerArray = [1, "Hola", true, 3.14];
imprimirArray(primerArray);*/

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo.

function imprimirArraySinQuintoElemento(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      // La quinta posición tiene el índice 4 (los índices comienzan desde 0)
      console.log(array[i]);
    }
  }
}

/*const otroArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirArraySinQuintoElemento(otroArray);*/

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function multiplicarArrayPorNumero(array, multiplicador) {
  for (let i = 0; i < array.length; i++) {
    const resultado = array[i] * multiplicador;
    console.log(resultado);
  }
}

/*const miArray = [1, 2, 3, 4, 5];
multiplicarArrayPorNumero(miArray, 3);*/
