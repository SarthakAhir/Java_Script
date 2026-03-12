function myName(){
    console.log("My name is Sarthak");
}

myName();

console.log("=================================");

function addTwoNumbers(num1, num2){
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
};

addTwoNumbers(5, 1);

console.log("=================================");

function returnSum(num1, num2){
    return num1 + num2;
};

let result = returnSum(5, 1);
console.log(`The sum is: ${result}`);

console.log("=================================");

function loginUser(username){
    if(!username){
        console.log("Please provide a username");
        return;
    }
    return `Welcome, ${username}!`;
}

console.log(loginUser("Sarthak"));
// console.log(loginUser());