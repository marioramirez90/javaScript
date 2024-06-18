// 01) Greet function TODO: implement welcomeMsg function

function welcomeMsg(name) {
  return "Welcome " + name;
}

console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

// TODO: implement calcGrossPrice function
function calcGrossPrice(netPrice, taxRate) {
  return netPrice * (1 + taxRate);
}
console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

// 03) Add Positive Function TODO: Implement the addPositive function

function addPositive(a, b) {
  if (a < 0) {
    a = -a;
  }
  if (b < 0) {
    b = -b;
  }

  return a + b;
}

console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));
