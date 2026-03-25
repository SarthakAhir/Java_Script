let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNum.filter((num) => num > 4);
// console.log(newNum);

let books = [
    {
        title: 'The Great Gatsby', genre : 'Fiction', published: 1925
    },
    {
        title: 'To Kill a Mockingbird', genre : 'Historical', published: 1960
    },
    {
        title: 'Interstaller', genre : 'Sci-Fi', published: 2014
    },
    {
        title: "Mahabharata", genre : 'Historical', published: 2014
    }

];

const userBooks = books.filter((bk) => bk.genre === 'Historical');
console.log(userBooks);