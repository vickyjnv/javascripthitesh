const myTodos = ['buy bread', 'go to gym', 'record video']

//console.log(myTodos.indexOf('buy bread'))

const newTodos = [{
    title: 'Buy Bread',
    isDone: false
}, {
    title: 'go to gym',
    isDone: false
}, {
    title: 'record videos',
    isDone: true
}]

// const index = newTodos.findIndex(function (todo, index) {
//     console.log(todo);
//     return todo.title === 'go to gym'
// })

//console.log(index)
//method1

// const findTodo = function (myTodos, title) {
//     const index = myTodos.findIndex(function (todo, index) {
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index]
// }
// let printMe = findTodo(newTodos, 'Go To Gym')
// console.log(printMe);
//method 2
const findTodo = function (myTodos, title) {
    const titleReturned = myTodos.find(function (todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned

}



let printMe = findTodo(newTodos, 'Go To Gym')
console.log(printMe);
