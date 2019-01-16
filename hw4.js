// Задача 1
// function max (a,b) {
//     if (a > b){
//         return a;
//     }
//     return b;
// }    
// console.log (max (5, 8));

// Задача 2
// function operate (a) {
//     if (a > -10 && a < 10) {
//         return a + 5;
//     }
//     return a -10;
// }
// console.log (operate (10));

// // Задача 3
// function defineSeason () {
// var numberMonth = +prompt ("введите номер месяца");

//     switch (numberMonth) { 
//         case 1:
//         case 2:
//         case 12:
//             alert ("It's winter");
//             break;
//         case 3:
//         case 4:
//         case 5:
//             alert ("it's spring");
//             break;
//         case 6:
//         case 7:
//         case 8:
//             alert ("It's summer");
//             break;
//         case 9:
//         case 10:
//         case 11:
//             alert ("It's autumn");
//             break;
//         default:
//             alert ("There's no sucn month");
//     }
// };
// defineSeason ();

// Задача 4
// function choose () {
//     var num1 = +prompt("Введите первое число");
//     var num2 = +prompt("Введите второе число");
//     if (num1 !== 10 && num2 !==10 && num1 % 2 == 0) {
//         alert (num1 + num2);
//     } else {
//         alert (num1 * num2);
//     }
// }
// choose ();

// Задача 5
// function maxnum () {
//     var num1 = +prompt("Введите первое число");
//     var num2 = +prompt("Введите второе число");
//     var num3 = +prompt("Введите третье число"); 
//     if (num1 > num2 && num1 > num3) {
//         alert("Максимальное число " + num1);
//     } else if (num2 >num1 && num2 > num3) {
//         alert("Максимальное число " + num2);
//     } else {
//         alert("Максимальное число " + num3);
//     }
// }
// maxnum ();

// Задача 6
// function drawRectangle() {
// var k=+prompt ("Введите число строк"), row="";
// for (var i = 1; i <= k; i++) {
//     row = row + "\n"+"0 0 0 0 0";
    
// }
// alert (row);
// }
// drawRectangle ();

// Задача 7
// function displaySequence() {
// var  k=1001;
// for (var i=0; k<=1025; i++) {
//     console.log(k);
//     k=k+3;
//   }
// }
// displaySequence ();

// Задача 8
// function displaySequence2 () {
//   var k = 100
//   for (var i = 0; k >= 2; i++) {
//     console.log (k);
//     k = k-4;
//   }
// }
// displaySequence2 ();

// Задача 9
// function divide () {
//   var n = 1000, num = 0;
// for (var i = 0; n > 50; i++) {
//   n = n/2;
// }
// return i;
// }
// var num;
// num = divide ();
// console.log (num);