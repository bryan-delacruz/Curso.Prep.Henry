// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = [];
  let arreglo = [];
  for (let key in objeto) {
    arreglo.push(key);
    arreglo.push(objeto[key]);
    matriz.push(arreglo);
    arreglo = [];
  }
  return matriz;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  let objeto = {};
  let array = [];

  for (let index = 0; index < string.length; index++) {
    let esRepetida = false;
    let letra = string.charAt(index);
    let sumaLetra = 0;

    for (let i = 0; index < array.length; index++) {
      if (array[i] === letra) {
        esRepetida = true;
        break;
      }
    }

    if (esRepetida) {
      break;
    } else {
      for (let y = 0; y < string.length; y++) {
        if (letra === string.charAt(y)) {
          sumaLetra++;
        }
      }
      objeto[letra] = sumaLetra;
      array.push(letra);
    }
  }
  return objeto;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var letras_mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
  let texto = "";
  for (i = 0; i < s.length; i++) {
    if (letras_mayusculas.indexOf(s.charAt(i), 0) !== -1) {
      texto = texto + s.charAt(i);
    }
  }
  for (i = 0; i < s.length; i++) {
    if (letras_mayusculas.indexOf(s.charAt(i), 0) === -1) {
      texto = texto + s.charAt(i);
    }
  }
  return texto;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  cadenaPalabras = str.split(" ");

  for (let index = 0; index < cadenaPalabras.length; index++) {
    let palabra = "";
    for (let i = cadenaPalabras[index].length - 1; i >= 0; i--) {
      palabra = palabra + cadenaPalabras[index].charAt(i);
    }
    cadenaPalabras[index] = palabra;
  }
  frase = "";
  for (let index = 0; index < cadenaPalabras.length; index++) {
    if (index === cadenaPalabras.length - 1) {
      frase = frase + cadenaPalabras[index];
    } else {
      frase = frase + cadenaPalabras[index] + " ";
    }
  }
  return frase;
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroTexto = numero.toString();

  let numeroTextoInvertido = "";

  for (let index = numeroTexto.length - 1; index >= 0; index--) {
    numeroTextoInvertido = numeroTextoInvertido + numeroTexto.charAt(index);
  }

  if (numeroTexto === numeroTextoInvertido) {
    return "Es capicua";
  } else return "No es capicua";
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let letras = "abc";
  cadenaNueva = "";
  for (let index = 0; index < cadena.length; index++) {
    if (letras.indexOf(cadena.charAt(index)) == -1) {
      cadenaNueva = cadenaNueva + cadena.charAt(index);
    }
  }
  return cadenaNueva;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  for (let index = 0; index < arr.length; index++) {
    let menor = arr[index].length;
    let menorTexto = arr[index];
    for (let y = index; y < arr.length; y++) {
      if (arr[y].length < menor) {
        arr[index] = arr[y];
        arr[y] = menorTexto;
      }
    }
  }
  return arr;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  interseccion = [];
  for (let index = 0; index < arreglo1.length; index++) {
    let numero = arreglo1[index];
    for (let y = 0; y < arreglo2.length; y++) {
      if (numero === arreglo2[y]) {
        interseccion.push(numero);
        break;
      }
    }
  }
  return interseccion;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
