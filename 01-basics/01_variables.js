//keywords used: const, let, var


//const= constant (fixed values)
const AccountId = 250240

//let = they are only accessed within the block/statement unlike var
let AccountEmail = "arpit@gmail.com"

//var = variable (value can be changed)
var AccountCity = "Meerut"

//We can also assign the values without using const/let/var but it is not a good practice.
AccountPassword = "12345678"

//We can also just assign any variable without any value....its value will be saved as undefined.

let AccountState;


/* 
   Prefer not to use "var" because 
   of the issue of block-scope & functional-scope.
*/

//let's try to change values:
 AccountPassword = "123456"

//  AccountId = 121 {it will not change bcz its a constant}

//  console.log(AccountPassword);
//  console.log(AccountId);

 //console.table([]) = It will print the variables(which ever selected) in tabular form.
console.table([AccountId, AccountEmail, AccountPassword, AccountCity,AccountState])