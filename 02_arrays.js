"use treat"

const wwe1 = ["Triple H","Undertaker","Kane"];
const wwe2 = ["Brock Lesnar","Roman Reigns","John Cena"];

//wwe1.push(wwe2); //it will add wwe2 the whole array as 1 element into wwe1 array, so not a good practice.
//console.log(wwe1);

//const wweAll = wwe1.concat(wwe2); //it will add the arrays but in a new array( doesn't change og arr).
//console.log(wweAll);

//NOTE: push() will make changes in the og array meanwhile concat() returns a new array.

// ... => means spread, it is used to spread any array into individual elements:
const wwe3 = [...wwe1, ...wwe2]; //it will add all the elements of wwe1 & wwe2 into one array.
console.log(wwe3); 


const badArr = [1,2,3,[2,3],5,[6,7,[5,4],[9,846,23],[44,55,66]],"haha"];
const goodArr = badArr.flat(Infinity); //it will return one single array having all the elements of arrays/sub-arrays,etc. we can also give depth too , like Infinity -> to make all individual, etc.
const anotherArr = badArr.flat(2);
console.log(badArr);
console.log(goodArr);
console.log(anotherArr);


console.log(Array.isArray("Jaat")); //returns boolean value(T/F) of the question.
console.log(Array.isArray(["Jaat",9,"hi"]));
console.log(Array.from("Jaat")); //it will change the given value into an array.

console.log(Array.from({name: "Arpit Panwar}"})); //NOTE: It will return [] because it is not provided that which value to be converted into array- keys or value..?


let score1 = 90;
let score2 = 95;
let score3 = 80;

console.log(Array.of(score1,score2,score3)); //it will return a new array from set of arrays. 
