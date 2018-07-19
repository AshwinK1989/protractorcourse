describe("Using different Locators Suite",function() {
	
	it("Using different Locators Test", function() {
		
		
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		element(by.name('name')).sendKeys('Ashwin');
		element(by.css("input[name='email']")).sendKeys("test123@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("test123");
		element(by.className("form-check-input")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
		element.all(by.id("inlineRadio2")).first().click()
		
		element(by.buttonText('Submit')).submit();
		element(by.css("div[class*='success']")).getText().then(function(text) {
		
			console.log(text);
			
		})
		
	})
	
})