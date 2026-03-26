const numbers = [1,2,3,4,5,6,7,8,9,10];

const nums2 = numbers.map( (nums) => { return nums+10} )
//console.log(nums2);
//we can use another method (for each) for the same as well.


//chaining //we can also add more than one filter/map/loop anything.
const newNums = numbers
                .map( (num) => {return num*10 })
                .map( (num) => {return num/5 })
                .filter( (num) => { return num > 10})

            console.log(newNums);

