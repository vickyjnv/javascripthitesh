//change title
//document.title = 'fuck you'


// const myElement = document.querySelectorAll('.classone')
// console.log(myElement[0]);

const myPElements = document.querySelectorAll('p')

myPElements.forEach(function (p) {
    p.textContent = 'I am the changed loop in js'
})

const myNewPara = document.createElement('p')

myNewPara.textContent = 'i was added via js'
document.querySelector('body').appendChild(myNewPara)

// document.querySelector('button').addEventListener('click', () => {
//     // alert('button pressed')

// })

document.querySelector('button').addEventListener('click', (event) => {
    // alert('button pressed')
    event.target.textContent = 'i was clicked'
})