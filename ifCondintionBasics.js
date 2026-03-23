//if
/*if(condition){

  //if condition=true then the code of this scope will run otherwise not.

}*/

//comparision operators: { <,>,<=,>=,==,=== }; here: === refers to strict equality which also check the  datatype not just value.

/*if(2=="2"){
    console.log("executed")
};
if(2==="2"){
    console.log("executed_twice")
};*/

// let score = 200;

// if(score>=100){
//     let myInstincts = "Team A will win!" 
//     console.log("Team A has higher chances of winning.")
// }else{
//     console.log("Team B has higher chances of winning.")
// }
// console.log(myInstincts);

//NOTE: myInstincts is out of the function scope so thats why there will be error, otherwise the whole code is correct.


// let balance = 1000;
// //in shorthand method, the scope is implicit scope , i.e we assumed the scope of one line(till the ";")
// if(balance>500) console.log("test"); 
// if(balance>800) console.log("test_A"),
// console.log("test_B"); //it will run but not a GOOD PRACTICE



//NESTED one:

// let accBalance = 2000;

// if(accBalance<500){
//     console.log("Account balance is less than 500.")
// }else if(accBalance<1000){
//     console.log("Account balance is less than 1000.")
// }else if(accBalance<1500){
//     console.log("Account balance is less than 1500.")
// }else{
//     console.log("Account balance is greater than 1500.")
// }


// LOGICAL Operators: && (i.e and) , || (i.e OR)
let ifUserLoggedIn;
let ifDebitCard = true;
let ifLoggedViaEmail = false;
let ifLoggedViaGoogle = true;

if(ifLoggedViaEmail || ifLoggedViaGoogle){
    ifUserLoggedIn = false;
}

if(ifUserLoggedIn && ifDebitCard){
   console.log( "User is allowed to purchase items.")
} else{
    console.log("User is not allowed to purchase any item.")
};


