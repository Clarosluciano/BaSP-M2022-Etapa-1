console.log('EXERCISE 2: STRINGS');

/*Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase).*/

console.log('Exercise 2.a:');
var uppercaseStr = 'My characters are now in uppercase';
console.log(uppercaseStr.toUpperCase());

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/

console.log('Exercise 2.b:');
var greetings = 'Hello world';
var shortGreetings = greetings.substring(0, 5);
console.log(shortGreetings);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/

console.log('Exercise 2.c:');
var byebye = 'So this is the goodbye';
var shortByebye = byebye.substring(19, 22);
console.log(shortByebye);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +).*/

console.log('Exercise 2.d:');
var changingStr = 'ONSTRUCTORR';
var newChangingStr = 'c'.toUpperCase() + changingStr.toLowerCase();
console.log(newChangingStr.substring(0, 11));

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('Exercise 2.e:');
var emptySpace = 'The day of independence';
var newEmptySpace = emptySpace.indexOf(' ');
console.log(newEmptySpace);

/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +).*/

console.log('Exercise 2.f:');
var longStr = 'dangerous CONSTRUCTION';
var newLongStr = 'd'.toUpperCase() + longStr.substring(1, 9) + ' ' + longStr.substring(10, 11) + 'ONSTRUCTION'.toLowerCase();
console.log(newLongStr + ' since 199' + longStr.indexOf('gerous'));