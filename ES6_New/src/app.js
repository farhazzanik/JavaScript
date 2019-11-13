//let arr = [1, 2, 3]

//only accept for array es5 system
// let createIterator = (collection) => {

//     let i = 0;
//     return {
//     	next() {
//     		return {
//     			done: i >= collection.length,
//     			value : collection[i++]
//     		}
//     	}
//     }
// }


// let interator = createIterator(arr)



// let iterate = arr[Symbol.iterator]()



// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// let str = 'Text'
// let strIterator = str[Symbol.iterator]()

// console.log(strIterator.next())
// console.log(strIterator.next())
// console.log(strIterator.next())
// console.log(strIterator.next())
// console.log(strIterator.next())
// console.log(arr[Symbol.iterator])
// console.log('str'[Symbol.iterator])


// for(let v of arr){
// 	console.log(v)
// }


// for (let v of 'Mahfuzul haque'){
// 	console.log(v)
// }



//generator
// let obj = {
//     start: 1,
//     end: 5,
//     [Symbol.iterator]: function() {
//         let currentValue = this.start
//         const self = this
//         return {
//             next() {
//                 return {
//                     done: currentValue > self.end,
//                     value: currentValue > self.end ? undifined : currentValue++
//                 }
//             }
//         }

//     }

//     [Symbol.iterator]: function*() {
//         let currentValue = this.start
//         while (currentValue < this.end) {
//             yield currentValue++
//         }
//     }
// }

// let iterator = obj[Symbol.iterator]()

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


// function* generator() {
//     yield 1
//     yield 2
//     yield 3
// }


// let iter = generator();
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())


// function * generator(collection){
// 	for (var i = 0; i <= collection.length; i++) {
// 		yield collection[i]
// 	}

// }


// let ite = generator(arr)
// console.log(ite.next())
// console.log(ite.next())
// console.log(ite.next())
// console.log(ite.next())

//fucntion check is it iterable
// function isIterable(obj) {
//     return typeof obj[Symbol.iterator] === 'function'
// }

// let set = new Set([1,2,3])
// set.add(4)
// set.add(5)
// set.add(3)
// set.add(2)

// console.log(set)
// console.log(set.size)
// set.delete(1)
// console.log(set)
// console.log(set.has(2))
// console.log(set.keys())
// console.log(set.values())

// console.log(isIterable(set))
// let keysIterator = set.keys()
// let valuesIterator = set.values()
// console.log(keysIterator.next())
// console.log(valuesIterator.next())


// for(let v of set){
// 	console.log(v)
// }

// console.log(set.entries())

// let map = new Map([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]
// ])

// map.set('d', 40)
// map.set('e', 50)
// map.set({ name: 'Mahfuzul haque' }, 45)
// console.log(map)
// console.log(map.size)
// map.delete('c')
// console.log(map)
// console.log(map.get('a'))
// console.log(map.values())
// console.log(map.keys())
// console.log(map.entries())

// for (let [k, v] of map) {
//     console.log(k, v)
// }

// map.forEach((v, k) => {
//     console.log(v, k)
// })



// let a = { a: 10 },
//     b = { b: 20 }


// let weakSet = new WeakSet([a, b])
// a =null

// console.log(weakSet.has(b))

// let weakMap = new WeakMap([
//     [a, 10],
//     [b, 20]
// ])

// console.log(weakMap.get(a))

// class Rectengle{
// 	constructor(height,width){
// 		this.height = height
// 		this.width = width
// 		this.another = function(){
// 			console.log('own function...')
// 		}
// 	}


// 	draw(){
// 		console.log('drawing....')
// 	}

// 	test(){

// 	}
// }


// let rect  = new Rectengle(14,15)
// console.log(rect)
// console.log(rect.draw())


// class Person {
// 	constructor(name,email){
// 		this.name = name
// 		this.email = email


// 	}


// 	print(){
// 		//console.log(this.name , this.email)
// 		console.log(this)
// 	}


// 	static create(str){
// 		console.log(str)
// 		let person = JSON.parse(str)
// 		//console.log(person.name)
// 		return new Person(person.name,person.email)
// 	}
// }




// let str = '{"name" : "Mahfuzul Haque", "email" : "Mahfuzkhan2125@gmail.com"}'

// let p1 = Person.create(str)
// console.log(p1)
// console.log(p1 instanceof Person)
// console.log(p1.print())

// let print = p1.test
// console.log(print)

// const _height = Symbol()
// const _color = Symbol()
// const _draw = Symbol()
// class Shape {
// 	constructor(height,color){
// 		this[_height] = height
// 		this[_color] = color
// 	}

// 	[_draw](){
// 		console.log('drawing .... ')
// 	}
// }


// let sh = new Shape(14,'RED')
// console.log(sh)
// //console.log(Object.getOwnPropertyNames(sh))
// let keys  = Object.getOwnPropertySymbols(sh)[0]
// console.log(sh[keys])



// const _height = new WeakMap()
// const _color = new WeakMap()
// const _test = new WeakMap()
// class Shape {
//     constructor(height, color) {
//         this.size = 100
//         _height.set(this, height)
//         _color.set(this, color)
//         _test.set(this, () => {
//             console.log(this.size)
//         })
//     }

//     get height() {
//         return _height.get(this)
//     }

//     set height(v) {
//         _height.set(this, v)
//     }

//     draw() {
//         console.log('drawing .... ')
//         console.log(_height.get(this), _color.get(this))
//         _test.get(this)()
//     }
// }


// let sh = new Shape(14, 'RED')
// console.log(sh.draw())
// sh.height = 100
// console.log(sh.r)


// class Shape {
// 	constructor(color){
// 		this.color = color
// 	}

// 	draw(){
// 		console.log('drawing....')
// 	}
// }

// class Rectengle extends Shape{
// 	constructor(color,height,width){
// 		super(color)
// 		this.height = height
// 		this.width = width
// 	}

// 	mul(){
// 		return this.height * this.width
// 	}

// 	draw(){
// 		console.log('this is Rectengle drawing...')
// 	}

// }

// import Rectengle from './Rectangle.js'

// let rect = new Rectengle('Green',14,15)
// console.log(rect.draw())


// import * as func from './func.js'

// console.log(func.add(45,25))
// console.log(func.sub(45,25))



// import {add, sub} from './func.js'
// console.log(add(45,25))
// console.log(sub(22,26)) 

//Error handeling
// function convertInt(v){
// 	let convert = Number.parseInt(v)
// 	if(!convert){
// 		return "Please provite a exact number that con be convert"
// 	}
// 	return convert
// }


// console.log(convertInt('dfdfd85.65'))


// function makeWords(text) {
//     try {
//     	let str = text.trim( )
//     	let word = str.split(' ')
//     	return word
//     } catch (e) {

//     	//console.log(e.message)
//     	console.log("Please provide a valid text")

//     }
// }
// let words = makeWords(55)
// console.log(words)
class CustomError extends Error {
	constructor(msg){
		super(msg)
		
		if(Error.captureStackTrace){
			Error.captureStackTrace(this,CustomError)
		}
	}

}

try {
	console.log('I am line 1')
	throw new CustomError('i am your error')
	console.log('I am line 2')
	console.log('I am line 3')
} catch (e) {

	console.log(e.message)
	console.log('this is custom error message')

} finally {
	console.log('I am final block')
}