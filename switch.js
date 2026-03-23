//synatx:

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let days = 4;

switch(days){
    case 1: 
      console.log("Mon");
      break;
    case 2: 
      console.log("Tue");
      break;
    case 3: 
      console.log("Wed");
      break;
    case 4: 
      console.log("Thu");
      break;
    case 5: 
      console.log("Fri");
      break;
    case 6: 
      console.log("Sat");
      break;
    case 7: 
      console.log("Sun");
      break;
    default:
        console.log("Default case matched");
        break;
} //NOTE: if any break statement is missing then all the cases below that will run EXCEPT default.


