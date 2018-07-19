describe('All Suite', function() {

	function add (a,b) {
		
		 element(by.model("first")).sendKeys(a);
		 element(by.model("second")).sendKeys(b);
		 element(by.id("gobutton")).click();	
	}
	
	it('All Test',function(){
	    browser.get('http://juliemr.github.io/protractor-demo/');

		add(2,2);
		add(2,3);
		add(2,4);
		
		element.all(by.repeater('result in memory')).each(function(item) {
		
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				
				console.log(`The text is ${text}`);
			})
		})
		
	})
})