let arr = [1, 2, 3]

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


for(let v of arr){
	console.log(v)
}


for (let v of 'Mahfuzul haque'){
	console.log(v)
}