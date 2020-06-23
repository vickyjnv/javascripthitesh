const converToRs = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 64;
    } else {
        throw Error('amount needs to be in number')
    }

}

// const myValue = converToRs('five')
// console.log(myValue)

try {
    const myValue = converToRs('five')
    console.log(myValue)
} catch (error) {
    console.log(e)

}

console.log('i will not run if the program crashes')