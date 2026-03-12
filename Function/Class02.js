function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(100, 200, 300, 400));

console.log("=================================");

function calculateCartPrice1(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice1(100, 200, 300, 400, 500));

console.log("==================================");

const user = {
    username : "Sarthak",
    age : 22,
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}

handelObject(user);

console.log("==================================");

const myArray = [1, 2, 3, 4, 5];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myArray));