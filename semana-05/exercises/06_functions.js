console.log('EXERCISE 6: FUNCTIONS');
//Aclaración: el código comentado dentro de cada ejercicio sería la respuesta para ese ejercicio en concreto.//

/*Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('Exercise 6.a:');
function sum(numberRound1, numberRound2) {
    var number1 = prompt('Enter the number you want to sum up:');
    var number2 = prompt('Enter the number you want to sum up:');
    number1 = Number(number1);
    number2 = Number(number2);
    var total = number1 + number2;
    total = Number(total);
    if(total !== Number(total)) {
        alert('Enter a valid numeric value.');
        return alert('The total is: ' + total);
    }else{
        if (total % 1 == 0) {
            return alert('The total is: ' + total);
        }else{
            totalRound = Math.round(total);
            alert('Only whole numbers can be entered');
            return alert('The total is: ' + totalRound);
        }
    }
    /*var total = number1 + number2;
    return total;*/
}
sum()
//console.log(sum(8, 10));//
console.log('Done.');

/*A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log('Exercise 6.b:');
/*var mathOperation = prompt('Enter the number you want to sum up:');
mathOperationRound = Math.round(mathOperation);
mathOperationRound = Number(mathOperationRound);
if (mathOperationRound !== Number(mathOperationRound)) {
    alert('Enter a valid numeric value.');
    alert('The total is: ' + sum(mathOperationRound));
}else{
    alert('The total is: ' + sum(mathOperationRound));
}*/
console.log('Done.');

/*Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/

console.log('Exercise 6.c:');
function validateInteger(num) {
    if (num % 1 == 0){
        return true;
    }
}
console.log(validateInteger(8));

/*A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya
decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

console.log('Exercise 6.d:');
/*if (mathOperationRound % 1 == 0) {
        alert('The total is: ' + sum(mathOperationRound));
    }else{
        alert('Only whole numbers can be entered');
        alert('The total is: ' + sum(mathOperationRound));
    }*/
console.log('Done.');

/*Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
que todo siga funcionando igual.*/

console.log('Exercise 6.e:');
/*function userController(sum){
    var numControlled = sum(numberRound1, numberRound2);
    if (numControlled % 1 == 0) {
        return alert('The total is: ' + total);
    }else{
        alert('Only whole numbers can be entered');
        return alert('The total is: ' + total);
    }
}*/
console.log('Done.');