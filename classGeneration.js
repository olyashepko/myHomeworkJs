// 3 
// Класс "часы" 
// Есть реализация часиков, оформленная в виде одной функции-конструктора. 
// У неё есть приватные свойства timer, template и метод render. 
// Задача: переписать часы на прототипах. Приватные свойства и методы сделать защищёнными. 


function Clock (parametry) { 
    this.template =parametry.template;
}

Clock.prototype._timer = function () {
    date = new Date();
    hour = date.getHours();
    if (hour <10) hour = "0" + hour;
    min = date.getMinutes();
    if (min <10) min = "0" + min;
    sec = date.getSeconds();
    if (sec<10) sec = "0" +sec;
    var res = this.template.replace(/h/,hour).replace(/m/,min).replace(/s/,sec)
    console.log(res);
}

Clock.prototype._start = function () {
    var self = this;
      this._timeid = setInterval (function () {
          self._timer()
        },1000);
}

Clock.prototype._stop = function () {
    var self = this
    setInterval (function () {
        clearInterval (self._timeid);
    },5000);
}
     
var clock = new Clock ({template: "h:m:s"});

// clock._start();
// clock._stop ();



// 4 
// Класс "расширенные часы" 
// Есть реализация часиков на прототипах. 
// Создайте класс, расширяющий её, добавляющий поддержку параметра precision, 
// который будет задавать частоту тика в setInterval. 
// Значение по умолчанию: 1000. 

// Для этого класс Clock надо унаследовать. 
// Исходный класс Clock менять нельзя. 
// Пусть конструктор потомка вызывает конструктор родителя. 
// Это позволит избежать проблем при расширении Clock новыми опциями.

function ClockNew (parametry) {
    Clock.apply (this, arguments);
    this.interval = +parametry.interval;
}

ClockNew.prototype = Object.create (Clock.prototype);

ClockNew.prototype._start = function () {
    this._timer();
    var self = this;
      this._timeid = setInterval (function () {
          self._timer()
        },this.interval);
}

var clockUpdade = new ClockNew ({template: "h:m:s",interval: "1500"});
clockUpdade._start();
