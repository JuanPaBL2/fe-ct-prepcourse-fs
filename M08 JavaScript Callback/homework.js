/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   let primeraLetra = nombre[0].toUpperCase();
   let restoDelNombre = nombre.slice(1); // Obtener el resto del nombre sin la primera letra
   return primeraLetra + restoDelNombre;
}


function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var ejecutar = cb();
   console.log(ejecutar);
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   let callback = cb(num1, num2);
   return callback;
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   let sumatoria = 0;
   for(let i = 0; i < arrayOfNumbers.length; i++){
      sumatoria += arrayOfNumbers[i];
   }
   var cbk = cb(sumatoria);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (let elementos of array){
      var ejecutar = cb(elementos);
      console.log(ejecutar);
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   let newArray = [];
   for(let elementos of array){
      var guardar = cb(elementos);
      newArray.push(guardar);
   }
   return newArray;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let arrayNew = [];
   for(let i = 0; i < arrayOfStrings.length; i++){
      var verificar = arrayOfStrings[i][0] === "a";
      if (verificar){
         arrayNew.push(arrayOfStrings[i]);
      }
   }
   return arrayNew;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
