console.log('EXERCISE 3: ARRAYS');

/*Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

console.log('Exercise 3.a:');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4]);
console.log(months[10]);

/*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log('Exercise 3.b:');
console.log(months.sort());

/*Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

console.log('Exercise 3.c:');
var fruits = ['apple', 'orange', 'watermelon']; 
fruits.unshift('lemon');
fruits.push('lime');
console.log(fruits);

/*Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

console.log('Exercise 3.d:');
var vegetables = ['carrot', 'tomatoe', 'potato'];
vegetables.shift();
vegetables.pop();
console.log(vegetables);

/*Invertir el orden del array (utilizar reverse).*/

console.log('Exercise 3.e:');
fruits.reverse();
console.log(fruits);

/*Unir todos los elementos del array en un único string donde cada mes este separado
por un guión - (utilizar join).*/

console.log('Exercise 3.f:');
console.log(months.join(' - '));

/*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

console.log('Exercise 3.g:');
var newMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var mayToNov = newMonths.slice(4, 11);
console.log(mayToNov);