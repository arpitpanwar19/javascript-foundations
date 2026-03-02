// let age = 17
// let age2 = "17"

// console.log(typeof (age)); //data-type = number
// console.log(typeof (age2)); //data-type = string

// let valueInNumber = Number(age2) //this will change the data-type from string to number (* use Number , not number while changing the data-type)

// console.log(typeof (valueInNumber))
 

// // "33" -> 33 (it'll convert)
// // "33abc" -> NaN (Not a number) but its datatype converted to "number"

// //true -> 1 ; false -> 0
 
// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// // 1 -> true
// // 0 -> false
// // "" -> false
// // "arpit" -> true

// let marks = "93"
// let stringNumber = String(marks);
// console.log(typeof (stringNumber));


// //*************** OPERATIONs ***************

// let value = 3
// let negValue = -value
// console.log(negValue)

// /* some basic one's: 
// console.log(2+4)
// console.log(4-3)
// console.log(2*3)
// console.log(2**3)
// console.log(10/5)
// console.log(4%5)
// */

// let str1 = "Arpit "
// let str2 = "Panwar"

// let str3 = (str1+str2);
// console.log(str3); //It will add both the strings

// console.log(2+2); 
// console.log(1+"2");
// console.log("2"+3);
// console.log("2"+2+1); //here, first value is of string datatype so it'll continue the operation as for strings , so = 221
// console.log(2+1+"2"); //here, first value is of number datatype so it'll continue it as for numbers , so = 32

// console.log("2"+1+"2"+3); //=2123

// console.log(+true); //it will give 1 as output
// console.log(true)

let p = 10;
let q = ++p;
let r = p + (q++);
const z = ((++r)+(q++)+(p++)-10);

console.log(p)
console.log(q)
console.log(r)
console.log(z)
