describe('Non Angular Test Suite',function() {

	it('Non Angular Test',function()  {
		
		browser.waitForAngularEnabled(false);
		browser.get('https://www.google.com/');
		element(by.id('lst-ib')).sendKeys('protractor');
		element(by.name('btnK')).submit();
		
	})
});