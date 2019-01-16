// 1
// Basic Algorithm Scripting: Convert Celsius to Fahrenheit
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius. 
// Use the variable fahrenheit already defined and assign it the Fahrenheit 
// temperature equivalent to the given Celsius temperature.
// Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

// function convertToF(celsius) {
//     var fahrenheit = celsius*9/5+32;
//     return fahrenheit;
// }
// console.log(convertToF(20));

// convertToF(0) should return a number
// convertToF(-30) should return a value of -22
// convertToF(-10) should return a value of 14
// convertToF(0) should return a value of 32
// convertToF(20) should return a value of 68
// convertToF(30) should return a value of 86

// 2
// Basic Algorithm Scripting: Reverse a String
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

// function reverseString(str) {
//     var arr = str.split("");
//     arr.reverse()
//     str = arr.join("");
//     return str;
// }
  
// console.log(reverseString("Greetings from Earth"));


// reverseString("hello") should return a string.
// reverseString("hello") should become "olleh".
// reverseString("Howdy") should become "ydwoH".
// reverseString("Greetings from Earth") should return "htraE morf sgniteerG".

// 3
// Basic Algorithm Scripting: Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

// function factorialize(num) {
//     if (num <= 1) {
//         return 1};
//     return (num)*factorialize(num-1);
    
// }
  
// console.log (factorialize(1));

// factorialize(5) should return a number.
// factorialize(5) should return 120.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.
// factorialize(0) should return 1.


// 4

// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// function findLongestWordLength(str) {
//     var arr = str.split(" ");
//     var maxim = 0;
//     for (i=0;i<+arr.length;i++) {
//         if(arr[i].length>maxim) {
//             maxim =arr[i].length;
//         }
//     }
//     return maxim;
// }

  
// console.log (findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));


// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWordLength("May the force be with you") should return 5.
// findLongestWordLength("Google do a barrel roll") should return 6.
// findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.

// 5
// Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// function confirmEnding(str, target) {
//   return str.slice(-target.length) == target;
// }

// console.log (confirmEnding("Abstraction", "action"));

// confirmEnding("Bastian", "n") should return true.
// confirmEnding("Congratulation", "on") should return true.
// confirmEnding("Connor", "n") should return false.
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
// confirmEnding("He has to give me a new name", "name") should return true.
// confirmEnding("Open sesame", "same") should return true.
// confirmEnding("Open sesame", "pen") should return false.
// confirmEnding("Open sesame", "game") should return false.
// confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
// confirmEnding("Abstraction", "action") should return true.
// Do not use the built-in method .endsWith() to solve the challenge.

// 6
// Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// function repeatStringNumTimes(str, num) {
//     newStr = "";
//     if (num>0) {
//         for (i = 0;i<num;i++){
//         newStr+=str;
//         } 
//         return newStr;
//     }
//     return "''";
// }
  
// console.log(repeatStringNumTimes("abc", 4));

// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".
// The built-in repeat()-method should not be used

// 7
// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// function truncateString(str, num) {
//     if (str.lenght>=num) {
//     return str;
//     } else {
//             var arr = str.split("");
//             arr.splice(num,arr.length-num,"...");
//             return arr.join("");
//         }
// }
  
// console.log(truncateString("Absolutely Longer", 2));

// truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
// truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-", 1) should return "A...".
// truncateString("Absolutely Longer", 2) should return "Ab...".

// 8
// Basic Algorithm Scripting: Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

// function booWho(bool) {
//    if (bool === true ||bool === false) {
//        return true;
//    }
//     return false;
// }
  
// console.log(booWho(null));
// console.log(booWho(true));
// console.log(booWho(false) );
// console.log(booWho([1, 2, 3]) );
// console.log(booWho([].slice));
// console.log(booWho({ "a": 1 }));
// console.log(booWho(1));
// console.log(booWho(NaN));
// console.log(booWho("a"));
// console.log(booWho("true"));
// console.log(booWho("false"));


// booWho(true) should return true.
// booWho(false) should return true.
// booWho([1, 2, 3]) should return false.
// booWho([].slice) should return false.
// booWho({ "a": 1 }) should return false.
// booWho(1) should return false.
// booWho(NaN) should return false.
// booWho("a") should return false.
// booWho("true") should return false.
// booWho("false") should return false.

// 9
// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// function titleCase(str) {
//     var str1 =str.toLowerCase();
//     var arr =str1.split(" ");
//     for (var i=0; i<arr.length;i++) {
        
//         arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
//         }
//     return arr.join(" ");
// }
  
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
// titleCase("sHoRt AnD sToUt") should return Short And Stout.
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.

// 10
// Basic Algorithm Scripting: Slice and Splice
// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

// function frankenSplice(arr1, arr2, n) {
//     for (var i=0; i<arr1.length;i++) {
//         arr2.splice(n+i,0,arr1.slice(i,i+1).join("")); 
//     }
//     return arr2
// }
  
// console.log(frankenSplice([1, 2], ["a", "b"], 1));



// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
// frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
// All elements from the first array should be added to the second array in their original order.
// The first array should remain the same after the function runs.
// The second array should remain the same after the function runs.

// 11
// Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

// function bouncer(arr) {
//     for (var i=0;i<arr.length;i++){
//         if (!arr[i]) {
//             arr.splice(i,1);
//         } 
//     }
//     return arr;
// }
  
// console.log(bouncer([7, "ate", "", false, 0, null ,undefined, 9]));

// 12
// Basic Algorithm Scripting: Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// function getIndexToIns(arr, num) {
//     arr.sort (function (a,b) {
//         return a-b;
//     })
//     for (var i=0;arr[i]<num;i++) {
        
//     }
//     return i;

// }
  
// console.log (getIndexToIns([3, 60], 3));

// getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
// getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
// getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
// getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
// getIndexToIns([40, 60], 50) should return 1.
// getIndexToIns([40, 60], 50) should return a number.
// getIndexToIns([3, 10, 5], 3) should return 0.
// getIndexToIns([3, 10, 5], 3) should return a number.
// getIndexToIns([5, 3, 20, 3], 5) should return 2.
// getIndexToIns([5, 3, 20, 3], 5) should return a number.
// getIndexToIns([2, 20, 10], 19) should return 2.
// getIndexToIns([2, 20, 10], 19) should return a number.
// getIndexToIns([2, 5, 10], 15) should return 3.
// getIndexToIns([2, 5, 10], 15) should return a number.
// getIndexToIns([], 1) should return 0.
// getIndexToIns([], 1) should return a number.

// 13
// Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// function mutation(arr) {
//     var sum=0;
//     arr[0]=arr[0].toLowerCase();
//     arr[1]=arr[1].toLowerCase();
//     for (var i=0;i<arr[1].length;i++) {
//         if (arr[0].indexOf(arr[1].charAt(i))>=0) {
//             sum++;
//         }
//     }
    
//     if (i == sum) {
//         return true;
//     }

//     return false;
// }
  
// console.log (mutation(["hello", "neo"]));
// console.log (mutation(["hello", "Hello"]));
// console.log (mutation(["Mary", "Army"]));
// console.log (mutation(["Mary", "Aarmy"]));
// console.log (mutation(["floor", "for"]));
// console.log (mutation(["voodoo", "no"]));


// mutation(["hello", "hey"]) should return false.
// mutation(["hello", "Hello"]) should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Alien", "line"]) should return true.
// mutation(["floor", "for"]) should return true.
// mutation(["hello", "neo"]) should return false.
// mutation(["voodoo", "no"]) should return false.
