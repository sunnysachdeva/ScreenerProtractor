describe('To Test Screener Home Page functionalities',function(){

	beforeEach(function(){
		browser.get('https://www.screener.in/');
		browser.waitForAngular();
	});

	var homePage=require('../pages/HomePage.js');
	var data=require('../testdata/testdata.json');
	it('should search results have autocomplete menu', function(){
		homePage.enterCompanyName(data.CompanyName);
		expect(homePage.getSearchCounts()).not.toEqual(0);
	});
	
	if('should click drop down menu item',function(){
		
	});
});