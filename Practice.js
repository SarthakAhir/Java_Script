 /* //write a program in js ro delet all occurance of element 'num' in array
let arr = [1,2,3,4,5,6,2,3];
let num=2;

for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
for(occ of arr){
    console.log(occ);
} */

// find the no. of digits in a number
/* let num = 287152;
let count = 0; */

/* //3. Generate a random number btw 1 & 100

let num = Math.floor(Math.random() * 100) + 1;
console.log(num);

//4. Generate a random number btw 1 & 5

let Random = Math.random();
Random = Random * 5;
Random = Math.floor(Random);
Random +=1;
console.log(Random); */

 //======================================================================

 // 1. Write a js function that return array element larger than a number 

 /* let arr = [1,3,5,4,6,7,9,8];
 let num = 5;

 function larger(arr ,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>5){
            console.log(arr[i]);
        }
    }
 }
 larger(arr,num); */
 
 //======================================================================

//2. write a javascript function to extract unique characters from a string. str = "abcdabcdefgggh"  ans = "abcdefg"

/* let str = "abcdabcdefgggh";

function unique(str){
    let ans = "";

    for(let i=0;i<str.length;i++){
        let curr = str[i];

        if(ans.indexOf(curr)==-1){
            ans += curr;
        } 
    }
    console.log(`${ans}`);
}

unique(str); */

 //======================================================================

 //3. write a js function that accepts a list of country names as input and return the longest country name as output

/* let country = ["Australia","Germany","United States of America"];

 function long(country){
    let count = 0;

    for(let i=0;i<)
 } */

 //======================================================================
//4. write a js function to count the number of vowels in a string arugument.

/* let argu = "sarthak Ahir";

function vowels(argu){
    let count = 0;
    for(let i=0;i<argu.length;i++){
        if(argu[i] == 'a' || argu[i] == 'A' || argu[i] == 'e' || argu[i] == 'E'|| argu[i] == 'i'|| argu[i] == 'I'|| argu[i] == 'o'|| argu[i] == 'O'|| argu[i] == 'u'|| argu[i] == 'U'){
            count ++;
        }
    }
    console.log(count);
}
vowels(argu); */

 //======================================================================
//5. write a js function to generate a random number within a range(start,end)

/* let start = 100;
let end = 200;

function getNum(start,end){
    
    let num = Math.floor(Math.random() * end) + start;
    console.log(num);
}
getNum(start,end); */

 //======================================================================
 //6. write a js arrow function that return the square of a number 'n'
/*
 let square =(a) =>{
    console.log(a**2);
};
 square(5);*/
 //===========================================================

 //7. write a js to find the maximum element in array using reduce function.
 /* let arr=[1,2,4,3,5,7,8,5,9];

 let max= arr.reduce((max,el) =>{
    if(max < el){
        return el;
    }else{
        return max;
    }
 });

 console.log(max); */
 //===========================================================
