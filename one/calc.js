const readline = require('readline/promises');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
  let a = parseFloat(await rl.question("Enter value of a: "));
  let b = parseFloat(await rl.question("Enter value of b: "));

 console.log(`1. Addition`);
 console.log(`2. Subtraction`);
 console.log(`3. Multiplication`);
 console.log(`4. Division`);
 console.log(`5. Modulus`);

 let choice = parseInt(await rl.question("Choose an operation (1-5): "));

 switch (choice) {
    case 1:
      console.log(`Result of ${a} + ${b}: ${a + b}`);
      break;
    case 2:
      console.log(`Result of ${a} - ${b}: ${a - b}`);
      break;
    case 3:
      console.log(`Result of ${a} * ${b}: ${a * b}`);
      break;
    case 4:
      console.log(`Result of ${a} / ${b}: ${a / b}`);
      break;
    case 5:
      console.log(`Result of ${a} % ${b}: ${a % b}`);
      break;
      
    default:
      console.log("Invalid choice. Please select a number between 1 and 5.");
 }

  rl.close();
})();