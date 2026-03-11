"use treat"
//singleton => made when constructor[i.e Object.create] is used instead of literal

//object literals(i.e const xyz = {})

const appUsers = {
    name: "Arpit", "last name": "Panwar",
    email: "arpitpanwar@gmail.com",
    age: 17,
    isLoggedIn: false
};

console.log(appUsers.isLoggedIn); //a way to get the value, we'll use it in most cases.
console.log(appUsers["isLoggedIn"]);// another way to get the value, sometimes its only method.
console.log(appUsers["last name"]);//it can only be accessed by this method.


//HOW TO DECLARE AND THEN ADD A SYMBOL IN OBJECTS AS A KEY.

const mySym = Symbol("key1");
 
const JsUsers = {
    //to add a symbol we've to use [] instead of just passing the name.
    [mySym]: "myKey1"
}
console.log(JsUsers[mySym]); //its the only method to return this(symbol), . method will not work


//to overwrite any key, use this:
appUsers.email = "arpit@google.com";

//but if you want to lock the object, for NO FURTHER CHANGES, use this:
//Object.freeze(appUsers);
//appUsers.age = 18; //it'll not work bcz object is freezed.

//console.log(appUsers);


//Add a function:

appUsers.greetings = function(){
    console.log(`Hey! Welcome ${this.name} `)
}
//console.log(appUsers.greetings); //it'll retur just the reference, that its a function, but not the value.
console.log(appUsers.greetings());

