const firstName = "Arpit"
let repoCount = 150

//console.log(firstName " GitHub " + repoCount); //it will concatenate things but not a good practice (its old fashion)

//The right way, through string interpolation:
console.log(`Hello I am ${firstName} and my Github repocount is ${repoCount}`);

//one more method to define string:
const lastName = new String('Panwar');
console.log(lastName[0].__proto__); //just a way to see onject

console.log(firstName.length); //to print length of string 
//there are lot of functions(or methods) like length , etc
console.log(lastName.toUpperCase());
console.log(firstName.charAt(3));
console.log(lastName.indexOf('w'));

const dcName = new String("Jatt-life");
let newDcName = dcName.substring(0,4); //end value will not include in the new string.
console.log(newDcName);

//slice will work with negative values too:
let anotherName = dcName.slice(-9,6);
console.log(anotherName);

const emailId = "   arpit@google.com     "
console.log(emailId);
console.log(emailId.trim()); //it will remove the extra space from start & end of string.

const url = "https://arpit.com/port%20folio";
console.log(url.replace('%20','-')); //it will replace all the items to the assigned one 
console.log(url.includes('arpit')); //it will check that whether the given value is there in the string or not.

console.log(url.split('/')); //it will split the whole string from wherever you set.

//MUST CHECK ITS MDN DOC, vey much important!