/*
part 4 Js fundamentals

Arrays 
-- ordered collection of items (string, numbers, etc.)
------------------------------------------------------------------
- Creating an Array -

example syntax:
const cars = ["BMW", "Volvo", "Porsche"];

const array_name = [item1 , item2, ...];

note:
spaces and line breaks are not important

valid: 
const cars = [
    "BMW",
    "Volvo",
    "Porsche"
];

valid: 
const cars = [];
cars[0] = "BWM";
cars[1] = "Volvo";
cars[2] = "Porsche";
---------------------------------------------------------------
- Using the new keyword in Js -

--array declaration--
const cars = new Array("Saab", "Volvo", "BMW");
--example of display--
document.getElementById("demo").innerHTML = cars

the two examples above works the same, no need to use new Array()

for simplicity, readability and execution speed, use the array literal method.
-->  const array_name = [item1, item2, ...]; <-- this is array literal method

note:
array literals create array objects
------------------------------------------------------------------
- Accessing Array Elements -

you can acess array elements by refering to the index number 

const cars = ["Saab" , "Volvo", "BMW"];
let car = cars[0];
console.log(`${car}`);

- Changing an Array Element - 

const cars = ["Saab" , "Volvo", "BMW"];
cars[0] = "butt";
console.log(`${cars[0]}`);
------------------------------------------------------------------
- Converting an Array to a String - 

toString() method converts an array to a string array

const fruits = ["pineapple", "banana", "apple"];
document.getElementById("demo").innerHTML = fruits.toString();
------------------------------------------------------------------
- Access the full Array - 

can be accessed by referrign to the array name

const fruits = ["pineapple", "banana", "apple"];
document.getElementById("demo").innerHTML = fruits

------------------------------------------------------------------
- Arrays are objects -

arrays are special type of objects. The typeof operator in Js returns "object"
for arrays. But Js arrays are best described as arrays

arrays use numbers to access its "elements". In this example, person[0] returns "john"

const person = ["john", "Doe", 46];

Objects use names to access its "memebers". person.firstName returns John:

const person = {firstName: "John", lastName: "Doe", age: 46};
------------------------------------------------------------------
- Array elements can be objects - 

Js variables can be objects. Arrays are special kinds of objects.
Because of this, you can have variables of different types in the same Array.
You can have objects in an Array.
 You can have functions in an Array. 
 You can have arrays in an array

myArray[0] = Date.now;
myArray[1] = myFunction;
my Array[2] = myCars

------------------------------------------------------------------
- Array Properties and Methods - 

Js arrays have built-in array properties and methods:

cars.length // returns the number of elements
cars.sort() // Sorts the array

- The length property - 
The lenght property returns the length of an array (number of elements)

example:
const cars = ["papaya", "banana", "yes"];
let length = cars.length; // stores the value of 3 as there are 3 elements in the cars array

note:
The length property is always one more than the highest array index
------------------------------------------------------------------
- Accessing the last array element - 
const fruits = ["apples", "bananan", "mango"];
let fruit = fruits[fruits.length - 1];
------------------------------------------------------------------

- Looping Array Elements - 
const fruits = ["bananan", "apple", "pear"];

let fLen = fruits.length;

let text  = "<ul>";
for(let i = 0; i < fLen; i++){
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;

- you can also use the Array.forEach() function: -
const fruits = ["bananan", "apple", "pear"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value){
    text += "<li>" + value + "</li>";
}
document.getElementById("demo").innerHTML = text;
------------------------------------------------------------------

- Adding Array Elements -

the easiest way to add a new element to an array is using the push() method:

const fruits = ["bannana", "apple", "oear"];
fruits.push("Lemon"); // adds a new element 

new element can also be added to an array using the length property::

const fruits = ["bannana", "pearl", "apples"];
fruits[fruits.length] = "lemon" //Adds "Lemon" to fruits

Warning:
Adding elements with high indexes can create undefined "holes" in an array:

example:
const fruits = ["bannana", "pearl", "apples"];
fruits[6] = "Lemon"; // creates an undefined holes in fruits
-------------------------------------------------------------------------------

- Associative Arrays - 
Many programming languages support arrays with named indexes.
Arrays with named indexes are called associative arrays (or hashes)
JS does not support arrays with named indexes
in Js, arrays always use numbered indexes

example:
const person = [];
peron[0] = "jpjn";
person[1] = "doe";
person[2] = 46;
perons.length; // will retur 3
person[0]; //return "jpjn"

Warning:
if you used named indexes, Js will redefine the array to an object
After that, some array methods and properties will produce incorect results

example:
const person = [];
peron["firstname"] = "jpjn";
person["LastName"] = "doe";
person["age"] = 46;
perons.length; // will retur 0
person[0]; //return undefined
----------------------------------------------------------------------------------

- Difference between Arrays and Objects - 
Js arrays use numbered indexes
Js objects use named indexes

When to Use arrays. When to use Obects.
- Js does not support associative arrays
-You should use objects when you want the element names to be strings (text)
- You should use arrays when you want the element names to be numbers
--------------------------------------------------------------------------------------

- JS new Array() -

const points = new Array();
const points = [];
Both create a new empty array

const points = new Array(40,21,10,1);
const points = [40, 21,10,1];
both create a new array containing 6 numbers

common error
const points = [40]; <-- create an array with one element
is not the same as
const points = new Array(40); <-- create an array with 40 undefined elements 
--------------------------------------------------------------------------------------

- How to Recognize an Array - 

solutions:
Array.isArray():
const fruits = ["Banna", "oragnge", "apple"];
document.getElementById("demo").innerHTML = Array.isArray(fruits);

solution2:
instanceof operator

const fruits = ["Banna", "oragnge", "apple"];
document.getElementById("demo").innerHTML = fruits instanceof Array;
*/

const fruits = ["bananan", "apple", "pear"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value){
    text += "<li>" + value + "</li>";
}

document.getElementById("demo").innerHTML = text;


