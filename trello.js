// const days = ["mon", "tue", "wed", "thru", "fri", "sat"];

// console.log(days[0]);

// //let sayHello =
// days.forEach(function (day, index) {
//   console.log(`day starts with${index + 1}--${day}`);
// });

//console.log(days.length - 1);
// for (let index = 0; index < days.length; index++) {
//   //const element = days[index];
//   //console.log(element);
//   console.log(days[index]);
// }

const myTodos = [];

myTodos.push("buy bread");
myTodos.push("record videos");
myTodos.push("go to gym");

myTodos.forEach(function (todo, index) {
  console.log(`your task no. ${index + 1} is: ${todo}`);
});
