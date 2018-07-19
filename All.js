describe('All Suite',function() {

	it('All Test',function() {
	
		 browser.get('http://juliemr.github.io/protractor-demo/');
		 element(by.model("first")).sendKeys("3");
		 element(by.model("second")).sendKeys("3");
		 element(by.id("gobutton")).click();	
		 
		 element(by.model("first")).sendKeys("3");
		 element(by.model("second")).sendKeys("4");
		 element(by.id("gobutton")).click();
		 
		 element(by.model("first")).sendKeys("3");
		 element(by.model("second")).sendKeys("5");
		 element(by.id("gobutton")).click();
		 
		 
		 element.all(by.repeater('result in memory')).each(function(item) {
		 	
			 item.element(by.css("td:nth-child(3)")).getText().then(function(text)  {
				
				 console.log(`The text is ${text}`);
			 
			 })
			 
			 
		 })
		 
		
	});
	
})
