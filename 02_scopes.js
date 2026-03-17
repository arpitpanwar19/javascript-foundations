/* 
The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

JS has the following kinds of scopes:
Global scope: The default scope for all code running in script mode.
Module scope: The scope for code running in module mode.
Function scope: The scope created with a function.
In addition, identifiers declared with certain syntaxes, including let, const, class, or (in strict mode) function, can belong to an additional scope:

Block scope: The scope created with a pair of curly braces (a block).
*/

let a = 50;
    const b = 100;
    var c = 150;
if (true){
    let a = 5;
    const b = 10;
    var c = 15;
   };
console.log(a,b,c); //output = (50 100 15) instead of (50 100 150) because of "var"


function one(){
    const userName = "Harshi"

    function two(){
        const website = "arpit.org"
        console.log(userName);
    }
console.log(website); //it'll return error bcz website is in child scope ont parent's
two();
}
one();


//--------------INTERESTING--------------//

//first one, here normally we can call the function anywhere, means anywhere upside the below code too.
console.log(addOne(5));//like this
function addOne(num1){
    return (num1+1)
}

//here, we declared it too but holded as well, so if we tries to call it before initialization code it will show error:
//console.log(addTwo(5)); //like this.
const addTwo = function(num2){
    return (num2+2)
}
console.log(addTwo(5));

