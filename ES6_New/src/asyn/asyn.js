// console.log('i am line 1')

// setTimeout(() => {
//     console.log('i am line 2')
// }, 5000)

// setTimeout(() => {
//     console.log('i am line 3')
// }, 1000)

// setTimeout(() => {
//     console.log('i am line 4')
// }, 0)

// console.log('i am line 5')

// const xhr = new XMLHttpRequest()
// xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function(e) {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             let users = JSON.parse(xhr.response)
//             console.log(users)
//         } else {
//             console.log(xhr.status)
//         }
//     }
// }

// xhr.send()

function getRequest(url,callback) {

    const xhr = new XMLHttpRequest()
    xhr.open('get', url)

    xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.response)
                callback(null, response)
            } else {
                callback(error , null)
            }
        }
    }
    xhr.send()
}


getRequest('https://jsonplaceholder.typicode.com/users', (err , res) => {
	if(err){
		console.log(err)
	}else{
		res.forEach( r => console.log(r.name))
	}
})