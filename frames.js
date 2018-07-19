describe('Frames Suite',function(){

	it('Frames Test',function() {
	
		browser.waitForAngularEnabled(false);
		browser.manage().window().maximize();
		browser.get('http://www.qaclickacademy.com/practice.php');
		
		browser.switchTo().frame('courses-iframe');
		

        element(by.css("a[href*='sign_in']")).getText().then(function(text) {
        
        	console.log(text);
        })
		
	})
	
})
