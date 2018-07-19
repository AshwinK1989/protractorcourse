function Car () {
	
	this.color='red';
	this.engine='turbo';
	this.brand='fiat';
	
	this.getModel = function () {
		
		console.log('The model is F10');
	}
	
}
module.exports= new Car();