"use treat"

const score = 100; //it will considered as number
const balance = new Number(700); //it will definitely considered as number (for sure)

console.log(score);
console.log(balance);

console.log(balance.toFixed(2))//it'll make sure that decimals will be there(here=2 decimals)
console.log(score.toString())//it'll convert number to the string.

const newBalance = new Number(1200.999);
console.log(newBalance.toPrecision(5))//it'll round of and gives the given number of digits(here = 5)

const hundreds = new Number(100000000);
console.log(hundreds.toLocaleString('en-In'))//it will add commas according to the Indian number system


//-------------------- MATHEMATICS--------------------//

console.log(Math);
console.log(Math.abs(-9)); //absolute(abs) will convert -ve value to +ve.

console.log(Math.round(12.50));//it'll round off the number normally.
console.log(Math.ceil(12.1));//it'll round off the number to upper value.
console.log(Math.floor(12.9));//it'll round off the number to lower value.
console.log(Math.pow(2,5))//expected output will be:(2 raise to the power 5) i.e 32
console.log(Math.min(2,5,33,65,4,6,0.1,0.11));//it will give the lowest value of array.

//The most used one:
console.log(Math.random); //by default it will gives a random number between 0 & 1.

console.log(Math.floor(Math.random()));//it will give the round off (to lower value) always because of Math.floor , and here it will definitely gives 0 as output.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1))+min); //it is the best formula to get output between the min and maximum value according to you and also a round off value.


//---------------------------end----------------------------//



