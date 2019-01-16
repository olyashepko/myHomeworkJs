// Задача 2 ()
// function fibonacci(n) {
//    if (n>1) {
//        return fibonacci(n-1) + fibonacci(n-2);
//     }
//    else {
//        return n;
//     }
// } 
// console.log (fibonacci(35));

// Задача 2
// var n = 77, fib, x = 0, y = 1;
// for (var i = 1; i < n; i++) {
//     fib= x + y;
//     x = y;
//     y =fib;
// }
// console.log (fib); 

// Задача 3
// var num1 = +prompt ("Введите число"), num2 = +prompt ("Введите еще одно число");
// alert (num1 + num2);

// Задача 4, 5
function getRandomInteger (min, max) {
    return Math.floor(Math.random() * (max - min))+min;
}
var randNum1 = getRandomInteger ();
// var randNum2 = getRandomInteger (-8,10);  
console.log (randNum1);
// console.log (randNum2);