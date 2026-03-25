//for in loop

const myObject1 = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}
for(const key in myObject1){
    console.log(`${key} means ${myObject1[key]}`);    
}

const programming = ["js","cpp","rust","ruby","java","python"];
for(const key in programming){
    console.log(programming[key]);//here we have to use this method bcz by default array has 0,1,2...(its index value) as its keys as well, so thats why...btw in for of loop , we don't have to do like this.    
}
 
//here, in FOR IN LOOP , map is not iterable(we'll study later, the method of using it)