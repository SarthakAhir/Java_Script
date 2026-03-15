// Immediately Invoked Function Expression (IIFE)   

// Global scope pollution can lead to conflicts and bugs in larger applications.
// IIFEs help to avoid this by creating a new scope for variables and functions, preventing them from being accessible outside of the IIFE.

(function Db(){
    //named IIFE
    console.log(`DB connected`);
})(); // IIFE is invoked immediately after its definition

( (name) => {
    console.log(`DB connected using arrow function ${name}`);
})('sarthak'); // IIFE using arrow function syntax