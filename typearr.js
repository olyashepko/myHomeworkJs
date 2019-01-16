// // Превратите объект в JSON 
// // Превратите объект leader из примера ниже в JSON: 

// var leader = { 
// name: "Василий Иванович", 
// age: 35 
// }; 
// var str = JSON.stringify(leader);

// // После этого прочитайте получившуюся строку обратно в объект.

// var obj = JSON.parse(str);
// console.log(str);
// console.log (obj);

// Задачи 
// Полиморфная функция formatDate 
// Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy. 
// Ее первый аргумент должен содержать дату в одном из видов: 
// Как объект Date. 
// Как строку, например yyyy-mm-dd или другую в стандартном формате даты. 
// Как число секунд с 01.01.1970. 
// Как массив [гггг, мм, дд], месяц начинается с нуля 
// Для этого вам понадобится определить тип данных аргумента и, 
// при необходимости, преобразовать входные данные в нужный формат. 
// Пример работы: 
// function formatDate(date) { /* ваш код */ } 
// console.log( formatDate('2011-10-02') ); // 02.10.11 
// console.log( formatDate(1234567890) ); // 14.02.09 
// console.log( formatDate([2014, 0, 1]) ); // 01.01.14 
// console.log( formatDate(new Date(2014, 0, 1)) ); // 01.01.14

function formatDate (date) {
    if (typeof date == "string" ) {
        date =date.slice(2);
        var arr =date.split("-");
        arr.reverse();
        return arr.join(".")
    };
    if (typeof date == "number") {
        var a =new Date(date*1000);
        var dat = a.getDate();
        if (dat<10) {
            dat="0"+dat;
        }
        var month = a.getMonth()+1;
        if (month<10) {
            month="0"+month;
        }
        var year = a.getFullYear()+"";
        year = year.slice(-2);
        return dat+"."+month+"."+year;
        
    }
    if (Array.isArray(date)) {
        date.reverse();
        if (date[0]<10) {
            date[0] = "0"+date[0];
        }
        if ((date[1]+1)<10) {
            date[1] = "0"+(date[1]+1);
        } else {
            date[1] =date[1]+1;
        }
        var str = date.join(".")
        str = str.slice(0,-4)+str.slice(-2);
        return str;
    }
    if (date.getDate()) {
        var a =new Date(date);
        var dat = a.getDate();
        if (dat<10) {
            dat="0"+dat;
        }
        var month = a.getMonth()+1;
        if (month<10) {
            month="0"+month;
        }
        var year = a.getFullYear()+"";
        year = year.slice(-2);
        return dat+"."+month+"."+year;
    }
}
console.log(formatDate('2011-10-02'));
console.log(formatDate(1234567890));
console.log(formatDate([2014, 0, 1]) );
console.log(formatDate(new Date(2014, 0, 1)) );
