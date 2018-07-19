describe('Chain Locators Suite',function() {

	it('Chain Locator Test',function() {
	
		 browser.get('http://juliemr.github.io/protractor-demo/');
		 element(by.model("first")).sendKeys("3");
		 element(by.model("second")).sendKeys("3");
		 element(by.id("gobutton")).click();	
		 element(by.repeater('result in memory')).
				 element(by.css("td:nth-child(3)")).getText().
				 then(function(text) {
					
					 console.log(text);
				 });
		 
	});
		 
		
	 it('Chain Locator Test1',function() {
				
			 browser.get('http://juliemr.github.io/protractor-demo/');
			 element(by.model("first")).sendKeys("3");
			 element(by.model('operator')).element(by.css("option[value='MULTIPLICATION']")).click()
			 element(by.model("second")).sendKeys("3");
			 element(by.id("gobutton")).click();	
			 element(by.repeater('result in memory')).
					 element(by.css("td:nth-child(3)")).getText().
					 then(function(text) {
						
						 console.log(text);
					 });
			 
		});		 
	
});
	