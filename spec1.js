describe('Protractor Test',function() {
	
  var locators = require("./BasicCalculatorLocators.js");
  var  d = require("./data.js");
  var using = require("jasmine-data-provider");
  
  beforeEach(function(){
	  
	 browser.get('http://juliemr.github.io/protractor-demo/');
  
  });
  
using(d.dataprovide,function(data,description){
	
	it('Protractor Test Case2 '+description,function() {
		  
		  locators.firstInput.sendKeys(data.firstInput);
		  locators.secondInput.sendKeys(data.secondInput);
		  locators.goButton.click();	  
		  locators.result.getText().then(function(text) {
			   
			   console.log(text);
		   	   expect(data.result).toEqual(text);
		   });
		
	});
	
	
})

	

  
  afterEach(function() {
	  
	  console.log("The test is completed")
  });
  
});