"use treat"; //It'll treat the whole JS code as newer version (*its optional to add this line , but its too a good practice.) 

// alert(3 + 3); it will not work here becuase we are using node not any browser



let name = "Arpit"
let ContactNo = 911
let isLoggedIn = false
let HomeState;

/* DataTypes: 

    "PRIMITIVE"

      number -> 1/2/3........2^53 { Max Safe Int is (2^53 - 1)}
      bigInt -> same as number but used for larger one's (more than or equal to 2^53)
    
      string -> ""  (represents textual data)
    
      boolean -> True or False 
 
      undefined -> (means there's no value assigned)

      symbol -> for unique one's (*will talk later while learning react)

// null -> standalone value (& its a type of object)

    "NON-PRIMITVE"

      object -> 
      arrays -> 
      functions -> 

*/

console.log(typeof null)  //null is a type of object 
console.log(typeof undefined) //undefined is a type (means its a type of itself)