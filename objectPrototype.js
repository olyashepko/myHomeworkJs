// 3 
// Алгоритм для поиска 
// Есть объекты: 

// var head = { 
//     glasses: 1 

// }; 

// var table = { 
//     pen: 3, 
//     __proto__: head,
// }; 

// var bed = { 
//     sheet: 1, 
//     pillow: 2,
//     __proto__: table,

// }; 

// var pockets = { 
//     money: 2000,
//     __proto__: bed,
// }; 

// console.log(pockets.pen);
// console.log(bed.glasses);
// console.log(table.money);

// Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets -> bed -> table -> head. 
// То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.

// 2 
// Есть ли разница между вызовами? 
// Создадим новый объект, вот такой: 

// function Rabbit(name) { 
// this.name = name; 
// } 
// Rabbit.prototype.sayHi = function() { 
// return this.name; 
// }; 

// var rabbit = new Rabbit("Rabbit"); 
// // Одинаково ли сработают эти вызовы? 

// console.log(rabbit.sayHi()); 
// console.log(Rabbit.prototype.sayHi()); 
// console.log(Object.getPrototypeOf(rabbit).sayHi()); 
// console.log(rabbit.__proto__.sayHi());

// Задачи 
// 1 
// Добавить функциям defer 
// Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд. 
// После этого должен работать такой код: 

// function f() { 
// console.log( "привет" ); 
// } 

// Function.prototype.defer = function (ms) {
//     setTimeout (this,ms);
// } 

// f.defer(1000); // выведет "привет" через 1 секунду

// 1 
// Перепишите в виде класса 
// Есть класс CoffeeMachine, заданный в функциональном стиле. 
// Задача: переписать CoffeeMachine в виде класса с использованием прототипа. 
// Исходный код: 

// function CoffeeMachine(power) { 
//     this._power = power;
//     this._waterAmount = 0; 
    
// }

// CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200; 

// CoffeeMachine.prototype._getTimeToBoil = function () { 
// return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power; 
// } 

// CoffeeMachine.prototype.run = function() { 
// setTimeout(function() { 
// console.log ( 'Кофе готов!' ); 
// }, this._getTimeToBoil()); 
// }; 

// CoffeeMachine.prototype.setWaterAmount = function(amount) { 
// this._waterAmount = amount; 
// }; 

 

// var coffeeMachine = new CoffeeMachine(10000); 
// coffeeMachine.setWaterAmount(50); 
// coffeeMachine.run(); 
// P.S. При описании через прототипы локальные переменные недоступны методам, поэтому нужно будет переделать их в защищённые свойства. 



// 2 
// Хомяки с __proto__ 
// Вы – руководитель команды, которая разрабатывает игру, хомяковую ферму. Один из программистов получил задание создать класс «хомяк» (англ – "Hamster"). 
// Объекты-хомяки должны иметь массив food для хранения еды и метод found для добавления. 
// Ниже – его решение. При создании двух хомяков, если поел один – почему-то сытым становится и второй тоже. 
// В чём дело? Как поправить? 

// function Hamster() {
//     this.food = []; // чтобы не было общего живота
// } 

// Hamster.prototype.found = function(something) { 
// this.food.push(something); 
// }; 

// // Создаём двух хомяков и кормим первого 
// var speedy = new Hamster(); 
// var lazy = new Hamster(); 

// speedy.found("яблоко"); 
// speedy.found("орех"); 

// console.log ( speedy.food.length ); // 2 
// console.log ( lazy.food.length ); // 2 (!??)
 
// Задачи 
// 2 
// Добавить функциям defer с аргументами 
// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд. 

// Например, должно работать так: 

// function f(a, b) { 
// console.log( a + b ); 
// } 

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду. 
// То есть, должны корректно передаваться аргументы.

// function f(a,b) { 
//     console.log( a + b  ); 
//     } 
    
//     Function.prototype.defer = function (ms) {
//         var f = this;
//         return function () {
//             var args = arguments;
//             var context = this;
//             setTimeout (function () {f.apply(context,args)},ms);
//         }
        
//     } 
    
//     f.defer(1000)(1,2); 