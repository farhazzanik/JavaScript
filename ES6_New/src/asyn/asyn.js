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

const xhr = new XMLHttpRequest()
xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

xhr.onreadystatechange = function(e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let users = JSON.parse(xhr.response)
            console.log(users)
        } else {
            console.log(xhr.status)
        }
    }
}

xhr.send()

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


promise example
let p1 = new Promise((resolve , reject) => {
	setTimeout( () => {
		console.log('one')
	},5000)
}) 


p1.then((v) => {
	console.log(v)
}).catch((e) => {
	console.log(e)
})


function getIphone(isPassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve('i got i phone')
            } else {
                reject(new Error('you have failed'))
            }
        }, 2000)
    })
}


getIphone(false)
    .then((res) => {
        console.log(res)
    })
    .catch((e) => {
        console.log(e,message)
    })

//fetch api 
const Base_url = 'https://jsonplaceholder.typicode.com'

fetch(`${Base_url}/users/1`)
    .then(res => res.json())

    .then((data) => {
        console.log(data)
        return Promise.resolve('New promise')
    }).then(newPromis => {
        console.log(newPromis)
    })
    .catch((e) => {
        console.log(e)
    })

function getRequest(url) {

    const xhr = new XMLHttpRequest()
    xhr.open('get', url)

    return new Promise((resolve, reject) => {

        xhr.onreadystatechange = function(e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = JSON.parse(xhr.response)
                    resolve(response)
                } else {
                    reject('Error Occured')
                }
            }
        }
        xhr.send()

    })


}

getRequest(`${Base_url}/users/100000`).
	then((res) => {
		console.log(res)
	})
	.catch(e => {
		console.log(e)
	})


const delay = s => new Promise(resolve => setTimeout(resolve, s * 1000))

delay(1).then(() => console.log('1 second delay'))
delay(2).then(() => console.log('2 second delay'))
delay(3).then(() => console.log('3 second delay'))
delay(4).then(() => console.log('4 second delay'))

let p1 = new Promise(resolve => {
    setTimeout(resolve, 1000, 'one')
})

let p2 = new Promise(resolve => {
    setTimeout(resolve, 3000, 'tow')
})

let promiseArr = [p1, p2]


Promise.all(promiseArr)
    .then(arr => console.log(arr))

Promise.race(promiseArr)
    .then(arr => console.log(arr))


async function fetchData(url) {
    try {
        let res = await fetch(`${url}/users`)
        let data = await res.json()
        let names = data.map(u => console.log(u.name))
        console.log(data)
    } catch (e) {
        console.log(e.message)
    }
}

fetchData(Base_url)

let asyncIterable = {
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            next() {
                if (i < 5) {
                    return Promise.resolve({
                        value: i++,
                        done: false
                    })
                } else {
                    return Promise.resolve({
                        done: true
                    })
                }
            }
        }
    }
}

let iterate = asyncIterable[Symbol.asyncIterator]();

(async function(){
	console.log(await iterate.next())
	console.log(await iterate.next())
	console.log(await iterate.next())
	console.log(await iterate.next())
	console.log(await iterate.next())
	console.log(await  iterate.next())
})();

(async function() {
    for await (let v of asyncIterable) {
        console.log(v)
    }
})()

async function* myasyncGenerator() {
    let i = 0
    while (true) {
        if (i > 0) return
        yield await Promise.resolve(i++)
    }
}

;(async function(){
	for await ( let v of myasyncGenerator()){
		console.log(v)
	}
})()