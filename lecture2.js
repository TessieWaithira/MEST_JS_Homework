/*
 * 1. explain the special meaning of the following special characters
 \0 the null character -has a numeric value of zero and can be used to represent the end of a string of characters,
 \n new line - signifies the end of a line and start of a new line
 \r carriage return - goes back to the start of the line
 \v vertical tab - used to create vertical movement
 \t - create a tab
 \backspace - remove character
 \f form feed - creates a form separator
 */ 
\
/*
 *  2.Please combine those two array together as one array by using concate:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']
 */
 var new_array = arr1.concat(arr2)
 new_array
 ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']
 */

 var new_array = arr1.concat(arr2,arr3)
 new_array
 ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

/*
 * 4. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.sort());
 *    console.log(arr);

 */
 ["Enoch", "Todd", "Yaw", "ashwin", "jerry", "lars", "mike"]
 //gives precedence to uppercase and sorts alphabetically

/*
 * 5. what is the result(output of following code):
 *    var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
[1, 2, 3, "apple", "black", "orange", "test"]
//sorts alphabetically giving precedence to the numbers
/*
 * 6. Please remove mike, jerry, adn Enoch from the following array by using slice
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 */
console.log(arr.slice(2,4));
["mike", "jerry"]

console.log(arr.slice(5,6));
["Enoch"]
/*
 * 7. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-3, -1));
 *    console.log(arr);
 */
["Yaw", "Enoch"]

/*
 * 8. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(2));
 *    console.log(arr);
 */
["mike", "jerry", "Yaw", "Enoch", "lars"]//slices the array from index 2
["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]//returns the original array

/*
 * 9. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-2));
 *    console.log(arr);
 */
["Enoch", "lars"]
["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]//returns the original array
/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 *
 *   and invoke the function expression to caluate the result of 256 + 532
 */
var x = function(num1, num2) {return num1 + num2};
var z = x(256, 532);
/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */
(function () {
    return "Hello! Am Tessie, and am awesome!";// I will invoke myself
})();

/*
 * 12. you have following objects:
 *     var person1 = {
 *          name: 'ashwin'
 *     };
 *
 *     var person2 = {
 *          name: 'lars'
 *     };
 *
 *    function namer() {
 *          return this.name;
 *    }
 *
 *    use bind function here to make namer() function to call 'ashwin'
 *    and lars
 */
var callAshwin = namer.bind(person1);
var callLars = namer.bind(person2);
/*
 * 12. you have following object:
 *     var number = {
 *          x: 22,
 *          y: 33
 *     };
 *
 *    var count = function() {
 *          console.log(this.x + this.y);
 *    }
 *  a. what is the result when we invoke count()?
 *  b. use bind on function expression to make this work.
 */
a. returns NaN
b. count.bind(number);
/*
 * 13. you have following objects:
 *     var person1 = {
 *          firstName: 'ashwin'
 *          lastName: 'Yaw'
 *     };
 *
 *     var person2 = {
 *          firstName: 'lars',
 *          lastName: 'Mike'
 *     };
 *
 *     function hello(greeting) {
 *          console.log(greeting + ' ' + this.firstName + '' + lastName);
 *    }
 *
 *  use call methods on function expression to make this work.
 */
hello.call(person1);
hello.call(person2);
/*
 * 14. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */
function capitalize(str){
return str.charAt(0).toUpperCase() + str.substr(1);
 }
function titleCase(str) {
  return str.toLowerCase().split(' ').map(capitalize).join(' ');
}

var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'

titleCase(str);