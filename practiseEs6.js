// 1 
// Деструктурируйте массив 
// const array = ["13","Jack","Walker","Sincere@april.biz"]; 
// const [age,name,surname,email] = array;
// console.log (email);


// 2 
// Деструктурируйте первые 3 элемента массива, остальные получите с помощью spread оператора 
// const array = ["2","JackErvin","Howell","Shanna@melissa.tv","010-692-6593","anastasia.net"]; 
// const [number,initial,string,...rest] = array;
// console.log (rest);

// 3 
// Деструктурируйте массив, установите каждому элементу значение по умолчанию. 
// const array = [undefined,"Clementine","Bauch","Nathan@yesenia.net"]; 
// const [number = 5,name = "olya", surname = "shepko", email = "olhyf@gmail.com"] = array;
// console.log (number)

// 4 
// Деструктурируйте объект 
// const obj = { 
// "id": 1, 
// "name": "Leanne Graham", 
// "username": "Bret", 
// "email": "Sincere@april.biz" 
// }; 

// const {id,name,username,email} = obj;
// console.log(id);

// 5 
// Деструктурируйте объект, присвойте свойство объекта в переменную с другим именем 
// const obj = { 
// "id": 2, 
// "name": "Ervin Howell", 
// "username": "Antonette", 
// "email": "Shanna@melissa.tv" 
// }; 

// const {id,name,username:login,email} =obj;
// console.log(login);

// 6 
// Деструктурируйте первые 2 элемента объекта, остальные получите с помощью spread оператора 
// const obj = { 
// "id": 6, 
// "name": "Mrs. Dennis Schulist", 
// "username": "Leopoldo_Corkery", 
// "email": "Karley_Dach@jasper.info" 
// }; 

// const {id,name,...rest} = obj;
// console.log(rest);

// 7 
// Деструктурируйте объект(Я в вас верю) 
// const obj = { 
// "id": 5, 
// "name": "Chelsey Dietrich", 
// "username": "Kamren", 
// "email": "Lucio_Hettinger@annie.ca", 
// "address": { 
// "street": "Skiles Walks", 
// "suite": "Suite 351", 
// "city": "Roscoeview", 
// "zipcode": "33263", 
// "geo": { 
// "lat": "-31.8129", 
// "lng": "62.5342" 
// } 
// }, 
// "phone": "(254)954-1289", 
// "website": "demarco.info", 
// "company": { 
// "name": "Keebler LLC", 
// "catchPhrase": "User-centric fault-tolerant solution", 
// "bs": "revolutionize end-to-end systems" 
// } 
// }; 

// const {id,name,username,email, address:{street,suite,city,zipcode,geo:{lat,lng}},phone,website,company:{name: comName,catchPhrase,bs}}=obj;
// console.log(lng);

// 8 
// Напишите функцию которая деструктурирует объект user, и выводит информацию о пользователе. 
// (Функция имеет параметры по умолчанию, используйте строку-шаблон) 

// const obj = { 
// "id": 5, 
// "name": "Chelsey Dietrich", 
// "username": "Kamren", 
// "email": "Lucio_Hettinger@annie.ca" 
// }; 

// function getInfo({id = "0",name = "anonymos",username = "unknown",email = "unknown"} = {}) { 
//     return (`
//     Hello dear ${name}
//     id: ${id},
//     username: ${username},
//     email: ${email}
//     `);
// } ;

// console.log(getInfo(obj)); 
// console.log(getInfo()); 
/* Output: with parameters 
Hello dear Chelsey Dietrich, 
id: 5, 
username: Kamren, 
email: Lucio_Hettinger@annie.ca 

Output: without parameters 
Hello dear anonymous, 
id: 0, 
username: unknown, 
email: unknown 
*/ 

// 9 
// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов: 
// Используйте метод reduce, spread оператор 

// function sum(...spread){ 
    
    
    
//     const result = spread.reduce ((sum,current) => 
//         sum+current
//     ,0)
//     return console.log(result);
// } 

// sum(); 
// sum(1); 
// sum(1, 2); 
// sum(1, 2, 3); 
// (sum(1, 2, 3, 4));



// // 10 
// const arr = [5,6,7,3,4]; 
// console.log(Math.min.apply(Math, arr)); 

// console.log (Math.min(...arr));

// Напишите аналогичный вызов метода без использования метода apply, и применением spread оператора 

// 11 
// Перепишите цикл через map 
// Код ниже получает из массива строк новый массив, содержащий их длины: 

const arr = ["Есть", "жизнь", "на", "Марсе"]; 

const arrLength = []; 


for (var i = 0; i < arr.length; i++) { 
arrLength[i] = arr[i].length; 
} 

console.log( arrLength ); // 4,5,2,5 
// Перепишите выделенный участок: уберите цикл, используйте вместо него метод map, 
// метод map должен принимать стрелочную функцию, исправить объявления переменных(уберите var) 


// 12 
// Массив частичных сумм 
// На входе массив чисел, например: arr = [1,2,3,4,5]. 
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм. 
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, 
// в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно. 
// То есть: 
// для arr = [ 1, 2, 3, 4, 5 ] 
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ] 
// Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2]. 
// Функция не должна модифицировать входной массив. 
// В решении используйте метод arr.reduce. 
// В решение используйте стрелочные функции, обэявления переменных с помощью const/let 

// 13 
// Получите массив положительных чисел.(В решение используйте стрелочные функции) 
// const arr = [1,
 
// -1, 2, -2, 3]; 


// 14 
// Отсортируйте массив в обратном порядке.(В решение используйте стрелочные функции) 
// const arr = [1,5,3,6,2,7,12,24,8,9]; 

// 15 
// Перепишите данный декоратор с помощью стрелочных функций. Исправьте объявления переменных 
// function defer(f, ms) { 
// return function() { 
// var args = arguments; 
// var ctx = this; 
// setTimeout(function() { 
// return f.apply(ctx, args); 
// }, ms); 
// } 
// } 
// function sayHi(who) { 
// console.log('Привет, ' + who); 
// } 
// 
// var sayHiDeferred = defer(sayHi, 2000); 
// sayHiDeferred("Вася"); 

// 16 
// Вызов user.checkPassword() в коде ниже должен, при помощи ask, 
// спрашивать пароль и вызывать loginOk/loginFail в зависимости от правильности ответа. 
// Однако, его вызов приводит к ошибке. Почему? 
// Исправьте двумя способами 

// "use strict"; 
// 
// function ask(question, answer, ok, fail) { 
// const result = prompt(question, ''); 
// if (result.toLowerCase() == answer.toLowerCase()) ok(); 
// else fail(); 
// } 
// 
// const user = { 
// login: 'Василий', 
// password: '12345', 
// 
// loginOk: function() { 
// alert( this.login + ' вошёл в сайт' ); 
// }, 
// 
// loginFail: function() { 
// alert( this.login + ': ошибка входа' ); 
// }, 
// 
// checkPassword: function() { 
// ask("Ваш пароль?", this.password, this.loginOk, this.loginFail); 
// } 
// }; 
// 
// user.checkPassword();