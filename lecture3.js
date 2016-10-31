/**
 * Created by Jerry on 2016-10-22.
 */

/*  1. Explain the following code:
 *
 *  function func() {
 *      console.log(this);
 *  }
 *
 *  func(); // what is the output? Why?

 func() returns the window object....when a function is called it's supposed to reference the object and in this case we don't have an object 
 and thus by default returns window object
 *
 *  var obj = {
 *      func: func // what is the second func here?
 *  };
 *
 *  obj.func(); //what is the output? try to explain why.
 * Returns an empty object...Object {}
 *  obj.func.bind(window)(); // what is the output? why?
 *Returns the window object
 *  obj.func.bind(this)();  // what is the output? why?
 *returns the window object
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 */
Object {name: 'ashwin', age:40 };
/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */
function capitalize(str){
return str.charAt(0).toUpperCase() + str.substr(1);
 }
function titleCase(str) {
  return str.toLowerCase().split(' ').map(capitalize).join(' ');
}

var str = 'hi, welcome to mest'

titleCase(str);
/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *
 */

/*
 * 4. what is localStorage and sessionStorge under window object? What is the
 *    difference
 */
 HTML local storage provides two objects for storing data on the client:

window.localStorage - stores data with no expiration date
window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)
