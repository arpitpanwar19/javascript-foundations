"use treat"
// officially there are two types of data: (1) Primitive , (2) Non-Primitive(aka Reference type)

//1) Primitive:  7 types: (String, Number, Boolean, Null, Undefined, Symbol, BigInt)
     
    const str1 = "Shubham";
    const Password = 8218;
    const isLoggedIn = false;
    let fine = null;
    let AccountNomine;
    let AccountId = Symbol(1531);
    let AccountBalance = 1100000n;
    
    console.log(typeof AccountId)
       
//2) Reference(non-primitive): 3 types: (Array, Objects, Functions)

    const friends = ["Sujal","Lakshay"]; //Array

    const f1data = {
        hometown: "Meerut",
        homestate: "uttar pradesh" ,
        contactNo: 90583858321
    }
    // console.log(f1data)

    const myFunction = function(){
        console.log("Hello, World!")
    }
  console.log(typeof myFunction) //it will say it "function" but real is: "object function"

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  

  // STACK (primitive) & HEAP (reference) { in stack we get copy of data but in heap we get reference to data}

  //STACK EXAMPLE
  let myName = "Arpit";
  let firstName = myName;
  firstName = "xyz"
  console.log(myName);
  console.log(firstName); // as its a copy so the change will hapen to it not to the og (i.e myName)

  //HEAP EXAMPLE
  let user1Data = {
    userEmail: "arpit@microsoft.com",
    userPassword: "Arpit@123"
  }

  let user2Data = user1Data;
  user1Data.userPassword = "Arpit@19"

  console.log(user1Data);
  console.log(user2Data); //Here, both the outputs will be same because the value is changed from the real data not any copy.
  

  //FOR DETAIL GO TO ECMA documentation!
  


