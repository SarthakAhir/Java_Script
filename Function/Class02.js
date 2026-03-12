function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(100, 200, 300, 400));

console.log("=================================");

function calculateCartPrice1(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice1(100, 200, 300, 400, 500));