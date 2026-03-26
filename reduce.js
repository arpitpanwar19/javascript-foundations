const numbers = [2,4,6,8];

const total = numbers.reduce( function (acc, currval) {
    return acc + currval
},0)

//console.log(total);

const newNumbers = [1,2,3,4,5,6,7,8,9,10];
const newTotal = newNumbers.reduce( (acc,currval) => {
    return acc+currval 
}, 0);
console.log(newTotal);

const shoppingCart = [
    { itemName: "Apple iphone 17",
      itemPrice: 75000
    },
    { itemName: "Samsung Z fold 3",
      itemPrice: 150000
    },
    { itemName: "Apple Macbook air m2",
      itemPrice: 85000
    }
];

const totalPrice = shoppingCart.reduce( (acc,item) => {
    return acc+item.itemPrice
},0);
console.log(totalPrice);