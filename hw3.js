// Домашняя работа № 3
// Задача 1
// var startNumber = 1, multiplier = 2, number, quantity = 10;
// for (var i = 1; i < quantity; i++) {
//     number = startNumber * multiplier;
//     console.log(number);
//     startNumber = number;
// }

// Задача 2
// var n, lastNumber = 10, sum = 0;
// n = lastNumber;
// for (var i = 1; i <= lastNumber; i++){
//     sum = i + sum;
//     }
// console.log (sum);

// Задача 3
// var i, n, lastNumber = 5, multiplicationResult = 1;
// n = lastNumber;
// for (i = 1; i < n; i++) {
//     if (i % 2 == 0) {
//         multiplicationResult = i * multiplicationResult; 
//     } else {
//         continue;}

// }
// console.log (multiplicationResult);

// Задача 4
// var i = 1, number = 5042, quantity;
// while (true) {
//     if (number/10 > 1) {
//         i++;
//         number = number/10;
//     } else {
//         break;
//     }
// }
// quantity = i;
// console.log (quantity);

// Задача 5
// var a = +prompt ("Введите порядковый номер дня недели");
// switch (a) {
//     case 1: 
//         alert("Понедельник");
//         break;
//     case 2: 
//         alert("Вторник");
//         break;
//     case 3: 
//         alert("Среда");
//         break;
//     case 4: 
//         alert("Четверг");
//         break;
//     case 5: 
//         alert("Пятница");
//         break;
//     case 6: 
//         alert("Суббота");
//         break;
//     case 7: 
//         alert("Воскресенье");
//         break;
//     default: 
//         alert("Ошибка");
// }

// Задача 6
// var a = prompt ("Введите станцию")
// switch (a) {
//     case "a":
//     case "A":
//         alert ("OK, A");
//         break;
//     case "b":
//     case "B":
//         alert ("OK, B");
//         break;
//     case "c":
//     case "C":
//         alert ("OK, C");
//         break;
//     case "d":
//     case "D":
//         alert ("OK, D");
//         break;
//     default:
//         alert ("ошибка");
// }

// Задача 7
// var a = prompt ("Введите операцию +, -, * либо /"), number1 = +prompt ("Введите первое число"), number2 = +prompt ("Введите второе число");
// switch (a) {
//     case "+":
//     alert (number1+number2);
//     break;
//     case "-":
//     alert (number1-number2);
//     break;
//     case "*":
//     alert (number1*number2);
//     break;
//     case "/":
//     alert (number1/number2);
//     break;
//     default:
//     alert ("Ошибка!")
// }