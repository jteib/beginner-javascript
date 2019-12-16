// Function Definition
function calculateBill(billAmount, taxRate = 0.14, tipRate = 0) {
  console.log('Running Calculate Bill!!');
  let total = billAmount + billAmount * taxRate + billAmount * tipRate;
  const pennies = total * 100;
  total = Math.round(pennies) / 100;

  return total;
}

// Function Call. Or **Run**
const wesTotal = 189.99;
const wesTaxRate = 0.06;
const myTotal = calculateBill(wesTotal, wesTaxRate);
console.log(myTotal);

// Function Definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('Wes');
console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}
