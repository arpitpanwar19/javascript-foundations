"use treat"

const GravitasUser = {};
  GravitasUser.id = 110111;
  GravitasUser.name = "arpit19";
  GravitasUser.isLOggedIn = false;
  GravitasUser.rank = 1;

//console.log(GravitasUser);


//we can also add objects in objects:
const premiumUsers = {
    email: "arpit@discord.com",
    name: {
        fullName: {
            firstName: "Arpit",
            lastName: "Panwar"
        }
    }
}
console.log(premiumUsers);
console.log(premiumUsers.name);
console.log(premiumUsers.name.fullName);
console.log(premiumUsers.name?.fullName.firstName); // ? is optional for now, it is used when we are not confirmed whether it exists or not, so by using it we don't have to use if-else all the time.



//TO add two or more objects in a single then use: Object.assign(), which copies all properties from source objects to a target object.

const obj1 ={
    1:"a", 2:"b", 3:"c"
}
const obj2 = {
    4:"d", 5:"e"
}

const obj3 = Object.assign({},obj1,obj2); //here, {} is optional but it ensures that it will act as the target object and all other as source objects, hence all other objects will get merge into it and it will assigned as obj3
console.log(obj3);

//MOSTLY the spread (...) method will be used:
const obj4 = {...obj1, ...obj2};
console.log(obj4);



//ADDING SEVERAL OBJECTS IN ARRAY:

const dataArr = [
    {
        id: 1,
        userName: "Arpit"
    },
    {
        id: 2,
        userName: "Pawan"
    },
    {
        id: 3,
        userName: "Vaibhav"
    },
    {
        id: 4,
        userName: "Abhinav"
    }
];
console.log(dataArr[3].userName);


//WE can also get only "KEYS" or "VALUES" by Object.keys() or Object.values() & it will return in an Array;

console.log(Object.keys(GravitasUser));
console.log(Object.values(GravitasUser));

//theres one more thing i.e Object.entries() by which all the keys and values pairs will become diff-diff arrays:
console.log(Object.entries(GravitasUser));

//If we are not sure that any property exists in object then we can confirm through:
console.log(GravitasUser.hasOwnProperty("IsLOggedIn"));




//DE-STRUCTURE OF OBJECTs

const course = {
    courseName: "B.Tech CSE",
    courseDuration: "4 years",
    courseBuyer: "Arpit Panwar"
};

const {courseBuyer: student} = course;

console.log(student);

//JSON format: 

//it may lookalike an object but it doesn't have any specific name like objects, and here we have to use "" for both keys and values.
// {
//     "name": "Shubham",
//     "profession": "Delhi Police",
//     "location": "Meerut"
// }

//or

[
    {},
    {},
    {}
]






