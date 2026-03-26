// filtering

const myNums = [1,2,3,4,5,6,7,8,9,10];

//filter (condition in same line)
const newNums = myNums.filter( (num) => num>5 )
console.log(newNums);

//filter (condition in a scope {}) //here we have to add "return" too 
const newNums2 = myNums.filter( (num) => {
    return num >= 6
} )
console.log(newNums2);

//for each method for same
const newNums3 = [];
myNums.forEach( (num) => {
    if(num>=6){
        newNums3.push(num) //push: it appends new element to the end of the array.
    }
} )
console.log(newNums3);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const filteredBooks = books.filter( (book) => (book.genre === "Science" && book.publish>2010))
console.log(filteredBooks);

