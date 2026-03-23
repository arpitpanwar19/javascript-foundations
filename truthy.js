// let userEmail = []

// if(userEmail){
//     console.log("Have the user email.")
// }else{
//     console.log("Doesn't have the user email")
// };

//Falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined

//Truthy values: (all except falsy one's for example):
// "0", 'false', " ", [], {}, function(){} & so on....

// if(userEmail.length === 0){
//     console.log("Array is empty.")
// }

// const newObject = {}
// if(Object.keys(newObject).length === 0){ //basically here the object is turned into array and then the length is checked.
//     console.log("Object is empty.")
// }

//SOME extra points:
// false == 0 // => true
// false == ''// => true
// false == "0"// => true
// 0 == " "// => true
// true == 0 // => false




// Nullish Coalescing operator (??): null undefined

/*
  This is a new operator and used for the safety of code, like to remove the errors that maybe occurs dur to "null or undefined values" by changing their values as given.
  or
  The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
*/

// let val1;
//   //val1 = 5 ?? 10; 
//   //val1 = null ?? 0;
//   //val1 = undefined ?? 10;
//   //val1 = null ?? undefined ?? 10 ;
//   val1 = undefined ?? 0 ?? 90;
  
// console.log(val1);


//NOTE: there is one more operator i.e TERNARY OPERATOR in which ? is used , but both of them are different, basically ternary operator is like a shorthand statement of if-else.

//Ternary Operator:
// condition ? true : false;

// const isCoursePrice = 999;
// isCoursePrice<1000 ? console.log("CoursePrice is under 1000 INR") : console.log("Course is more tha 1000 INRR");