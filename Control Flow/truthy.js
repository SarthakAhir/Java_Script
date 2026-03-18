// falsy values: false, 0, -0, 0n, "", null, undefined, NaN

// truthy values: all values that are not falsy

// Example of truthy values : "0", "false", [], {}, function() {}, true, 1, -1, 0.1, -0.1, Infinity, -Infinity

// for Array :-
let userId = ["user1", "user2", "user3"]; 

if (userId.length === 0){
    console.log("Array is empty");
}

//for object :-

const emptyObj = {};

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}