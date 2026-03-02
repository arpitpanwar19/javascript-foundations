/* Some basic comparison:
console.log(2>3);
console.log(3==3);
console.log(2=<2);
console.log(2!=2);
*/

console.log("2"!=2); //it'll run but that's not good practice because both have different data-types.


console.log(null == null);
console.log(null == 0);
console.log(null > 0);
console.log(null >=0);
   //reason--->>> the equality check(==) & comaprisons(>,<,>=,=<) works differently because comparison converts null to the number, treating it as 0.

console.log(undefined == 0) //problem is same but it'll gives false as output.....so avoid all these types of comparisons!!!


// STRICT CHECK i.e "==="

console.log("2"===2); // EO: false , bcz in strick checking the datatype is also checked.