//This is my first Javascript Code!
console.log('Hello World');

//Primitive Data Types
let name = 'Adeolu';
let age = 29;
let isApproved = true;
let firstName = undefined;
let selectedBrand = null;


// Reference Data Types


//Object
let person = {
    name: 'Adeolu',
    age: 29
};

console.log(person.name);

console.log(person['age']);


//Array
let selectedColor = ['red','green','blue',1];
console.log(selectedColor[0]);
console.log(selectedColor[1]);
console.log(selectedColor.length);


//Function
//Performing a task;
function greet(name,lastName){
    console.log('Hello '+ name+ ' of ' + lastName);
}

//Calculates a value;
function square(number){
    return number*number;
}

console.log(square(2));


// Javascript Operators
let x = 2;
let y = 5;

console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(x*y);
console.log(x%y);
console.log(x**y);