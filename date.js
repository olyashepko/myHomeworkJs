// задача 4
// function getDateAgo(date,days) {
//     date.setDate(date.getDate()-days);
//     console.log(date)
    
// }
// var d = new Date (2015,0,2,7);
// getDateAgo(d,1);


// задача 5 
// function getLastDayOfMonth (year,month) {
//     var d = new Date (year,month+1,0,7);
//     console.log (d.getDate()); 
//     }
    
// getLastDayOfMonth(2012,1);


//Задача 6
// function getSecondsToday() {
//     var d =new Date();
//     d.setHours(0,0,0,0);
//     var d1 =new Date();
//     return (d1-d)/1000;
// }
// console.log(getSecondsToday());

//Задача 7
// function getSecondsToTomorrow() {
//     var d= new Date();
//     var d1 =new Date();
//     d1.setDate(d1.getDate()+1);
//     d1.setHours(0,0,0,0);
//     return (d1-d)/1000;
// }
// console.log(getSecondsToTomorrow());

//Задача 8
// function formatDate (year,month,date) {
//     var d=new Date(year,month,date);
//     if (month<9) {
//     console.log (d.getDate()+".0"+(d.getMonth()+1)+"."+d.getFullYear());
//     } else {
//         console.log (d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear());
//     }
// }
// formatDate(2014,9,30);

//Задача 9
// function formatDate (year,month,date) {
//     var datas = new Date(year,month,date); 
//     var delta = (new Date() - date)/1000;
//     if (delta<1) {
//         return "только что"
//     } 
//     if (delta<60) {
//         return delta+"секyнд назад";
//     }
//     if (delta<3600) {
//         return delta/60+"минут назад";
//     }
   
//     var datas = ["0"+datas.getDate(),".","0"+(datas.getMonth()+1),".",datas.getFullYear()," ","0"+datas.getHours(), ":","0"+ datas.getMinutes()]
    
//     console.log (datas.join(""));
// }
// formatDate(2018,11,4);
