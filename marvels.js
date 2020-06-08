// const superHeros = ["Ironman", "spiderman", "cap America"];

// console.log(superHeros);
// console.log(superHeros[0]);
// console.log(superHeros[2]);
// console.log(superHeros[superHeros.length - 1]);
// console.log(`we have ${superHeros.length} superheros`);
// console.log(`we have ${superHeros[superHeros.length - 1]} superheros`);

//methods in javascript

const numbers = ["one", "two", "three", "four", "five", "six"];

// numbers[1] = "Something";
// console.log(numbers);

//start

// console.log(numbers.shift());
// console.log(numbers);

// numbers.unshift("something");
// console.log(numbers);

//end
//numbers.pop();
// console.log("the element is to be deleted is :" + numbers.pop());
// console.log(numbers);

numbers.push("seven");
console.log(numbers);

//middle
numbers.splice(2, 2, "something");
console.log(numbers);
