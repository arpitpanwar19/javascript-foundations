"use treat"

const user = {
    username: "Jattlife",
    email: "arpit@google.com",

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome here!`) //this. is used to refer the current context for the scope!
        //console.log(this);
    }
}
user.welcomeMessage();
user.username = "Jordan";
user.welcomeMessage();
console.log(this);//in node environment, "this" refers to an empty scope; whereas in browser mode this returns windows bcz its the global object there.

// function chai(){
//     console.log(this);
// }
// chai(); //in functions we can't use like( this.username ).


//--------ARROW FUNCTION----------//

const code = () => {
    let username = "Arpit"
    console.log(username)
}
code();

//regular arrow function
// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(5,6));


//implicit return func.n (we don't need to add {} and return. )
const addTwo = (num1,num2) => (num1+num2);
console.log(addTwo(2,6));

const addObject = (userid) => ({username: "arpitpanwar19"});
console.log(addObject());