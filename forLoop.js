// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(i==7){
        ///console.log("Thala for a reason 🤣")
    }
    //console.log(element);
    
}

for( let i = 0; i <= 5; i++){
    //console.log(`Outer loop value ${i}`);
    for(let j=0;j<=5;j++){
        //console.log(`Inner loop value ${j} & Outer loop value ${i}`)
        //console.log(i+"*"+j+"="+(i*j))

    }
}

let myArr = ["Arpit","Lakshya","Rudra","Sujal","Harshi"]
for( let i=0;i<myArr.length;i++){
    const element = myArr[i]
    //console.log(element)
}


// break & continue

for(let i=0;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`);
        continue;
        //break;                
    }
    console.log(`Value of i is ${i}`);
    
}