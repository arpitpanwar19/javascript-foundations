//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
//iife is used to prevent from the pollution og GLOBAL SCOPE
//("function")("it call"):

//it is a named iife: (bcz it is a normal function and has a name)
(function dbManage() {
    console.log("DataBase connected sucessfully!")
})(); //here , ";" is strictly used to end line and stop the immediately invoked function.

//these are unnamed iife bcz they are arrow funnctions , withiut any names.
(()=>{
    console.log("Second DB connected too!")
})(); //if we do NOT ADD ";" after it then further IIFE eill not work

((name) => {
    console.log(`User Name is ${name}`)
})("Arpit");