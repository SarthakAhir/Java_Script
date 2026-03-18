//Create a function to roll a dice & always display the value of the dice (1 to 6).

/* function rollDice() {

let dice = Math.floor(Math.random()*6) +1;
 console.log(`Value of dice after roll on: ${dice}`);
}
rollDice();
rollDice(); */

 //======================================================================

//Create a function that gives us the average of 3 number
/* function averageOfThree(a, b, c) {
    let average = (a + b + c) / 3;
   console.log(`Average of a,b,c : ${average}`);
}
averageOfThree(2,4,6); */

 //======================================================================

/*console.log(`Create a function that return the sum of number from 1 to n.`);

function nsum(n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum +=i; //sum = sum + i;
    }
    return sum;
}

console.log(nsum(6)); */

 //======================================================================

/* console.log(`create a function that return the concatenation of all Strings in an array`);

let str = ["hi","I","am","Sarthak"];

function concat(str) {
    let result ="";
    for(let i=0;i<str.length;i++){
        result += str[i];
    }
    return result;
}
console.log(concat(str)); */

 //======================================================================

 // what will be the output of this function

/*let greet="hello";

function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }

    innerGreet()
}
console.log(greet);
changeGreet(); */

 //======================================================================
//write a function that print "Hello world" 5 times at intervals of 2s each

/* let id = setInterval( ()=>{
    console.log("Hello world");
}, 2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("interval cleared");
}, 10000); */

 //======================================================================
 // write an arrow function named arrayAverage that accept an array of number and return the average of those number

 /* let arr = [1,3,2,4,5];

 let arrayAverage = (arr) =>{
    let avg = 0;
    for(let i=0; i<arr.length;i++){
        avg = avg + arr[i];
    }
    console.log(avg/(arr.length));
 };

 arrayAverage(arr); */
 
 //======================================================================
 // write an arrow function name isEven() that takes a single number as argument and return if it is even or not.

 /* let isEven = (a) =>{
    
    if(a % 2 === 0){
        console.log(`${a} is an Even number`);
    }else{
        console.log(`${a} is an Odd number`);
    }
 };

 isEven(5); */
 
 //======================================================================
 