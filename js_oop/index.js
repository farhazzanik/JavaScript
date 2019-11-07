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