//first parameter - Test Suite name
//Second parameter - fucntion --> Funcation will have all tests(it blocks) 

describe('Protractor Steps', function() {

	it('open Angular js website', function() {

		browser.get('https://angularjs.org');

		browser.get('http://juliemr.github.io/protractor-demo/').then(
				function() {

					// In order to overcome asynchronous
					console.log("ITs the last step to execute");

				})

		// browser.sleep(5000);
		// console.log("ITs the last step to execute");
	})

	it('Close the browser', function() {
	})
})