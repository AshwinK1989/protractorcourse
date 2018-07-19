describe('Actions Suite', function() {

	it('Actions Test', function() {

		browser.get("http://posse.com/");
		element(by.model("userInputQuery")).sendKeys('restaurant');
		browser.actions().mouseMove(
				element(by.model('locationQuery')).sendKeys('Mumbai'))
				.perform();
		browser.actions().sendKeys(
				protractor.Key.chord(protractor.Key.ARROW_DOWN));
		browser.actions().sendKeys(
				protractor.Key.chord(protractor.Key.ARROW_DOWN)).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(
				function() {

					browser.sleep(5000);

				})

		expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']"))
		.count()).toEqual(14);
		
		element(by.css("a[ng-href*='29232']")).click().then(
				function() {

					browser.getAllWindowHandles().then(
							function(handles) {

								browser.switchTo().window(handles[1]);

								expect(element(by.tagName("h3")).getText())
										.toEqual("The Taj Mahal Palace");

								browser.switchTo().window(handles[0]);
								
								expect(browser.getTitle()).toEqual("Posse - Search - Find awesome in any city");

							})

				})

	})

})
