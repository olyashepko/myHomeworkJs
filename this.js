function Calculator (str) {
    var arr = str.split("");
    this.a = +arr[0];
    this.b = +arr[2];
    this.operation = function () {
        
    }
}
var calc = new Calculator;
console.log (calc.a("3 + 7"));