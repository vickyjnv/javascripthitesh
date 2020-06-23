var john = {
    name: 'i am john"',
    age: 23,
    isActive: true,
}

var marry = {
    name: 'i am marry',
    age: 23,
    isActive: true
}

var sam = {
    name: 'i am sam',
    age: 29,
    isActive: false
}

let users = new Map()
//console.log(typeof users)
users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)

// console.log(users.size)
// console.log(users)
// console.log(users.get('sam'))
// console.log(users.keys())
//console.log(users.values())

// for (const value of users.values()) {
//     console.log(value.name)
// }

// for (const [key, value] of users.entries()) {
//     console.log(key + '=' + value.name)
// }

users.forEach((value, key) => console.log(key + '=' + value.name))

var arrOfArr = [['one', 1]]
