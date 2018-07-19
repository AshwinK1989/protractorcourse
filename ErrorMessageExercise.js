describe("Validate Error Message Suite",function () {
	
	it("Validate Error Message Test",function() {
	
		browser.get('https://qaclickacademy.github.io/protocommerce/');
		browser.actions().mouseMove(element(by.name('name')).sendKeys('a')).perform();
		element(by.css("input[name='email']")).click();

		expect(element(by.css("div[class*='danger']")).getText()).toEqual("Name should be at least 2 characters");
		
	})
	
	
})