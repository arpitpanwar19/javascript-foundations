//while loop

let i = 0;
while (i<=10){
    //console.log(`Value of i is ${i}`);
    i+=2;      
}

let employees = ["Arpit", "Vaibhav", "Indrajeet"];
let arr = 0;

while(arr<employees.length){
    const empName = employees[arr];
    //console.log(`Employee name is ${empName}`);
    arr++; 
}


//do while

let score = 110; 
do{
    console.log(`Score is ${score}`); //it will run atleast 1 time.
    score+=10;    
}while(score<110);