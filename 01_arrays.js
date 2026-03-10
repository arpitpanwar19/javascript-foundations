"use treat"

const myArr = [1,7,19,4,0,2]; //to define array brackets[] are used.

console.log(myArr[3]); //to acess any of the element use their index value (that starts from 0) inside the brackets[].

//Js array copy operation creates "Shallow copies".
//A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values).

const myArr2 = new Array("Arpit","Sarthak","Sujal");
const myArr3 = ["Shubham","Panwar", 19];

console.log(myArr2[2]);

//array methods

myArr2.push("Harshi"); //push() will add the element into array at last.
console.log(myArr2);

myArr2.pop(); //pop() will remove the last element from the array.
console.log(myArr2);

myArr2.unshift("Rudra"); //unshift() will add the element at the starting of array (but use only if necessory because it gives a little load to system if the array is very big.)
console.log(myArr2);

myArr2.shift(); //shift() will remove the first element of array.
console.log(myArr2);

console.log(myArr.includes("arpit")); //it will ask the array whether given value is in the array or not, and it will answer in boolean value (i.e true or false)
console.log(myArr.indexOf(5));//it will return the index value of the given element and if the element is not present then it will return the value: -1

const newArr = myArr.join(); //it will bind the array and convert into String.
console.log(newArr);
console.log(typeof(newArr));

const myNewArr1 = ["A",myArr];
console.log(myNewArr1);
console.log(myArr.slice(1,3)); //it will return the element having index: 1 , 2 (END range i.e 3 will not include)

//SLICE(): Extracts a portion of an array without modifying the original array.
//in slice, the range is given in parenthesis, example: slice(2,5); here the elements having index value 2,3,4 will be extracted.

const myNewArr2 = ["B",myArr];
console.log(myNewArr2);
console.log(myArr.splice(1,3));
console.log(myArr);

//SPLICE(): Adds, removes, or replaces elements in the original array.
//in splice, the value given in the parenthesis is in way, for example: splice(2,5); here the 5 elements starting from index value 2 will get extracted and will be deleted from og array as well.


