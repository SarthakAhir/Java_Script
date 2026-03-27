const myNums = [1,2,3]

const myTotal = myNums.reduce((acc, currval) => {
    // console.log(`acc: ${acc}, currval: ${currval}`);
    return acc + currval;
},0);
// console.log(myTotal);

const shoppingCart = [
    {
        item: "js course",
        price:3000
    },
    {
        item: "css course",
        price:2000
    },
    {
        item: "html course",
        price:1000
    },
    {
        item: "react course",
        price:3999
    }
]

let priceToPay = shoppingCart.reduce((acc, course) => acc + course.price, 0);

console.log(priceToPay);