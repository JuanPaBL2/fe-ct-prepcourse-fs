/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let lista = [];

   for(let clave in objeto){
      lista.push([clave, objeto[clave]]);
   }
   return lista;
}


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var frequency = {};

  // Recorremos el string
  for (var i = 0; i < string.length; i++) {
    var letra = string[i].toLowerCase(); // Convertimos la letra a minúscula para hacer la cuenta insensible a mayúscula
    if (frequency[letra] === undefined) {  // Verificamos si la letra ya está en el objeto de frecuencia
      frequency[letra] = 1; // Si no está, la inicializamos en 1
    } else {
      frequency[letra]++; // Si ya está, incrementamos la cuenta
    }
  }

  // Ordenamos las claves alfabéticamente
  var sortedKeys = Object.keys(frequency).sort();

  // Creamos un nuevo objeto con las claves ordenadas y sus valores correspondientes
  var sortedFrequency = {};
  for (var j = 0; j < sortedKeys.length; j++) {
    var key = sortedKeys[j];
    sortedFrequency[key] = frequency[key];
  }

  return sortedFrequency;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayusculas = "";
   let minusculas = "";

   for (let i = 0; i < string.length; i++) {
       if (string[i] === string[i].toUpperCase()) {
           mayusculas += string[i];
       } else {
           minusculas += string[i];
       }
   }

   return mayusculas + minusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(' '); // Separar por espacios para obtener un array de palabras
   var palabrasInvertidas = palabras.map(function(palabra) {
       return palabra.split('').reverse().join(''); // Invertir cada palabra
   });
   var nuevaFrase = palabrasInvertidas.join(' '); // Unir las palabras invertidas con espacios
   return nuevaFrase;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let Cadenota = numero.toString();
   let CadenotaInvertida = Cadenota.split('').reverse().join('');

   if (Cadenota === CadenotaInvertida) {
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}
  
  
function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   
   //separo los elementos en varias partes y los meto en un array
   let lista = string.split('');


   for (let i = 0; i < lista.length; i++) {
      //si el elemento iterable de la lista es igual a "a" o es igual a "b" o es igual a "c"
      if (lista[i] === "a" || lista[i] === "b" || lista[i] === "c") {
         
         lista.splice(i, 1);
         // Reduce el índice para no omitir el siguiente elemento después de la eliminación
         i--;
      }
   }
   return lista.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(a,b){
      return a.length - b.length;
   });
   return arrayOfStrings;  
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let newArray = [];

   for (let elementos of array1){
      if (array2.includes(elementos)){
         newArray.push(elementos);
      }
   } 
   return newArray;
} 



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
