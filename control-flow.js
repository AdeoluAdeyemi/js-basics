let hour=19;

if (hour >=6 && hour < 12)
    console.log('Good morning!');
else if (hour >=12 && hour < 18)
    console.log('Good afternoon!');
else
    console.log('Good evening!');


// Exercise 1 - Maximum of two numbers

function calculate_maximum (number1, number2){
    return number1 > number2 ? number1 : number2;
}

console.log(calculate_maximum(40,19));


// Exercise 2 - Landscape or Portrait

console.log(isLandscape(1200, 2900));

function isLandscape (width, height){
    return (width > height);
}

// Exercise 3- FizzBuzz

// If input is divisible by 3 => Fizz
// If input is divisible by 5 => Buzz
// If input is divisible by 3 and 5 => FizzBuzz
// If input is not divisible 3 or 5 => input
// If input is not a number => 'Not a Number'


const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input){
    
   if (typeof(input) !== 'number')
      return(NaN);

   if ((input % 3 === 0) && (input % 5 === 0))
      return('FizzBuzz');

   if (input % 3 === 0) 
      return('Fizz');
         
   if (input % 5 === 0)
      return('Buzz');
   
   return(input);
   
}

//Exercise 4- Demerit Points

// Speed Limit = 70
// For speed at = 70 < 75 => Ok
// For every 5km above limit => 1 point
// More than 12 points => License Suspended
// Math.floor(1.3);

console.log(checkSpeed(150));

function checkSpeed(speed){

    const speedLimit = 70;
    const pointsPerFiveKm = 5;
    let points = 0;
    

    if (speed < speedLimit + pointsPerFiveKm){
        return 'Ok';
    }
    else{
        points = points + Math.floor((speed - speedLimit) / pointsPerFiveKm);
        return (points >= 12) ? 'License Suspended' : ('Points: ', points);
    }
    
    
}

// Exercise 5- Even and Odd Numbers

showNumbers(10);

function showNumbers(limit){
   for (let i=0; i<=10; i++){
       let numberType = (i % 2 === 0) ? 'EVEN' : 'ODD'; 
       console.log(i, numberType);
   } 
}


// Exercise 6- Count Truthy

const array = [0,1,2,3,null,undefined,'']

console.log(countTruthy(array));

function countTruthy(array){
   let count = 0;

   for (let value of array){
       if (value)
           count++;
   }
   return count;
}


//Exercise 7- String Properties

const movie = {
    title: 'Abefactoroye',
    releaseYear: 2018,
    rating: 4.5,
    director: 'Mike Bamiloye'
}

showProperties(movie);

function showProperties(obfactor){
   for (let key in obfactor){
       if (typeof obfactor[key] === 'string')
          console.log(key, obfactor[key]);
   }
}


//Exercise 8- Sum of Multiples of 3 and 5

console.log(sum(10));

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

function sum(limit){
//   let multiplesOfThree = 0;
//   let multiplesOfFive = 0;
  let sum  = 0;

  for(let i=0; i<=limit; i++){
    //   if (i % 3 === 0)
    //      multiplesOfThree+=i;
    //   else if (i % 5 === 0)
    //      multiplesOfFive+=i;
    //   else
    //      continue;  

      if (i % 3 === 0 || i % 5 === 0)
         sum +=i;
  }

  //return multiplesOfThree+multiplesOfFive;
  return sum;
}

// Exercise 9- Grade

const marks = [80,80,50]
// Calculate the average grade.
// If Average is 
// 0-59: F
// 60-59: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculatesGrade(marks));

function calculatesGrade(array){

   const average = calculateAverage(array);
   if (average < 60 ) return 'F';
   if (average < 70) return 'D';
   if (average < 80) return 'C';
   if (average < 90) return 'B';
   return 'A';

//    switch (average){
//        case (average < 60 ): return 'F';
//        case (average < 70): return 'D';
//        case (average < 80): return 'C';
//        case (average < 90): return 'B';
//        case (average < 100): return 'A';
//        default: return 'Invalid Grade';
//    }
}

function calculateAverage(array){
    let sum = 0;

    for (let value of array){
        sum += value;
    }
    
    return sum / array.length;
}

// Exercise 10- Stars

showStars(5);

function showStars(rows){
   for (let row=1; row<=rows; row++){
       let pattern = '';
       for (let i=0; i< row; i++)
           pattern += '*';
       console.log(pattern);
   }
}


// Exercise- Prime Numbers
// Prime numbers are numbers divisible by only itself and 1.

showPrimes(20);

function showPrimes(limit){
   for (let number=2; number<=limit; number++){
       
       let isPrime = true;
       for (let factor=2; factor<number; factor++){
           if (number % factor === 0){
              isPrime = false;        
              break;
           }
       }

       if(isPrime) console.log(number);
   }
}