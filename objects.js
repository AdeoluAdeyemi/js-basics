
// Factory Function
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw'); 
        }
    }
}

const circle1 = createCircle(1);
console.log(circle1);


// Constructor Function

function Circle(radius){
    this.radius = radius,
    this.draw = function (){
        console.log('draw');
    };
}

const circle = new Circle(3);
console.log(circle);


// Exercise 1- Address Object
// street
// city
// zipcode

// showAddress(address) - Displays properties and all their values

// const address = ('6 Unity Avenue','Ota','114422');

// function showAddress(street,city,zipcode){
//     return {
//         street,
//         city,
//         zipcode,
//         displayAddress(){
//             //for ()
//         }
//     };
// }

const address = {
    street: '6 Unity Avenue',
    city: 'Ota',
    zipCode: 112242
};

function showAddress(address){
    for (detail in address){
        console.log(detail, address[detail]);
    }

    // for (detail of Object.entries(address)){
    //     console.log(detail);
    // }
}

showAddress(address);

// Exercise 2- Factory and Constructor Functions

// Exercise 1- Address Object
// street
// city
// zipcode

// showAddress(address) - Displays properties and all their values

function createAddress(street,city,zipcode){
    return {
        street,
        city,
        zipcode
    };
}
const address1 = createAddress('6 Unity Avenue','Ota',112242);
console.log(address1);


function Address(street, city, zipcode){
    this.street = street,
    this.city = city,
    this.zipcode = zipcode
}

const address2 = new Address('6 Unity Avenue','Ota',112242);
const address3 = new Address('6 Unity Avenue','Ota',112242);
console.log(address2);


// Exercise 3- Object Equality
// Check if all properties are the equal.

function areEqual(address1, address2){
   isPropertyEqual = true;
   for (address1Key in address1){
       for (address2Key in address2){
           return isPropertyEqual = (address1[address1Key] === address2[address2Key]);
       }
   }
}

console.log(areEqual(address2, address3));

// Check if all properties are referencing the same objects 
function areSame(address1, address2){
   return address2 === address3;
}

console.log(areSame(address2, address3));


// Exercise 4- Blog Post Object
// Blog post object with the following properties
// title
// body
// author
// views
// comments
//   (author, body)
// isLive

const post = {
    title: 'Launching Hotela',
    body: 'Introducing a smart hotel management system',
    author: 'Adeolu Adeyemi',
    views: '1000000',
    comments: {
        author: 'Tega Otojare',
        body: 'This is awesome!'
    },
    isLive: true
};

console.log(post);


// Exercise 5- Constructor Functions
// User is drafting a post, but not yet published.

function Post(title,body,author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

const post2 = new Post('Hotel Raises Series A funding', 'More details','Adeolu Adeyemi');
console.log (post2)


// Exercise 6- Price Range Object
// Properties of each price range

// price < 9
// price < 99
// price < 999
// price < 9999

const priceRanges = [
    {symbol: '$', tooltip: 'Inexpensive', minPrice: 1, maxPrice: 9},
    {symbol: '$$', tooltip: 'Moderate', minPrice: 10, maxPrice: 99},
    {symbol: '$$$', tooltip: 'Pricey', minPrice: 100, maxPrice: 999},
    {symbol: '$$$$', tooltip: 'Expensive', minPrice: 1000, maxPrice: 9999}
];