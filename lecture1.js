/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the best practise
 */

//var 1stCar = 'Doge';//name can't begin with a letter
var firstCar = 'Doge';
//var var = 'variable';//cannot use reserved javascript keywords
var myVar = 'variable';
//var first name = 'Jerry';//cannot contain whitespace
var firstName = 'Jerry';
//var Sch00lName = 'MEST';//use camelCase
var sch00lName = 'Mest'
//var totalnumber = 100;//use camelCase
vat totalNumber = 100

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
//var greeting  =  'It's nice to me you today!';Choose one implementation, either single or double quote, and use consistently
var greeting = "It's nice to meet you today!";
//var response = "Ashwin said, "Yes Sir!"";Choose one implementation, either single or double quote, and use consistently
var response = "Ashwin said, 'Yes Sir!'";


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */
Returns True
The == operator will compare for equality after doing any necessary type conversions.
The === operator will not do the conversion, so if two values are not the same type === will simply return false.
In the above, both are of the same type and left is equal to right thus true

/*
 * 4. Build a pizza object by using all three object creation method, it must have at least 4 properties
 */
 var pizza = {
 	type: 'Meat Eater';
 	topping: 'Cheese';
 	size: 'Large';
 	cost: '20';
 };


//object constructor function
function Pizza(type, topping, size, cost) {
	this.type = type; 
	this.topping = topping;
	this.size = size;
	this.cost = cost; 
} 
var pizza = new Pizza(‘Meat Eater’, ‘Cheese’, 'Large', 20);


//object.create
var pizza = Object()
pizza.type = 'Meat Eater';
pizza.topping = 'Cheese';
pizza.size = 'Large';
pizza.cost = '20';	




/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */

function Animal(name, no_of_legs) {
    this.name = name;
    this.no_of_legs = no_of_legs;
}

Animal.move = function(){
 	return 'The lion is moving';
 }

Animal.eat = function(){
 	return 'The sheep is eating';
 }

var lion = new Animal('lion','4');
var sheep = new Animal('sheep', '4');

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
function mySelect(n){
		if (n === 1) {
			return 'Kenkey';
		}
		else if(n === 2){
			return 'Jolof';
		}
		else {
			return 'Waakye';
		}
	}


function mySelect(n){
	switch(n){
		case 1:
		return 'Kenkey';
		break;
		case 2:
		return 'Jolof';
		break;
		case 3:
		return 'Waakye';
		default:
		return 'not on the menu';
		break;
	}
}	

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
for (var i = 0;i<studentScores.length;i++){
	if ( i > 1){
		console.log(studentScores[i]);
	}
}
/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
studentScores.forEach( function(i) {
 	if (i > 60) {
 		console.log(i);
 	}
 })

