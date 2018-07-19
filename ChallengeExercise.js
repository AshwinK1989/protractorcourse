describe("Challenge Exercise Suite",function() {
	
function selectCartItems (product) {
		
		element.all(by.tagName("app-card")).each(function(item) {
			
			item.element(by.css("h4[class='card-title'] a")).getText().then(function(text) {
			
				console.log(text);
				
				if(text==product) {
				
				item.element(by.css("button[class*='btn-info']")).click().then(function() {
					
					browser.sleep(5000)
				})
				}
				
			})
						
		})
		
	}
	
	
	it("Select Cart Items Test", function() {
				
		browser.get("https://qaclickacademy.github.io/protocommerce/shop");
		
		selectCartItems("iphone X");
		selectCartItems("Nokia Edge");
        element(by.partialLinkText("Checkout")).getText().then(function (text) {
        	
    		expect(text.charAt(11)).toEqual("2")
            
        	
        })
        
        var number=0;
        element(by.partialLinkText("Checkout")).click().then(function() {

        	element.all(by.css("td[class*='text-center']:nth-child(4)")).each(function(item) {
   			 item.element(by.css("strong")).getText().then(function(text) {
   				console.log(text);
   				number = number+Number(text.replace("₹. ",""));
   				console.log(Number(text.replace("₹. ","")));

   			})
   		})
        	
        })	
		    element(by.css("h3 strong")).getText().then(function(text) {
			expect(number).toEqual(Number(text.replace("₹. ","")));

		})
		
	})
	
})