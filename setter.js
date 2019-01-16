// function Article () {
//     this.created = new Date();
//     Article.count++;
//     Article.date=this.created;
//     Article.showStats = function () {
//         console.log ("Vsego:"+this.count+", Poslednyya:"+Article.date);
//     }
//     }
// Article.count = 0;
// Article.date = (0,0,0);
// new Article();
// new Article();
// Article.showStats();


// zadacha 3
function Calculator (str) {
    var arr = str.split(" ");
    this.a = +arr[0];
    this.b = +arr[2];
    this.operation = arr[1];

    this.sum = function () {
        return this.a+this.b;
        }
}
var calc = new Calculator("3 + 7");
console.log(calc.sum());

// function calc (str) {
//     var arr = str.split(" ");
//     a = +arr[0];
//     b = +arr[2];
    

//     if (arr[1] == "+") {
        
//             return this.a+this.b;
        
//     }
// }

// console.log(calc("3 + 7"));

