"use treat"

// function myName(){
//     console.log("Arpit Panwar");
// }

// myName();

// function addition(n1,n2){ //here: n1,n2 known as PARAMETERS
//     console.log(n1+n2);
// }
// addition(5,44);//here: 5,44 are ARGUMENTS

// function myMarks(n1,n2,n3,n4,n5){
//     let avg = ((n1+n2+n3+n4+n5)/5);
//     return avg;
// }
// let result = myMarks(75,61,63,86,88);
// console.log(result);

// function logger(username){
//     if(!username){
//         console.log("User does not exists.");
//         return;
//     }return `${logger("arpit")} is logged in!`;
// }

// function calculateCartPrice(price){
//     return price;
// }
// console.log(calculateCartPrice(110,150,125));
//it will only take 1 value, to select all use rest (like spread)= ...xyz

// function calculateCartPrice(...value){
//     return value
// }
// console.log(calculateCartPrice(100,95,900));

const user = {
    username: "Arpit",
    price: 999
};

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `)
}
//handleObject(user); 
//we can directly add object too:
handleObject({
    username: "Shubham",
    price: 799
});

const newArr = [500,"Arpit","46LPA"];
function arraySecondValue(getArr){
    return getArr[1];
}
//console.log(arraySecondValue(newArr));
//same, we  can directly add any array too:
console.log(arraySecondValue([100,200,567]));