/* let btn = document.querySelector("button");
console.dir(btn);

// btn.onclick = function (){
//     // console.log("checked!")
//     alert("checked!");
// }; 

function sayhello(){
    alert("Hello!");
}
btn.onclick= sayhello; */

//======================================================================
/* let btns = document.querySelectorAll("button");

for(btn of btns){
    btn.onmouseenter = function (){
    console.log("Enter a button: ");
    }
    btn.onclick= sayhello;
}
function sayhello(){
    alert("Hello!");
} */

 //======================================================================
 let btns = document.querySelectorAll("button");

for(btn of btns){
    
    // btn.addEventListener("click",sayhello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function (){
    console.log("you double clicked the  button: ");
    });
}
    function sayhello(){
    alert("Hello!");
    }
    function sayName(){
    alert("your name!");
    }