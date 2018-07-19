describe('Alerts Suite',function(){

	it('Alerts Test',function() {
	
		browser.waitForAngularEnabled(false);
		browser.get('http://www.qaclickacademy.com/practice.php');
		
		element(by.id('alertbtn')).click();
		
		browser.switchTo().alert().accept();
		
     element(by.id('alertbtn')).click();
		
		browser.switchTo().alert().dismiss();
	})
	
})
