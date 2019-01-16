function makeBuffer() {
    var a="";
    function buffer (value) {
       a+=" "+value;
    };
    buffer.clear = function (){
        a=" ";
    }   
    return buffer;
}
var buffer = makeBuffer();
console.log(buffer("замыкание"));
console.log (buffer ("использовать"));
// console.log (buffer ("нужно"));

// var buffer2 = makeBuffer();
// console.log(buffer2(0));
// console.log(buffer2(1));
// console.log(buffer2(0));

buffer.clear();
console.log (buffer());

