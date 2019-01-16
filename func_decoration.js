// 1 
// Логирующий декоратор (1 аргумент) 
// Создайте декоратор makeLogging(f, log), который берет функцию f и массив log. 
// Он должен возвращать обёртку вокруг f, которая при каждом вызове записывает («логирует») аргументы в log, 
// а затем передает вызов в f. 
// В этой задаче можно считать, что у функции f ровно один аргумент. 
// Работать должно так: 


// function work(a) { 
// return a;
// } 

// function makeLogging(f, log) { 
//     return function () {
//        log.push (arguments[0]);
//        f.apply(this,arguments);
//     }
// } 

// var log = []; 
// work = makeLogging(work, log); 

// work(1); // 1, добавлено в log 
// work(5); // 5, добавлено в log 

// for (var i = 0; i < log.length; i++) { 
// console.log( 'Лог:' + log[i] ); }// "Лог:1", затем "Лог:5" 
// 

// 2 
// Логирующий декоратор (много аргументов) 
// Создайте декоратор makeLogging(func, log), для функции func возвращающий обёртку, 
// которая при каждом вызове добавляет её аргументы в массив log. 
// Условие аналогично задаче Логирующий декоратор (1 аргумент), 
// но допускается func с любым набором аргументов. 
// Работать должно так: 

// function work(a, b) { 
// console.log(a + b); // work - произвольная функция 
// } 

// function makeLogging(f, log) { 
//     return function () {
//     for (i=0;i<arguments.length;i++) {
//         log.push(arguments[i]);
//     }
//     f.apply(this,arguments);
//     }

// } 

// var log = []; 
// work = makeLogging(work, log); 

// work(1, 2); // 3 
// work(4, 5); // 9 

// console.log( 'Лог:' + log.join() ); // Лог:1,2,4,5 

// 3 
// Кеширующий декоратор 
// Создайте декоратор makeCaching(f), который берет функцию f и возвращает обертку, которая кеширует её результаты. 
// В этой задаче функция f имеет только один аргумент, и он является числом. 
// При первом вызове обертки с определенным значением аргумента – она вызывает f и запоминает её результат. 
// При втором и последующих вызовах с тем же значением аргумента – возвращается сохраненное значение результата. 
// Должно работать так: 

// function f(x) { 
// return Math.random() * x; // random для удобства тестирования 
// } 


// function makeCaching(f) { 
//     var cache = {};
//     return function (number) {
//         if (!(number in cache)) {
//             return cache[number] = f.apply(this,arguments);
//         }
//         return cache[number];

//     } 
// } 

// f = makeCaching(f); 

// var a, b; 

// a = f(1); 
// b = f(1); 
// console.log( a == b ); // true (значение закешировано) 

// b = f(2); 
// console.log( a == b ); // false, другой аргумент => другое значение


// 1 
// Вывод чисел каждые 100 мс 
// Напишите функцию printNumbersInterval(), 
// которая последовательно выводит в консоль числа от 1 до 20, 
// с интервалом между числами 100 мс. То есть, весь вывод должен занимать 2000 мс, 
// в течение которых каждые 100 мс в консоли появляется очередное число. 
// P.S. Функция должна использовать setInterval. 


// function printNumbersInterval () {
//     i=1;
//     var timerId = setInterval (function () {console.log(i);i++;},100)
    
//     setTimeout (function () {
//         clearInterval(timerId);
//         }, 2100)
// }

// printNumbersInterval();




// 2 
// Вывод чисел каждые 100 мс, через setTimeout 
// Сделайте то же самое, что в задаче Вывод чисел каждые 100 мс, 
// но с использованием рекурсивного setTimeout вместо setInterval.
// var i = 1;
// var timerID = setTimeout (function func () {
//     console.log (i); 
//     if (i<20) {timerID = setTimeout (func, 100)};
//     i++;
// }, 100);


 
// 7 
// Функция-задержка 
// Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f, задерживающую вызов на ms миллисекунд. 
// Например: 

function f(x) { 
console.log( x ); 
} 

function delay (f, ms) {
    
    return function () {
        var savedThis = this;
        var savedArguments = arguments;
            setTimeout (function () { f.apply(savedThis, savedArguments)
            } 
        , ms);
    }
}

var f1000 = delay(f, 1000); 
var f1500 = delay(f, 1500); 

f1000("тест"); // выведет "тест" через 1000 миллисекунд 
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
// Упрощённо можно сказать, что delay возвращает "задержанный на ms" вариант f. 
// В примере выше у функции только один аргумент, но delay должна быть универсальной: передавать любое количество аргументов и контекст this.