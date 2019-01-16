// zadacha 1
// function f () {
//     console.log(this);
// }
// var user = {
//     g: f.bind("hello")
// }
// user.g();

// zadacha 2
// povtornyj bind ne pereopredelyaet context
// function f() {
//     console.log (this.name);
// }
// f = f.bind ({name:"Vasya"}).bind ({name:"Petya"});
// f();

// zadacha 3 
// "use strict";

// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }

// var user = {
//   login: 'Василий',
//   password: '12345',

//   loginOk: function() {
//     alert( this.login + ' вошёл в сайт' );
//   },

//   loginFail: function() {
//     alert( this.login + ': ошибка входа' );
//   },

//   checkPassword: function() {
//     ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
//   }
// };

// var vasya = user;
// user = null;
// vasya.checkPassword();


// 4 
// Использование функции вопросов 
// Эта задача – усложнённый вариант задачи Использование функции вопросов. 
// В ней объект user изменён. 
// Теперь заменим две функции user.loginOk() и user.loginFail() на единый метод: 
// user.loginDone(true/false), 
// который нужно вызвать с true при верном ответе и с false – при неверном. 
// Код ниже делает это, соответствующий фрагмент выделен. 
// Сейчас он обладает важным недостатком: при записи в user другого значения объект 
// перестанет корректно работать, вы увидите это, запустив пример ниже (будет ошибка). 
// Как бы вы написали правильно? 
// Исправьте выделенный фрагмент, чтобы код заработал. 

// "use strict"; 

// function ask(question, answer, ok, fail) { 
// var result = prompt(question, ''); 
// if (result.toLowerCase() == answer.toLowerCase()) ok(); 
// else fail(); 
// } 

// var user = { 
// login: 'Василий', 
// password: '12345', 

// // метод для вызова из ask 
// loginDone: function(result) { 
// alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') ); 
// }, 

// checkPassword: function() { 

//     ask("Ваш пароль?", this.password, this.loginDone.bind(this,true),
//         this.loginDone.bind(this,false)); 

// }
// };

// var vasya = user; 
// user = null; 
// vasya.checkPassword(); 
// Изменения должны касаться только выделенного фрагмента. 

// Если возможно, предложите два решения, одно – с использованием bind, другое – без него. 
// Какое решение лучше?

// "use strict";

// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }

// var user = {
//   login: 'Василий',
//   password: '12345',

//   loginDone: function(result) {
//     alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
//   },

//   checkPassword: function() {
//     var self = this;
//     ask("Ваш пароль?", this.password,
//       function() {
//         self.loginDone(true);
//       },
//       function() {
//         self.loginDone(false);
//       }
//     );
//   }
// };

// user.checkPassword();

// zadacha 5 sum
// function sum(arr) {
//     return arr.reduce (function (a,b) {
//         return a+b;
//     });
// }
// console.log(sum([1,2,3]));

// function sumArgs() {
// arguments.reduce = [].reduce;
// return arguments.reduce (function (a,b){
//     return a+b;
// })
// }

// console.log (sumArgs(1,5,3,6));

function applyAll (func) {
    return func.apply(this,[].slice.call(arguments,1));
};
function sum() {
    return [].reduce.call(arguments, function(a, b) {
      return a + b;
    });
  };
  console.log( applyAll(sum, 1, 2, 3) );
  