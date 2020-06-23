// const sayHello = function (name) {
//     return "hey there" + name + "!"

// }
// console.log(sayHello('sammy'));


// const sayHello = (name) => {
//     return "hey there" + name + "!"

// }
// console.log(sayHello('sammy'));


const sayHello = (name) => `hey there ${name}`
console.log(sayHello('sammy'))

const todos = [{
    title: 'buy bread',
    isDone: true
}, {
    title: 'Go to Gym',
    isDone: true
}, {
    title: 'record youtube video',
    isDone: false
}]

// const thingsDone = todos.filter((todo) => {
//     return todo.isDone === true

const thingsDone = todos.filter((todo) => todo.isDone === true
)

console.log(thingsDone);
