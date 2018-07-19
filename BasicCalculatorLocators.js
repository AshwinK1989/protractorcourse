function calculator()  {
	
	this.firstInput=element(by.model("first"));
	this.secondInput=element(by.model("second"));
	this.goButton=element(by.id("gobutton"));
	this.result=element(by.css("h2[class='ng-binding']"));
	
	
};

module.exports=new calculator();