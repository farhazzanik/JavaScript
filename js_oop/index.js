//factory pattern
var createRect = function(height, width) {

    return {
        height: height,
        width: width,


        draw: function() {
            console.log("I am a recetangle")
            this.printProperties()

        },

        printProperties: function() {
            console.log('My width is ' + this.width + ' My height is ' + this.height)
        }
    }
}


var rect1 = createRect(10, 20)
rect1.draw()
var rect2 = createRect(25, 56)
rect2.draw()
var rect3 = createRect(30, 258)
rect3.draw()

//constructor pattern
var Rectangle = function(height, width) {

    this.height = height
    this.width = width


    this.draw = function() {
        console.log("I am a recetangle")
        this.printProperties()

    }

    this.printProperties = function() {
        console.log('My width is ' + this.width + ' My height is ' + this.height)
    }

}

var rect4 = new Rectangle(10, 25)
rect4.draw()



//how new keyword work

function myNew(cons) {
    var obj = {}
    Object.setPrototypeOf(obj, cons.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    cons.apply(obj, argsArray.slice(1))
    return obj
}


var rect5 = myNew(Rectangle, 14, 15)
rect5.draw()

//fuction are object same

function func() {
    console.log(dd);
}

console.log(typeof(func))

var Rect = new Function('height', 'width', `this.height = height
			this.width = width


			this.draw = function(){
				console.log("I am a recetangle")
				this.printProperties()

			}	

			this.printProperties = function(){
				console.log('My width is ' + this.width + ' My height is ' + this.height )
			}`);


var rect6 = new Rect(4, 5)
console.log(rect6);


//bind call apply function details
//call

var obj = {
    a: 45,
    b: 15,
}

function myFunc(c, d) {
    console.log(this)
    console.log(this.a + this.b + c + d)
}

myFunc.call(obj, 10, 15)

//applly
myFunc.apply(obj, [5, 6])


//bind method
var test = myFunc.bind(obj)

test(8, 9)

//call by value and call by reference
//pass by value and pass by reference

var n = 10

function change(n) {
    n = n + 100
    console.log(n)
}


change(n)
console.log(n)

var NewObj = {
    a: 10,
}

function MyChange(n) {
    NewObj.a = NewObj.a + 100
    console.log(NewObj.a)
}

MyChange(NewObj.a)

console.log(NewObj.a)



// how abstraction work in javascript
var Rectangle = function(height, width) {

    var position = {
        x: 10,
        y: 20
    }


    this.height = height
    this.width = width


    var printProperties = function() {
        console.log('My width is ' + this.width + ' My height is ' + this.height)
    }.bind(this)

    this.getPostiton = function() {
        return position
    }

    this.draw = function() {
        console.log("I am a recetangle")
        printProperties()
        console.log("position x is " + position.x + " position y is " + position.y)

    }

    Object.defineProperty(this, 'position', {
        get: function() {
            return position
        },

        set: function(value) {
            position = value
        }
    })


}


var rect7 = new Rectangle(15, 16)
rect7.draw()
console.log(rect7.getPostiton())
console.log(rect7.position)
rect7.position = {
    x: 58,
    y: 56
}

console.log(rect7.position)

//instance vs prototype

var Extends = function(Parent, child) {
    Parent.prototype = Object.create(child.prototype)
    Parent.prototype.constructor = Parent

}

var Shape = function(color) {
    this.color = color
}

Shape.prototype.common = function() {
    console.log("this is common function")
}


var Square = function(width, color) {
    Shape.call(this, color)
    this.width = width

    this.getWidth = function() {
        console.log("width is " + this.width)
        this.draw();
    }


}

Extends(Square, Shape)

Square.prototype.draw = function() {
    console.log("this is Square")
}

Square.prototype.toString = function() {
    this.getWidth()
    console.log("this is my width " + this.width)
}

Square.prototype.common = function() {
    console.log("this is common functio for Square")
}



var sqr1 = new Square(14, 'Green')
var sqr2 = new Square(15, 'white')
var shape = new Shape()

var Circle = function(radius, color) {
    this.radius = radius
    Shape.call(this, color)

}

Extends(Circle, Shape)
cr = new Circle(2.5, "Yellow")

//Method overriding

Circle.prototype.common = function() {
    // Shape.prototype.common.call(this)
    console.log("I am function from circle and overriding")
}
console.log(sqr1)
console.log(sqr2)

var ArrayObj = [sqr1, shape, cr]

for (var i of ArrayObj) {
    i.common()
}
//class system mixin
//inheritence and composition and mixin
function mixin(target, ...sources) {

    Object.assign(target.prototype, ... sources)
}


var catnEat = {
    eat: function() {
        console.log('Eating....')
    }
}

var canWalk = {
    walk: function() {
        console.log('Walking.....')
    }
}

var canSwim = {
	swin : function(){
		console.log('Swiming....')
	}
}

//object system
// var person = Object.assign({}, catnEat, canWalk)
// console.log(person)


var Person = function(name) {
    this.name = name
}

mixin(Person, catnEat, canWalk)
var person = new Person("Mahfuzul Haque")
console.log(person)

var GoldFish = function(name) {
	this.name = name
}
mixin(GoldFish , catnEat , canSwim)
var gf = new GoldFish("Bla Bla")
console.log(gf)
