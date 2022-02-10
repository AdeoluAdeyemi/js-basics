// Exercise 1- Array from Range

// const numbers = arrayFromRange(-10, -4);

// console.log(numbers);

// function arrayFromRange(min, max){
//     const array = [];

//     for (let i=min; i<=max; i++){
//         array.push(i);
//     }
//     return array;
// }

// Exercise 2- Includes

// Recreate the includes function

// const numbers = [1,2,3,4];

// console.log(includes(numbers, 3));

// function includes(array, searchElement){
//     return array.indexOf(searchElement) !== -1;
// }

// Exercise 3- Except

// const numbers = [1,2,3,4,1,1];

// const output = except(numbers, [1,2]);

// console.log(output);

// function except(array, excluded){
//    const newArray = [];

//     for (let element of array) 
//         if (!excluded.includes(element))
//            newArray.push(element);           
//     return newArray;
// }


// Exercise 4- Moving an Element

// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 1, -1);

// console.log(output);

// function move(array, index, offset){
//     const output = [...array];

//     const cursorElement = array[index];

//     if ((offset > array.length && offset > 0) || (index + offset < 0)){
//         console.error('Invalid Offset');
//         return;
//     }
//     else{
//         if(offset > 0){
//             output.splice(index,1);
//             output.splice(offset, 0, cursorElement);
//         }
//         if (offset < 0){
//             output.splice(index,1);
//             output.splice(index+offset, 0, cursorElement);
//         }

//     }
//     return output;
// }


// Exercise 5- Count Occurrences
//const numbers = [1, 2, 3, 4, 3, 1, 1];

//const count = countOccurrences(numbers, -1);

//console.log(count);

function countOccurrences(array, searchElement) {
    // let count = 0;

    // if (array.indexOf(searchElement) !== -1){
    //     // count += 1;
    //     for (let element of array){
    //         if(element === searchElement){
    //             count += 1;
    //         }
    //     }
    //     return count;
    // }
    // return 0;

     return array.reduce(function(accumulator,currentValue){
         let occurrence = 0;
         occurrence = (currentValue === searchElement) ? 1 : 0;
         return accumulator + occurrence;
     },0);
}

// Exercise 6- Get Max

const numbers = [1,2,3,4,5];

const max = getMax(numbers);

console.log(max);

function getMax(array){
    if (array.length === 0) return undefined;
        // let max = 0;

        // for (let element of array)
        //     max = (element > max) ? element : max;

        // return max;

        return array.reduce((accumulator, current) =>  current > accumulator ? current : accumulator);
}

// Exercise 7- Movies

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
];

// All the movies in 2018 with rating > 4
// Sort them by their rating 
// Descending order
// Pick their title

const filteredResult = movies
.filter(movie => movie.year === 2018 && movie.rating > 4)
.sort((a,b) => a.rating - b.rating)
.reverse()
.map(movie => movie.title);

console.log(filteredResult);