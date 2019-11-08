//factory pattern
var createRect = function(height,width){

	return {
			height : height,
			width : width,


			draw : function(){
				console.log("I am a recetangle")
				this.printProperties()
				
			},

			printProperties : function(){
				console.log('My width is ' + this.width + ' My height is ' + this.height )
			}
	}
}


var rect1 =  createRect(10,20)
rect1.draw()
var rect2 =  createRect(25,56)
rect2.draw()
var rect3 =  createRect(30,258)
rect3.draw()

//constructor pattern
var Rectangle = function(height,width){
		
			this.height = height
			this.width = width


			this.draw = function(){
				console.log("I am a recetangle")
				this.printProperties()
				
			}	

			this.printProperties = function(){
				console.log('My width is ' + this.width + ' My height is ' + this.height )
			}
		
}

var rect4 = new Rectangle(10,25)
rect4.draw()



//how new keyword work

function myNew(cons){
		var obj = {}
		Object.setPrototypeOf(obj,cons.prototype)
		var argsArray = Array.prototype.slice.apply(arguments)
		cons.apply(obj,argsArray.slice(1))
		return obj
}


var rect5 = myNew(Rectangle,14,15)
rect5.draw()

//fuction are object same

function func(){
	console.log(dd);
}

console.log(typeof(func))

var Rect = new Function('height','width',`this.height = height
			this.width = width


			this.draw = function(){
				console.log("I am a recetangle")
				this.printProperties()
				
			}	

			this.printProperties = function(){
				console.log('My width is ' + this.width + ' My height is ' + this.height )
			}`);


var rect6 = new Rect(4,5)
console.log(rect6);


//bind call apply function details
//call

var obj = {
	a:45,
	b:15,
}
function myFunc(c,d){
	console.log(this)
	console.log(this.a + this.b+c+d)
}

myFunc.call(obj,10,15)

//applly
myFunc.apply(obj,[5,6])


//bind method
var test = myFunc.bind(obj)

test(8,9)


