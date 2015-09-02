describe('To Test Screener Home Page functionalities',function(){

	var homePage=require('../pages/HomePage.js');
	var loginPage=require('../pages/LoginPage.js');
	var data=require('../testdata/testdata.json');
	
	beforeEach(function(){
//		browser.get('https://www.screener.in/');
		browser.waitForAngular();
	});
	
	it('should check all element present on Login Screen',function(){
		expect(loginPage.IsScreenerHomePresent()).toBe(true);
		expect(loginPage.IsSearchTextPresent()).toBe(true);
		expect(loginPage.IsLoginLinkPresent()).toBe(true);
	});
	
	it('should search results have autocomplete menu', function(){
		homePage.enterCompanyName(data.CompanyName);
		expect(homePage.getSearchCounts()).not.toEqual(0);
	});
	
//	if('should click drop down menu item',function(){
//		
//	});
});