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

class Rectengle{
	constructor(height,width){
		this.height = height
		this.width = width
	}


	draw(){
		console.log('drawing....')
	}
}


let rect  = new Rectengle(14,15)
console.log(rect)
console.log(rect.draw())