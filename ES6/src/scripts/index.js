import '../styles/index.scss'

//ES6 Arrow function syntext

//Es5 function declar

// function add(a,b){
// 	return a+b;
// }

let add = (a ,b) => {
	return a+b;
}

//single line funciton declare
let sum = (a,b) => a+b

//single arg function declare
let sqr = a => a*a

console.log(add(45,25))
console.log(sum(45,25))
console.log(sqr(5))