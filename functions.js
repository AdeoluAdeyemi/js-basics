// Exercise 1- Sum of Arguments

// sum(1,2,3,4) => 10
// Test with an array => Array.isArray()

const total = sum([1,2,3,4]);

console.log(total);

function sum(...items){
    
    if(items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((accumulator, currentValue)=> accumulator + currentValue);
}


// Exercise 2- Area of Circle

const circle = {
    r: 2,
    get radius(){
        console.log(this.r);
    },
    set radius(value){
        this.r = value;
    },
    get area(){
        return Math.PI * this.r ** 2;
    }
};

console.log(circle.radius);
circle.radius = 10;
console.log(circle.radius);

console.log(circle.area);

// Exercise 3- Error Handling

const numbers = [1, 2, 3, 4, 3, 1, 1];

try{
    const count = countOccurrences('Hello', -1);
    
    console.log(count);
}
catch (e){
    alert(e);
    console.log(e.message);
}

function countOccurrences(array, searchElement) {
     if (!Array.isArray(array))
        throw new Error('Invalid array. Enter a valid array');

     return array.reduce(function(accumulator,currentValue){
         let occurrence = 0;
         occurrence = (currentValue === searchElement) ? 1 : 0;
         return accumulator + occurrence;
     },0);
}
