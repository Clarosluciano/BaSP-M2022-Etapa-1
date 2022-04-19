console.log('EXERCISE 4: IF ELSE');

/*Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que
0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

console.log('Exercise 4.a:');
var randomNum = Math.random();
if (randomNum >= 0.5) {
    alert('Greater than 0,5');
}else{
    alert('Lower than 0,5');
}
console.log('Done.');

/*Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
1- “Bebe” si la edad es menor a 2 años;
2- “Niño” si la edad es entre 2 y 12 años;
3- “Adolescente” entre 13 y 19 años;
4- “Joven” entre 20 y 30 años;
5- “Adulto” entre 31 y 60 años;
6- “Adulto mayor” entre 61 y 75 años;
7- “Anciano” si es mayor a 75 años.*/

console.log('Exercise 4.b:');
var age = prompt('Enter your age:');
age = parseInt(age);
if (age <= 2) {
    alert('You are a baby');
}else if (age >= 3 && age <= 12) {
    alert('You are a child');
}else if (age >= 13 && age <= 19) {
    alert('You are a teenager');
}else if (age >= 20 && age <= 30) {
    alert('You are a young adult');
}else if (age >= 31 && age <= 60) {
    alert('You are an adult');
}else if (age >= 61 && age <= 75) {
    alert('You are an old man');
}else if (age >= 76 && age <= 100) {
    alert('You are a greybeard');
}else{
    alert('Enter a valid value');
}
console.log('Done.');