import '../styles/index.scss'

//ES6 Arrow function syntext

//Es5 function declar

// function add(a,b){
// 	return a+b;
// }

// let add = (a ,b) => {
// 	return a+b;
// }

//single line funciton declare
// let sum = (a,b) => a+b

//single arg function declare
// let sqr = a => a*a

// console.log(add(45,25))
// console.log(sum(45,25))
// console.log(sqr(5))


// let obj = {
// 	name: 'Mahfuzul Haque',
// 	print : function(){
// 		setTimeout(() => {
// 			console.log(`this is ${this.name}`)
// 		},1000)
// 	}
// }

// obj.print()



// function sum(... rest) {
//     // let sum = 0;

//     // for (let i = 0; i < arguments.length; i++) {
//     //     sum = sum + arguments[i]
//     // }
//     // return sum

//     return rest.reduce((a,b) => a+b)
// }

// console.log(sum(1, 2, 3, 4, 5, 6))

//speard operator
// let a = [1, 2, 3]
// console.log(...a)

// let obj = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// let obj2 = {
// 	... obj
// }

//Enhance Object
// let a=10,b=20
// let obj = {
// 	a,
// 	b,
// 	print(){
// 		console.log("ES6 function declare")
// 	}
// }

// console.log(obj)
// console.log(obj.print())

// let person = {
//     name: 'Mahfuzul Haque',
//     email: 'mahfuzkhan2125@gmail.com',
//     address: {
//         city: 'Feni',
//         country: 'BD0'
//     }

// }

// let { name, email, address: { city, country } } = person
// console.log(name, email, city, country)

// let arr = [1, 2, 3, 4, 5]
// let [frist, second, , , last] = arr
// console.log(frist, second, last)


let obj = {
	a:10,
	b:20
}

console.log(Object.entries(obj))

let arr = [
	['a',10],
	['b',20]
]

console.log(Object.fromEntries(arr))