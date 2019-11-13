console.log('i am line 1')

setTimeout(() => {
    console.log('i am line 2')
}, 5000)

setTimeout(() => {
    console.log('i am line 3')
}, 1000)

setTimeout(() => {
    console.log('i am line 4')
}, 0)

console.log('i am line 5')