//Pasar un array de strings numeros a array de numeros enteros

const stringArr = ["1", "2", "3"];
const fruits = ["Manzana", "Banana", "Fresa"];

const intArr = stringArr.map(Number);

console.log(intArr); // [1, 2, 3]

//Acceder  al elemento en última posición del array

let lastPositionElement = stringArr[stringArr.length - 1];
console.log(lastPositionElement);

//Recorrer un array

stringArr.forEach(function(elemento, indice) {
    console.log(elemento, indice)
})

//agregar un elemento al final del array y eliminar un elemento al final del arra

stringArr.push("ultimo");
console.log(stringArr);

stringArr.pop();
console.log(stringArr);

//Añadir y eliminar un elemento al principio del array

stringArr.unshift("primer elemento");
console.log(stringArr);

stringArr.shift();
console.log(stringArr);

//Encontrar el index de un elemento

let position = fruits.indexOf("Banana");
console.log(position);

//Eliminar un elemento por su posición

let deletedElement = stringArr.splice(0, 2);  //el primer argumento es la posición en que empieza a cortar
console.log(deletedElement);                    //el segundo cuantos corta