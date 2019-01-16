
// Задача 3
// var salaries = {
//     "Vasya": 100,
//     "Petya":300,
//     "Dasha":250
// };
// function sumSalaries (obj) {
//     var summa=0;
//     for (var sum in salaries) {
//         var summa=salaries[sum]+summa;
        
//     } 
//     return summa;
// };
// var summ = sumSalaries (salaries);
// console.log (summ);

// Задача 4
var salaries = {
        "Vasya": 100,
        "Petya":300,
        "Dasha":250
    };
function getMax (obj) {
    for (key in salaries) {
        return salaries[key];
    }
}
console.log (getMax(salaries)); 