//for each loop

const webDev = ["html","css","javascript","react.js","node.js","mongoDB","Express.js"]

//in functions
webDev.forEach( function(vals){
    //console.log(vals);
})

//in arrow function
webDev.forEach( (items)=>{
    //console.log(items);  
} )


//pre-written function
function getsBack(values){
    //console.log(values)
};
//webDev.forEach( getsBack ); //don't put getsBack() , bcz here we are giving reference only.

//  webDev.forEach( (vals, index, arr) => {
//     console.log(vals, index, arr);
//  }  )

const coding = [
    { 
        languageName: "JavaScript",
        fileName: "js"
    },
    { 
        languageName: "Python",
        fileName: "py"
    },
    { 
        languageName: "C++",
        fileName: "cpp"
    }
]
coding.forEach( (name) => {
    console.log(name.languageName);    
} )

