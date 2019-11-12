import Shape from './Shape.js'
class Rectengle extends Shape{
	constructor(color,height,width){
		super(color)
		this.height = height
		this.width = width
	}

	mul(){
		return this.height * this.width
	}

	draw(){
		console.log('this is Rectengle drawing...')
	}

}

export default Rectengle 
