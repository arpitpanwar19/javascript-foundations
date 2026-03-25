// for of loop
// ['','','']
// [{},{},{}]

const Arr1 = [30,50,45,32,38];
for (const marks of Arr1){
    //console.log(`I got ${marks} in x subject.`)   
}

const team = ["Arpit","Vaibhav","Indrajeet"];
for(const teamMate of team){
    //console.log(`${teamMate} is our team member.`);
}

const myName = "Arpit Panwar";
for(const nameAlphabets of myName){
    //console.log(`one of the alphabet is: ${nameAlphabets}`);
    
}

//Maps {it is similar to objects only, but in this only unique KEYS are there, and also it is in order.}

const map = new Map();
map.set("IN", "India");
map.set("US", "United States of America");
map.set("JP", "Japan");
//map.set("IND", "India");//it is admittable as the key is unique, no matter what value is.
//map.set("IN", "Indigo");//it is not admittable as the key isn't unique
//console.log(map)

for(const [key,value] of map){
    console.log(key,":-",value);
}

//this structur of for-of loop will not work on objects, so for object we'll study that later.

