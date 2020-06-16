//declaration and name of function

let sayHello = function (name) {
  console.log(`greeting message for ${name}`);
  console.log(`hey ${name}`);
};

sayHello("john");

let fulNameMaker = function (firstname, lastname) {
  console.log("welcome to Lco");
  console.log(`hapy to have you, ${firstname} ${lastname}`);
};
fulNameMaker("john", "doe");

let myadder = function (num1, num2) {
  let added = num1 + num2;
  return added;
};
let result = myadder(3, 5);
console.log(result);

let mymultiplier = function (num1, num2) {
  return num1 * num2;
};

let guestUser = function (name = "unName", coursecount = 0) {
  return "hello  " + name + " and your course count is  " + coursecount;
};
console.log(guestUser("john", 1));